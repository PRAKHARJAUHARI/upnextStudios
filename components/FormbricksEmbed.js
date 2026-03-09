'use client'

export default function FormbricksEmbed() {
  return (
    <div className="w-full">
      <div
        className="formbricks-embed"
        style={{ position: 'relative', height: '80dvh', overflow: 'auto' }}
      >
        <iframe
          src="https://app.formbricks.com/s/cmmfepybxbia9um01eqhrc9ds"
          frameBorder="0"
          title="Start Your Project - Upnext Agency"
          loading="lazy"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            border: 0,
          }}
        />
      </div>
    </div>
  )
}
