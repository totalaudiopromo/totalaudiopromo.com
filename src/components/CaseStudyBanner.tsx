interface CaseStudyBannerProps {
  title: string;
  metrics: {
    before: string;
    after: string;
    label: string;
  }[];
}

export function CaseStudyBanner({ title, metrics }: CaseStudyBannerProps) {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">{title}</h2>
          <div className="w-24 h-1 bg-intel-600 mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-xl text-red-400 line-through opacity-70">{metric.before}</span>
                <span className="text-2xl text-white">&#8594;</span>
                <span className="text-2xl sm:text-3xl font-bold text-green-400">{metric.after}</span>
              </div>
              <p className="text-sm text-gray-300 font-medium">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm">
            Real results from a BBC Radio 1 campaign using Audio Intel + Pitch Generator
          </p>
        </div>
      </div>
    </section>
  );
}
