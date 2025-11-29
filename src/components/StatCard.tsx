interface StatCardProps {
  value: string;
  label: string;
  description: string;
  colour: 'intel' | 'green' | 'pitch';
  size?: 'default' | 'large';
}

const colourClasses = {
  intel: {
    text: 'text-intel-600',
    bg: 'bg-intel-50',
    border: 'border-intel-600',
    shadow: 'shadow-[6px_6px_0px_0px_#2563EB]',
    shadowHover: 'hover:shadow-[9px_9px_0px_0px_#2563EB]',
  },
  green: {
    text: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-600',
    shadow: 'shadow-[6px_6px_0px_0px_#16A34A]',
    shadowHover: 'hover:shadow-[9px_9px_0px_0px_#16A34A]',
  },
  pitch: {
    text: 'text-pitch-600',
    bg: 'bg-pitch-50',
    border: 'border-pitch-600',
    shadow: 'shadow-[6px_6px_0px_0px_#7C3AED]',
    shadowHover: 'hover:shadow-[9px_9px_0px_0px_#7C3AED]',
  },
};

export function StatCard({ value, label, description, colour, size = 'default' }: StatCardProps) {
  const styles = colourClasses[colour];
  const isLarge = size === 'large';

  return (
    <div
      className={`
        ${styles.bg} rounded-2xl border-4 ${styles.border} p-6 sm:p-8
        ${styles.shadow} ${styles.shadowHover}
        hover:-translate-x-1 hover:-translate-y-1
        transition-all duration-200 ease-out
        ${isLarge ? 'lg:col-span-1' : ''}
      `}
    >
      <div className={`${styles.text} font-black mb-2 ${isLarge ? 'text-5xl sm:text-6xl' : 'text-4xl sm:text-5xl'}`}>
        {value}
      </div>
      <p className="font-bold text-gray-900 mb-2 text-lg">{label}</p>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
