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
    <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">{title}</h2>
          <div className="w-24 h-1 bg-intel-600 mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"
            >
              <p className="text-sm text-gray-400 font-medium mb-3 text-center">{metric.label}</p>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 uppercase tracking-wide">Before</span>
                  <span className="text-lg text-red-400 font-semibold">{metric.before}</span>
                </div>
                
                <div className="h-px bg-white/10 my-2" />
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 uppercase tracking-wide">After</span>
                  <span className="text-2xl sm:text-3xl font-bold text-green-400">{metric.after}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Real results from a BBC Radio 1 campaign using Intel Studio + Pitcher Studio
          </p>
        </div>
      </div>
    </section>
  );
}
