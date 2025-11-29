import Image from 'next/image';

interface WorkflowStepProps {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  highlight: string;
  price: string;
  image: string;
  imageAlt: string;
  colour: 'intel' | 'pitch' | 'tracker';
  href: string;
  featured?: boolean;
  reversed?: boolean;
}

const colourClasses = {
  intel: {
    gradient: 'from-intel-50 to-white',
    stepBg: 'bg-intel-600',
    border: 'border-intel-600',
    highlightBg: 'bg-intel-100',
    highlightBorder: 'border-intel-600',
    highlightText: 'text-intel-900',
    priceText: 'text-intel-600',
    shadow: 'shadow-[8px_8px_0px_0px_#2563EB]',
  },
  pitch: {
    gradient: 'from-pitch-50 to-white',
    stepBg: 'bg-pitch-600',
    border: 'border-pitch-600',
    highlightBg: 'bg-pitch-100',
    highlightBorder: 'border-pitch-600',
    highlightText: 'text-pitch-900',
    priceText: 'text-pitch-600',
    shadow: 'shadow-[8px_8px_0px_0px_#7C3AED]',
  },
  tracker: {
    gradient: 'from-tracker-50 to-white',
    stepBg: 'bg-tracker-600',
    border: 'border-tracker-600',
    highlightBg: 'bg-tracker-100',
    highlightBorder: 'border-tracker-600',
    highlightText: 'text-tracker-900',
    priceText: 'text-tracker-600',
    shadow: 'shadow-[8px_8px_0px_0px_#D97706]',
  },
};

export function WorkflowStep({
  step,
  title,
  subtitle,
  description,
  features,
  highlight,
  price,
  image,
  imageAlt,
  colour,
  href,
  featured = false,
  reversed = false,
}: WorkflowStepProps) {
  const styles = colourClasses[colour];

  return (
    <article
      className={`
        rounded-2xl border-4 border-black bg-gradient-to-br ${styles.gradient}
        ${styles.shadow} p-6 sm:p-10
        hover:-translate-x-1 hover:-translate-y-1
        hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
        transition-all duration-200 ease-out
        ${featured ? 'ring-4 ring-intel-400 ring-offset-4' : ''}
      `}
    >
      <div className={`grid lg:grid-cols-2 gap-8 items-center ${reversed ? '' : ''}`}>
        <div className={reversed ? 'lg:order-2' : ''}>
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`w-12 h-12 rounded-full ${styles.stepBg} text-white font-bold flex items-center justify-center border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-xl`}
            >
              {step}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h3>
            {featured && (
              <span className="ml-2 px-3 py-1 text-xs font-bold uppercase bg-intel-600 text-white rounded-full border-2 border-black">
                Most Popular
              </span>
            )}
          </div>

          <p className="text-xl font-semibold text-gray-900 mb-2">{subtitle}</p>
          <p className="text-gray-600 mb-4 text-lg">{description}</p>

          <ul className="space-y-3 text-gray-700 mb-6">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-green-600 mt-0.5 text-lg">&#10003;</span>
                <span className="text-base">{feature}</span>
              </li>
            ))}
          </ul>

          <div className={`${styles.highlightBg} border-2 ${styles.highlightBorder} rounded-xl p-4 mb-6`}>
            <p className={`text-sm font-bold ${styles.highlightText}`}>{highlight}</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={href}
              className={`cta-button text-base px-6 py-3 ${styles.stepBg} hover:opacity-90`}
            >
              Start Free Trial
            </a>
            <span className={`text-xl font-bold ${styles.priceText}`}>{price}</span>
          </div>
        </div>

        <div className={`flex justify-center ${reversed ? 'lg:order-1' : ''}`}>
          <Image
            src={image}
            alt={imageAlt}
            width={320}
            height={320}
            className="drop-shadow-2xl animate-float"
          />
        </div>
      </div>
    </article>
  );
}
