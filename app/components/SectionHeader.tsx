interface SectionHeaderProps {
  badge: string;
  title: string;
  accent: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({ badge, title, accent, subtitle, center = true }: SectionHeaderProps) {
  return (
    <div className={center ? "text-center mb-16" : "mb-16"}>
      <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
        {badge}
      </span>
      <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
        {title} <span className="gradient-text">{accent}</span>
      </h2>
      {subtitle && (
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">{subtitle}</p>
      )}
      <div className={`w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mt-4 ${center ? "mx-auto" : ""}`} />
    </div>
  );
}
