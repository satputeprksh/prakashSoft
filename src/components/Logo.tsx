type Props = { className?: string; showText?: boolean };

export default function Logo({ className = "h-12", showText = true }: Props) {
  return (
    <div className={`flex items-center gap-3 ${showText ? "" : ""}`}>
      <svg viewBox="0 0 120 120" className={className} aria-label="Prakash Soft logo">
        <defs>
          <linearGradient id="psOrange" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffb347" />
            <stop offset="45%" stopColor="#ff7a00" />
            <stop offset="100%" stopColor="#e2530b" />
          </linearGradient>
          <linearGradient id="psSilver" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="45%" stopColor="#c9cdd3" />
            <stop offset="55%" stopColor="#8b9199" />
            <stop offset="100%" stopColor="#e6e9ec" />
          </linearGradient>
        </defs>
        {/* orbit swoosh */}
        <ellipse
          cx="60"
          cy="72"
          rx="52"
          ry="20"
          fill="none"
          stroke="url(#psSilver)"
          strokeWidth="5"
          transform="rotate(-18 60 72)"
        />
        {/* P */}
        <path
          d="M20 18h30c14 0 23 9 23 21s-9 21-23 21H36v22H20V18zm16 14v14h11c5 0 8-3 8-7s-3-7-8-7H36z"
          fill="url(#psOrange)"
        />
        {/* S */}
        <path
          d="M96 40c-4-4-11-6-17-6-11 0-19 6-19 15 0 8 6 12 15 14l7 1.5c3 .7 4.5 2 4.5 4 0 2.6-3 4.3-7.5 4.3-6 0-12-2.4-16-6l-7 12c5.5 5 14 8 22.5 8 12.5 0 21-6.4 21-16 0-8-5-12.6-14.6-14.7l-7-1.5c-3.2-.7-4.6-1.8-4.6-3.6 0-2.3 2.6-3.8 6.6-3.8 4.6 0 9.6 1.8 12.6 4.4L96 40z"
          fill="url(#psSilver)"
        />
        {/* pixel accents */}
        <g fill="url(#psOrange)">
          <rect x="78" y="10" width="9" height="9" rx="1.5" />
          <rect x="90" y="10" width="9" height="9" rx="1.5" opacity=".7" />
          <rect x="90" y="21" width="9" height="9" rx="1.5" opacity=".45" />
        </g>
      </svg>
      {showText && (
        <div className="leading-none">
          <div className="text-xl sm:text-2xl font-extrabold tracking-tight">
            <span className="text-orange-500">PRAKASH</span>{" "}
            <span className="text-slate-100">SOFT</span>
          </div>
          <div className="text-[9px] sm:text-[10px] tracking-[0.28em] text-slate-400 mt-1">
            YOUR TRUSTED TECH PARTNER
          </div>
        </div>
      )}
    </div>
  );
}
