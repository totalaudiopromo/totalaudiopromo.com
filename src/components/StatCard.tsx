interface StatCardProps {
  value: string;
  label: string;
  description: string;
  colour: 'intel' | 'green' | 'pitch';
  size?: 'default' | 'large';
}

const colourClasses = {
  intel: {
    text: 'text-blue-600',
    bg: 'bg-blue-50/50',
    border: 'border-blue-200',
    hoverBorder: 'hover:border-blue-300',
  },
  green: {
    text: 'text-green-600',
    bg: 'bg-green-50/50',
    border: 'border-green-200',
    hoverBorder: 'hover:border-green-300',
  },
  pitch: {
    text: 'text-amber-600',
    bg: 'bg-amber-50/50',
    border: 'border-amber-200',
    hoverBorder: 'hover:border-amber-300',
  },
};

export function StatCard({ value, label, description, colour, size = 'default' }: StatCardProps) {
  const styles = colourClasses[colour];
  const isLarge = size === 'large';

  return (
    <div
      className={`
        ${styles.bg} rounded-2xl border ${styles.border} p-6 sm:p-8
        shadow-sm ${styles.hoverBorder}
        hover:-translate-y-1 hover:shadow-md
        transition-all duration-200 ease-out
        ${isLarge ? 'lg:col-span-1' : ''}
      `}
    >
      <div className={`${styles.text} font-bold mb-2 ${isLarge ? 'text-5xl sm:text-6xl' : 'text-4xl sm:text-5xl'}`}>
        {value}
      </div>
      <p className="font-bold text-gray-900 mb-2 text-lg">{label}</p>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
