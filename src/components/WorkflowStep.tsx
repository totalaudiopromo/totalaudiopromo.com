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
    gradient: 'from-blue-50/50 to-white',
    stepBg: 'bg-blue-600',
    border: 'hover:border-blue-300',
    highlightBg: 'bg-blue-50',
    highlightBorder: 'border-blue-200',
    highlightText: 'text-blue-900',
    priceText: 'text-blue-600',
  },
  pitch: {
    gradient: 'from-amber-50/50 to-white',
    stepBg: 'bg-amber-600',
    border: 'hover:border-amber-300',
    highlightBg: 'bg-amber-50',
    highlightBorder: 'border-amber-200',
    highlightText: 'text-amber-900',
    priceText: 'text-amber-600',
  },
  tracker: {
    gradient: 'from-teal-50/50 to-white',
    stepBg: 'bg-teal-600',
    border: 'hover:border-teal-300',
    highlightBg: 'bg-teal-50',
    highlightBorder: 'border-teal-200',
    highlightText: 'text-teal-900',
    priceText: 'text-teal-600',
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
        rounded-2xl border border-stone-200 bg-gradient-to-br ${styles.gradient}
        shadow-sm p-6 sm:p-10
        hover:-translate-y-1 hover:shadow-lg
        ${styles.border}
        transition-all duration-200 ease-out
        ${featured ? 'ring-1 ring-cyan-200/50 ring-offset-4' : ''}
      `}
    >
      <div className={`grid lg:grid-cols-2 gap-8 items-center ${reversed ? '' : ''}`}>
        <div className={reversed ? 'lg:order-2' : ''}>
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`w-12 h-12 rounded-full ${styles.stepBg} text-white font-bold flex items-center justify-center shadow-sm text-xl`}
            >
              {step}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h3>
            {featured && (
              <span className="ml-2 px-3 py-1 text-xs font-bold uppercase bg-cyan-600 text-white rounded-full">
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

          <div className={`${styles.highlightBg} border ${styles.highlightBorder} rounded-xl p-4 mb-6`}>
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
