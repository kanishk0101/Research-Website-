import { NewsCard } from "@/components/cards/NewsCard"

export const metadata = {
  title: "News - The Excitation Dynamics & Organic Materials Group",
  description: "Latest news and updates from our laboratory.",
}

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden mb-16">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&q=80)' }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white shadow-sm mb-6">
              Latest News & Updates
            </h1>
            <p className="text-xl text-slate-300 font-light leading-relaxed">
              Our latest milestones and headlines.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Featured Article */}
        <section className="mb-20">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-200">
            Featured
          </h2>
          <NewsCard
            title="New Publication in Spectrochimica Acta Part A"
            date="2026"
            category="Publication"
            summary="Our recent work 'Host-controlled switching between TADF and RTP in acridone–carboline donor–acceptor dyads' has been accepted."
            link="https://doi.org/10.1016/j.saa.2026.128670"
            imageUrl="/images/publication-spectrochimica.jpg"
            isFeatured={true}
          />
        </section>

        {/* News Grid */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
            <h2 className="font-heading text-3xl font-bold text-slate-900">Recent Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <NewsCard
              title="New Publication in Spectrochimica Acta Part A"
              date="2026"
              category="Publication"
              summary="Our recent work 'Host-controlled switching between TADF and RTP in acridone–carboline donor–acceptor dyads' has been accepted."
              link="https://doi.org/10.1016/j.saa.2026.128670"
              imageUrl="/images/publication-spectrochimica.jpg"
            />
          </div>
        </section>
      </div>
    </div>
  )
}
