export function PersonalLogo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="brandMain" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="55%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
        <linearGradient id="brandAccent" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#67E8F9" />
          <stop offset="100%" stopColor="#0891B2" />
        </linearGradient>
        <filter id="brandGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="0.9" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Soft outer ring for definition on dark backgrounds */}
      <circle cx="16" cy="16" r="15" fill="none" stroke="url(#brandAccent)" strokeWidth="1" opacity="0.35" />

      {/* Stylized A mark */}
      <path
        d="M 8.8 25.2 L 16 6.2 L 23.2 25.2"
        stroke="url(#brandMain)"
        strokeWidth="2.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#brandGlow)"
      />

      {/* Crossbar */}
      <line
        x1="11.2"
        y1="17"
        x2="20.8"
        y2="17"
        stroke="url(#brandMain)"
        strokeWidth="2.3"
        strokeLinecap="round"
      />

      {/* Top node accent */}
      <circle cx="16" cy="4.2" r="1.1" fill="url(#brandAccent)" opacity="0.95" />

      {/* Subtle base curve */}
      <path d="M 9.5 26.3 Q 16 28.4 22.5 26.3" stroke="url(#brandAccent)" strokeWidth="0.9" fill="none" opacity="0.7" />
    </svg>
  )
}
