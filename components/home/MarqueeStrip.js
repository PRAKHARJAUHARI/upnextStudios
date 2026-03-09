const items = [
  'Brand Identity', '✦', 'Editorial Photography', '✦',
  'Fine Dining Menus', '✦', 'Dress Rental Campaigns', '✦',
  'Social Growth', '✦', 'UI/UX Design', '✦',
  'Fashion Lookbooks', '✦', 'Restaurant Branding', '✦',
]

export default function MarqueeStrip() {
  const doubled = [...items, ...items]

  return (
    <div className="py-5 border-y border-white/5 bg-charcoal overflow-hidden">
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {doubled.map((item, i) => (
            <span
              key={i}
              className={`inline-block px-5 whitespace-nowrap font-body text-xs tracking-widest uppercase ${
                item === '✦' ? 'text-crimson text-base' : 'text-silver'
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
