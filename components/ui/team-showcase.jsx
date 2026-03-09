"use client";

import { useState } from "react";
import { FaBehance, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const TEAM_MEMBERS = [
  {
    id: "1",
    name: "Aarav Khanna",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: "2",
    name: "Mira Sethi",
    role: "Brand Strategist",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop",
    social: { linkedin: "#", instagram: "#" },
  },
  {
    id: "3",
    name: "Kabir Malhotra",
    role: "Head of Performance",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: "4",
    name: "Riya Kapoor",
    role: "Photography Lead",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    social: { instagram: "#", behance: "#" },
  },
  {
    id: "5",
    name: "Dev Mehra",
    role: "Product Designer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    social: { linkedin: "#", behance: "#" },
  },
  {
    id: "6",
    name: "Sana Arora",
    role: "Social Growth Lead",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
    social: { instagram: "#", twitter: "#" },
  },
];

export default function TeamShowcase({ members = TEAM_MEMBERS }) {
  const [hoveredId, setHoveredId] = useState(null);

  const col1 = members.filter((_, i) => i % 3 === 0);
  const col2 = members.filter((_, i) => i % 3 === 1);
  const col3 = members.filter((_, i) => i % 3 === 2);

  return (
    <div className="w-full max-w-6xl mx-auto py-2 md:py-4 font-body select-none">
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
        <div className="flex gap-2 md:gap-3 flex-shrink-0 overflow-x-auto pb-2 md:pb-0">
          <div className="flex flex-col gap-2 md:gap-3">
            {col1.map((member) => (
              <PhotoCard
                key={member.id}
                member={member}
                className="w-[112px] h-[124px] sm:w-[136px] sm:h-[148px] md:w-[160px] md:h-[174px]"
                hoveredId={hoveredId}
                onHover={setHoveredId}
              />
            ))}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mt-[48px] sm:mt-[56px] md:mt-[68px]">
            {col2.map((member) => (
              <PhotoCard
                key={member.id}
                member={member}
                className="w-[124px] h-[136px] sm:w-[150px] sm:h-[164px] md:w-[178px] md:h-[192px]"
                hoveredId={hoveredId}
                onHover={setHoveredId}
              />
            ))}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mt-[22px] sm:mt-[28px] md:mt-[34px]">
            {col3.map((member) => (
              <PhotoCard
                key={member.id}
                member={member}
                className="w-[116px] h-[128px] sm:w-[140px] sm:h-[154px] md:w-[166px] md:h-[180px]"
                hoveredId={hoveredId}
                onHover={setHoveredId}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-col gap-4 md:gap-5 pt-0 md:pt-2 flex-1 w-full">
          {members.map((member) => (
            <MemberRow
              key={member.id}
              member={member}
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function PhotoCard({ member, className, hoveredId, onHover }) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        "group overflow-hidden border border-black/20 cursor-pointer flex-shrink-0 transition-all duration-300",
        className,
        isDimmed ? "opacity-60" : "opacity-100"
      )}
      style={{
        boxShadow: isActive ? "8px 8px 0 #0B0B0B" : "4px 4px 0 rgba(11, 11, 11, 0.35)",
      }}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(member.id)}
      onBlur={() => onHover(null)}
      tabIndex={0}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-[filter,transform] duration-500 group-hover:scale-[1.02]"
        style={{
          filter: isActive ? "grayscale(0%) brightness(1)" : "grayscale(100%) brightness(0.8)",
        }}
      />
    </div>
  );
}

function MemberRow({ member, hoveredId, onHover }) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;
  const hasSocial =
    member.social?.twitter ||
    member.social?.linkedin ||
    member.social?.instagram ||
    member.social?.behance;

  return (
    <div
      className={cn("cursor-pointer transition-opacity duration-300", isDimmed ? "opacity-55" : "opacity-100")}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            "h-[10px] rounded-none flex-shrink-0 transition-all duration-300",
            isActive ? "bg-crimson w-5" : "bg-black/25 w-3"
          )}
        />
        <span
          className={cn(
            "text-base md:text-[18px] font-semibold leading-none tracking-tight transition-colors duration-300",
            isActive ? "text-white" : "text-white/70"
          )}
        >
          {member.name}
        </span>

        {hasSocial && (
          <div
            className={cn(
              "flex items-center gap-1.5 ml-1 transition-all duration-200",
              isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"
            )}
          >
            {member.social?.twitter && (
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 border border-black/15 text-silver-dim hover:text-crimson hover:border-crimson/60 transition-all duration-150 hover:scale-110"
                title="X / Twitter"
              >
                <FaTwitter size={11} />
              </a>
            )}
            {member.social?.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 border border-black/15 text-silver-dim hover:text-crimson hover:border-crimson/60 transition-all duration-150 hover:scale-110"
                title="LinkedIn"
              >
                <FaLinkedinIn size={11} />
              </a>
            )}
            {member.social?.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 border border-black/15 text-silver-dim hover:text-crimson hover:border-crimson/60 transition-all duration-150 hover:scale-110"
                title="Instagram"
              >
                <FaInstagram size={11} />
              </a>
            )}
            {member.social?.behance && (
              <a
                href={member.social.behance}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 border border-black/15 text-silver-dim hover:text-crimson hover:border-crimson/60 transition-all duration-150 hover:scale-110"
                title="Behance"
              >
                <FaBehance size={11} />
              </a>
            )}
          </div>
        )}
      </div>

      <p
        className={cn(
          "mt-1.5 pl-6 text-[10px] font-medium uppercase tracking-[0.2em] transition-colors duration-300",
          isActive ? "text-crimson" : "text-silver-dim/75"
        )}
      >
        {member.role}
      </p>
    </div>
  );
}
