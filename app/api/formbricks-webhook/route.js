/**
 * ─────────────────────────────────────────────────────────────────
 * UPNEXT AGENCY — Formbricks Webhook Receiver
 * Route: POST /api/formbricks-webhook
 * ─────────────────────────────────────────────────────────────────
 *
 * This endpoint:
 * 1. Receives Formbricks survey submission payloads via POST
 * 2. Verifies the HMAC-SHA256 webhook signature for security
 * 3. Parses the submission data
 * 4. Contains a TODO block for Hostinger-specific backend processing
 *
 * SETUP:
 * ──────
 * In your Formbricks dashboard → Settings → Webhooks:
 *   • Endpoint URL: https://yourdomain.com/api/formbricks-webhook
 *   • Trigger: responseCreated (and optionally responseUpdated)
 *   • Copy the generated webhook secret
 *
 * In your .env.local (and Hostinger environment variables):
 *   FORMBRICKS_WEBHOOK_SECRET=your_secret_from_formbricks_dashboard
 *
 * SECURITY MODEL:
 * ───────────────
 * Formbricks signs each webhook with HMAC-SHA256 using the shared secret.
 * The signature is sent in the `x-webhook-signature` header as:
 *   t=<timestamp>,v1=<hex_signature>
 * We recompute the expected signature and compare using timingSafeEqual
 * to prevent timing attacks.
 * ─────────────────────────────────────────────────────────────────
 */

import { createHmac, timingSafeEqual } from "crypto";

/**
 * Verifies the Formbricks webhook signature.
 *
 * @param {string} rawBody - The raw request body string (pre-JSON-parse)
 * @param {string} signatureHeader - Value of x-webhook-signature header
 * @param {string} secret - FORMBRICKS_WEBHOOK_SECRET env variable
 * @returns {boolean} - true if signature is valid
 */
function verifyFormbricksSignature(rawBody, signatureHeader, secret) {
  if (!signatureHeader || !secret) return false;

  // Formbricks signature format: "t=<timestamp>,v1=<hex_digest>"
  const parts = Object.fromEntries(
    signatureHeader.split(",").map((part) => part.split("=")),
  );

  const timestamp = parts["t"];
  const receivedSignature = parts["v1"];

  if (!timestamp || !receivedSignature) return false;

  // Reject payloads older than 5 minutes to prevent replay attacks
  const fiveMinutesAgo = Math.floor(Date.now() / 1000) - 5 * 60;
  if (parseInt(timestamp, 10) < fiveMinutesAgo) {
    console.warn("[Upnext Webhook] Rejected: payload timestamp too old");
    return false;
  }

  // Recompute the expected HMAC signature
  // Formbricks signs: "<timestamp>.<rawBody>"
  const signedPayload = `${timestamp}.${rawBody}`;
  const expectedSignature = createHmac("sha256", secret)
    .update(signedPayload, "utf8")
    .digest("hex");

  // Constant-time comparison to prevent timing attacks
  try {
    const expectedBuffer = Buffer.from(expectedSignature, "hex");
    const receivedBuffer = Buffer.from(receivedSignature, "hex");
    if (expectedBuffer.length !== receivedBuffer.length) return false;
    return timingSafeEqual(expectedBuffer, receivedBuffer);
  } catch {
    return false;
  }
}

/**
 * Extracts a clean, structured lead object from the Formbricks payload.
 * Adapt the field IDs to match your actual Formbricks survey question IDs.
 *
 * @param {object} payload - Parsed Formbricks webhook payload
 * @returns {object} - Structured lead data
 */
function extractLeadData(payload) {
  const response = payload.data || {};
  const answers = response.answers || [];

  // Map Formbricks answer array into a key-value object
  const answerMap = {};
  for (const answer of answers) {
    // answer.questionId is the Formbricks question identifier
    // answer.value can be string, array, or object depending on question type
    answerMap[answer.questionId] = answer.value;
  }

  return {
    submittedAt: response.createdAt || new Date().toISOString(),
    surveyId: payload.surveyId || null,
    responseId: response.id || null,

    // ──────────────────────────────────────────────────────────
    // TODO: Replace these questionId strings with the actual
    // question IDs from your Formbricks survey. You can find
    // them in the Formbricks dashboard → Survey → Editor → each
    // question's settings panel.
    // ──────────────────────────────────────────────────────────
    name: answerMap["name_question_id"] || null,
    email: answerMap["email_question_id"] || null,
    brandName: answerMap["brand_name_question_id"] || null,
    sector: answerMap["sector_question_id"] || null, // e.g. "Fashion" | "Food"
    services: answerMap["services_question_id"] || [], // multi-select array
    budget: answerMap["budget_question_id"] || null,
    projectBrief: answerMap["brief_question_id"] || null,
    referralSource: answerMap["referral_question_id"] || null,

    // Raw answers preserved for debugging
    _rawAnswers: answers,
  };
}

/**
 * Main POST handler — the webhook receiver endpoint.
 */
export async function POST(request) {
  const webhookSecret = process.env.FORMBRICKS_WEBHOOK_SECRET;

  // 1. Read the raw body BEFORE parsing as JSON
  //    (signature verification requires the exact raw bytes)
  let rawBody;
  try {
    rawBody = await request.text();
  } catch (err) {
    console.error("[Upnext Webhook] Failed to read request body:", err);
    return new Response(JSON.stringify({ error: "Failed to read body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // 2. Verify webhook signature
  const signatureHeader = request.headers.get("x-webhook-signature");

  if (!webhookSecret) {
    // In production this should ALWAYS be set. Fail hard.
    console.error(
      "[Upnext Webhook] CRITICAL: FORMBRICKS_WEBHOOK_SECRET is not set!",
    );
    return new Response(
      JSON.stringify({ error: "Webhook secret not configured" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  const isValid = verifyFormbricksSignature(
    rawBody,
    signatureHeader,
    webhookSecret,
  );

  if (!isValid) {
    console.warn(
      "[Upnext Webhook] Signature verification FAILED. Rejecting request.",
    );
    return new Response(JSON.stringify({ error: "Invalid signature" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  // 3. Parse the JSON payload
  let payload;
  try {
    payload = JSON.parse(rawBody);
  } catch (err) {
    console.error("[Upnext Webhook] Invalid JSON in body:", err);
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // 4. Only process "responseCreated" events (ignore others)
  const eventType = payload.event || payload.type;
  if (
    eventType &&
    eventType !== "responseCreated" &&
    eventType !== "response.created"
  ) {
    console.log(`[Upnext Webhook] Ignoring event type: ${eventType}`);
    return new Response(JSON.stringify({ received: true, processed: false }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  // 5. Extract structured lead data
  const lead = extractLeadData(payload);
  console.log("[Upnext Webhook] New lead received:", {
    name: lead.name,
    email: lead.email,
    brand: lead.brandName,
    sector: lead.sector,
    submittedAt: lead.submittedAt,
  });

  // ─────────────────────────────────────────────────────────────────
  // TODO: HOSTINGER BACKEND PROCESSING
  //
  // Add your custom processing logic below. Examples:
  //
  // ── Option A: Save to a MySQL/PostgreSQL database (Hostinger supports both) ──
  // const { pool } = await import('@/lib/db')  // your DB connection pool
  // await pool.query(
  //   `INSERT INTO leads (name, email, brand_name, sector, services, budget, project_brief, submitted_at)
  //    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
  //   [lead.name, lead.email, lead.brandName, lead.sector,
  //    JSON.stringify(lead.services), lead.budget, lead.projectBrief, lead.submittedAt]
  // )
  //
  // ── Option B: Send a notification email via Hostinger SMTP ──
  // const nodemailer = require('nodemailer')
  // const transporter = nodemailer.createTransport({
  //   host: process.env.SMTP_HOST,       // e.g. smtp.hostinger.com
  //   port: 465,
  //   secure: true,
  //   auth: {
  //     user: process.env.SMTP_USER,     // Upnext.sociomedia@gmail.com
  //     pass: process.env.SMTP_PASS,
  //   },
  // })
  // await transporter.sendMail({
  //   from: '"Upnext CRM" <Upnext.sociomedia@gmail.com>',
  //   to: 'team@upnextagency.com',
  //   subject: `New Project Inquiry: ${lead.brandName || lead.name}`,
  //   html: `
  //     <h2>New Inquiry from ${lead.name}</h2>
  //     <p><strong>Brand:</strong> ${lead.brandName}</p>
  //     <p><strong>Sector:</strong> ${lead.sector}</p>
  //     <p><strong>Email:</strong> ${lead.email}</p>
  //     <p><strong>Budget:</strong> ${lead.budget}</p>
  //     <p><strong>Brief:</strong> ${lead.projectBrief}</p>
  //   `,
  // })
  //
  // ── Option C: Push to a CRM (HubSpot, Zoho, Notion DB, Airtable) ──
  // await fetch('https://api.hubspot.com/crm/v3/objects/contacts', {
  //   method: 'POST',
  //   headers: {
  //     'Authorization': `Bearer ${process.env.HUBSPOT_TOKEN}`,
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     properties: { email: lead.email, firstname: lead.name, company: lead.brandName }
  //   })
  // })
  //
  // ── Option D: Write to a JSON file (for simple Hostinger shared hosting) ──
  // const fs = require('fs').promises
  // const path = require('path')
  // const leadsFile = path.join(process.cwd(), 'data', 'leads.json')
  // const existing = JSON.parse(await fs.readFile(leadsFile, 'utf8').catch(() => '[]'))
  // existing.push({ ...lead, id: Date.now() })
  // await fs.writeFile(leadsFile, JSON.stringify(existing, null, 2))
  //
  // ─────────────────────────────────────────────────────────────────

  // 6. Respond with 200 OK — Formbricks will retry if you return an error
  return new Response(
    JSON.stringify({
      received: true,
      processed: true,
      responseId: lead.responseId,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );
}

/**
 * Reject non-POST methods
 */
export async function GET() {
  return new Response(JSON.stringify({ error: "Method not allowed" }), {
    status: 405,
    headers: { "Content-Type": "application/json", Allow: "POST" },
  });
}
