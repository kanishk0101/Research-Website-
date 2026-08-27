import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { ResearchCard } from "@/components/cards/ResearchCard"
import { PublicationCard } from "@/components/cards/PublicationCard"
import { NewsCard } from "@/components/cards/NewsCard"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80)' }} />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <span className="uppercase tracking-widest text-sm font-semibold text-primary mb-4 block">UM-DAE Centre for Excellence in Basic Sciences</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            The Excitation Dynamics &<br />Organic Materials Group
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light">
            Manipulating excitons and photons through the design of advanced conjugated organic materials for next-generation organic electronics, photonic devices, and targeted therapeutic applications.
          </p>

        </div>
      </section>

      {/* Statistics */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { label: "Years of Excellence", value: "25+" },
              { label: "Research Publications", value: "75+" },
              { label: "Current Lab Members", value: "5" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center space-y-2">
                <span className="text-4xl md:text-5xl font-heading font-bold text-primary">{stat.value}</span>
                <span className="text-sm uppercase tracking-widest font-semibold text-slate-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="pt-16 pb-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12">
            <div className="max-w-2xl">
              <h2 className="font-heading text-4xl font-bold text-slate-900 mb-4">Research Highlights</h2>
              <p className="text-slate-600 text-lg">
                Discover our core areas of focus and the innovative methodologies.
              </p>
            </div>
            <Link href="/research" className="text-primary font-semibold hover:underline hidden md:block">
              View All Research &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ResearchCard
              title="Targeted Photomedicine & Excited-State Therapeutics"
              overview="Our work in photomedicine leverages the precise tuning of molecular excited states to design next-generation agents for Photodynamic Therapy (PDT) and multimodal theranostics. We specialize in the structural engineering of robust, π-conjugated chromophores such as aryl-fused and π-extended BODIPYs that favour highly efficient Type-I and Type-II reactive oxygen species (ROS) generation."
              imageUrl="/images/targeted-photomedicine.png"
            />
            <ResearchCard
              title="Advanced Organic Light-Emitting Diodes (OLEDs) & Photophysics"
              overview="While conventional fluorescent OLEDs only emit light by harvesting singlet excitons (limiting internal quantum efficiency to 25%), phosphorescent devices utilize heavy-metal complexes to harvest both singlet and triplet excitons. Our group bridges this gap by designing and synthesizing sustainable, metal-free organic materials capable of harvesting both excited states to maximize electroluminescence efficiency."
              imageUrl="/images/oleds-photophysics.png"
            />
            <ResearchCard
              title="Organic Spintronics & Quantum Spin Dynamics"
              overview="A few organic molecules exhibit exceptionally long spin-coherence lifetimes, making them ideal candidates for quantum information processing and spintronic devices. We design highly rigid, radical-functionalized, or metal-coordinated organic architectures to study spin injection and transport properties. We aims to unravel the fundamental mechanisms governing spin-polarized charge transport, magnetoresistance effects, and chiral induced spin selectivity."
            />
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/research" className="text-primary font-semibold hover:underline">
              View All Research &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Publication */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-8 text-center">Featured Publications</h2>
          <div className="flex flex-col gap-6">
            <PublicationCard
              title="Host-controlled switching between TADF and RTP in acridone–carboline donor–acceptor dyads."
              authors="K.V. Barhate, J. Dutta and Neeraj Agarwal"
              journal="Spectrochimica Acta Part A: Molecular and Biomolecular Spectroscopy"
              volume="-"
              pages="128670"
              year="2026"
              doi="10.1016/j.saa.2026.128670"
            />
            <PublicationCard
              title="A Portable Device for Estimation of Curcuminoid Content in Turmeric"
              authors="Tanveer H. Tadavi, M. Yadav, B E Vardhmann, K. Subbu, N. Agarwal and K.I. Priyadarsini"
              journal="India Patent App. No. 202221063957 Granted"
              year="2026"
            />
            <PublicationCard
              title="Modulating the singlet-triplet energy gap with regio-specific substitution on dibenzo(a,c)phenazine to realize red TADF and their OLEDs"
              authors="K. V. Barhate, Smrutiranjan Nayak, M. A. Ahemad, K. Glusac, S Bose, Neeraj Agarwal"
              journal="Chemistry - An Asian J"
              year="2026"
              doi="10.1002/asia.70485"
            />
          </div>
          <div className="mt-10 text-center">
            <Link href="/publications">
              <Button variant="outline" size="lg">Browse Publication Library</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Group Preview */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-heading text-4xl font-bold text-slate-900 mb-6">Our Team</h2>
          <p className="text-slate-600 text-lg mb-10">
            We are a diverse group of passionate scientists, engineers, and thinkers committed to collaborative discovery.
          </p>
          <div className="flex justify-center -space-x-4 mb-10">
            {[
              "/images/prof-neeraj-agarwal.jpg",
              "/images/priti-verma.png",
              "/images/pradnya-parab.png",
              "/images/shubham-salvi.png",
              "/images/sneha-mishra.png",
              "/images/komal-barhate.png"
            ].map((imgSrc, i) => (
              <div key={i} className="w-16 h-16 rounded-full border-4 border-white bg-slate-200 flex items-center justify-center shadow-sm overflow-hidden z-0">
                <img src={imgSrc} alt={`Team Member ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
            <div className="w-16 h-16 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center shadow-sm z-10">
              <span className="text-sm font-bold text-slate-500">+3</span>
            </div>
          </div>
          <Link href="/members">
            <Button>Meet the Group</Button>
          </Link>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-heading text-4xl font-bold text-slate-900">Latest News</h2>
            <Link href="/news" className="text-primary font-semibold hover:underline hidden md:block">
              All News &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NewsCard
              title="New Publication in Spectrochimica Acta Part A"
              date="2026"
              category="Publication"
              summary="Our recent work 'Host-controlled switching between TADF and RTP in acridone–carboline donor–acceptor dyads' has been accepted."
              link="https://doi.org/10.1016/j.saa.2026.128670"
              imageUrl="/images/publication-spectrochimica.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
