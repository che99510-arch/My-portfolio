// Reusable Mike Software SVG brand logo
// Use size prop to scale. variant="light" for dark backgrounds, "dark" for light backgrounds.

interface LogoProps {
  size?: number;
  variant?: "light" | "dark";
  showText?: boolean;
  className?: string;
}

export default function Logo({ size = 40, variant = "light", showText = true, className = "" }: LogoProps) {
  const textColor = variant === "light" ? "#ffffff" : "#111827";
  const accentColor = variant === "light" ? "#bfdbfe" : "#2563EB";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Icon mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="logoShine" x1="0" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Rounded square background */}
        <rect width="40" height="40" rx="10" fill="url(#logoGrad)" />
        <rect width="40" height="20" rx="10" fill="url(#logoShine)" />
        {/* M letterform — bold geometric */}
        <path
          d="M9 28V13h3.2l5.3 8.2 5.3-8.2H26V28h-3V18.5l-4.5 6.8h-2l-4.5-6.8V28H9z"
          fill="white"
          fillRule="evenodd"
        />
        {/* Accent dot */}
        <circle cx="32" cy="9" r="3" fill="#93c5fd" />
      </svg>

      {showText && (
        <span
          style={{ color: textColor }}
          className="font-black text-xl leading-none tracking-tight select-none"
        >
          Mike<span style={{ color: accentColor }}>Software</span>
        </span>
      )}
    </div>
  );
}
