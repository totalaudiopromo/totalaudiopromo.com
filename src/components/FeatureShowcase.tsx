import Image from 'next/image';

interface Feature {
  icon: 'email' | 'document' | 'user' | 'chart' | 'search';
  title: string;
  description: string;
}

interface FeatureShowcaseProps {
  headline: string;
  subheadline?: string;
  features: Feature[];
  image: string;
  imageAlt: string;
  mockupContent?: {
    name: string;
    role: string;
    email: string;
    submission: string;
  };
}

const featureIcons = {
  email: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  document: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  ),
  user: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  ),
  chart: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  ),
  search: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  ),
};

export function FeatureShowcase({
  headline,
  subheadline,
  features,
  image,
  imageAlt,
  mockupContent,
}: FeatureShowcaseProps) {
  return (
    <section className="py-12 sm:py-16 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">{headline}</h2>
          {subheadline && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subheadline}</p>}
        </header>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Mockup or Image */}
          <div className="order-2 lg:order-1">
            {mockupContent ? (
              <div className="bg-white rounded-2xl border border-stone-200 shadow-md p-5 max-w-md mx-auto">
                <div className="flex items-center gap-3 mb-3 pb-3 border-b border-stone-100">
                  <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center">
                    <span className="text-cyan-600 font-bold text-lg">
                      {mockupContent.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{mockupContent.name}</p>
                    <p className="text-sm text-cyan-600">{mockupContent.role}</p>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">{featureIcons.email}</span>
                    <span className="text-sm text-gray-600">{mockupContent.email}</span>
                    <span className="ml-auto px-2 py-0.5 text-xs font-bold bg-green-100 text-green-700 rounded">
                      96% confidence
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-0.5">{featureIcons.document}</span>
                    <span className="text-sm text-gray-600">{mockupContent.submission}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex justify-center">
                <Image
                  src={image}
                  alt={imageAlt}
                  width={400}
                  height={400}
                  className="drop-shadow-2xl"
                />
              </div>
            )}
          </div>

          {/* Right: Features */}
          <div className="order-1 lg:order-2 space-y-5">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600">
                  {featureIcons[feature.icon]}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
