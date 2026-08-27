import { ResearchCard } from "@/components/cards/ResearchCard"

export const metadata = {
  title: "Research - The Excitation Dynamics & Organic Materials Group",
  description: "Explore the research areas of our laboratory.",
}

export default function ResearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: 'url(/images/organic-spintronics.jpg)' }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white shadow-sm mb-6">
              Research Areas
            </h1>
            <p className="text-xl text-slate-300 font-light leading-relaxed">
              Manipulating Excitons and Photons for Optoelectronics and Therapeutics.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6">Overview</h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              <strong>Welcome to the Excitation Dynamics & Organic Materials Group</strong>, led by <strong>Prof. Neeraj Agarwal</strong> at the UM-DAE Centre for Excellence in Basic Sciences. Established in 2010, our laboratory operates at the cutting edge of molecular materials science, bridging quantum photophysics, heterocyclic chemical synthesis, and functional device engineering.
            </p>
            <p>
              Our research explores the precise modulation of molecular excited states—including singlet–triplet transitions, exciton migration, and spin polarization—across advanced carbon-based frameworks. By leveraging these fundamental quantum pathways, we drive breakthroughs across two complementary directions: high-efficiency photosensitizers, including aryl-fused and π-extended BODIPY platforms, for target-specific <strong>Photodynamic Therapy (PDT)</strong>, and electroactive materials for next-generation <strong>Organic Electronics & Spintronics</strong>.
            </p>
            <p>
              Ultimately, our goal is to translate innovative synthetic chemistry into high-performance technologies that reshape both precision healthcare and solid-state device architectures.
            </p>
          </div>
        </div>
      </section>

      {/* Research Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
        </div>
      </section>
    </div>
  )
}
