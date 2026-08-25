import { MemberCard } from "@/components/cards/MemberCard"

export const metadata = {
  title: "Group Members - The Excitation Dynamics & Organic Materials Group",
  description: "Meet the researchers and students of our laboratory.",
}

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero Header with Background Image Placeholder */}
      <div className="relative bg-slate-900 text-white py-24 mb-16 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center" 
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80)' }} 
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 shadow-sm">
              Group Members
            </h1>
            <p className="text-xl text-slate-300 font-light leading-relaxed">
              Intelligent and hardworking research enthusiasts.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 space-y-24">
        {/* Principal Investigator */}
        <section>
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-200">
            Principal Investigator
          </h2>
          <MemberCard
            name="Prof. Neeraj Agarwal"
            role={
              <>
                Professor<br />
                School of Chemical Sciences<br />
                UM-DAE Centre for Excellence in Basic Sciences<br />
                <a href="mailto:na@cbs.ac.in" className="hover:underline">na@cbs.ac.in</a>
              </>
            }
            bio={
              <div className="space-y-6">
                <div>
                  <p>
                    Prof. Neeraj Agarwal is Professor and Chairperson of the School of Chemical Sciences at the UM-DAE Centre for Excellence in Basic Sciences (CEBS), University of Mumbai. After completing his M.Sc. from IIT Roorkee, he earned his Ph.D. from IIT Bombay under Prof. M. Ravikanth. His postdoctoral research includes appointments at Bowling Green State University (USA), the Tata Institute of Fundamental Research (Mumbai), and the Max Planck Institute for Polymer Research (Germany). He established his independent research group at CEBS in 2010 and was promoted to Full Professor in 2025. His laboratory develops sophisticated heterocyclic and conjugated organic materials while investigating their excited-state dynamics for applications in organic optoelectronics, OLEDs, solar cells, and targeted biological systems. He has authored over 75 peer-reviewed research publications and is an elected member of the National Academy of Sciences, India (NASI) and a Fellow of the Indian Chemical Society.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Research Interests</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Conjugated Organic Materials</li>
                    <li>Organic Optoelectronics</li>
                    <li>Excited-State Dynamics</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Education</h3>
                  <ul className="space-y-1 leading-snug">
                    <li><strong>Ph.D. (2000–2004)</strong> — Indian Institute of Technology Bombay, Mumbai<br />Supervisor: Prof. M. Ravikanth</li>
                    <li><strong>M.Sc.</strong> — University of Roorkee (now IIT Roorkee)</li>
                    <li><strong>B.Sc.</strong> — University of Meerut, India</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Positions Held</h3>
                  <ul className="space-y-1 leading-snug">
                    <li><strong>Professor</strong> — CEBS (2025–Present)</li>
                    <li><strong>Associate Professor</strong> — CEBS (2016–2025)</li>
                    <li><strong>Reader F</strong> — CEBS (2011–2015)</li>
                    <li><strong>Assistant Professor</strong> — CEBS (2010)</li>
                    <li><strong>Postdoctoral Associate</strong> — Max Planck Institute for Polymer Research, Germany (2009–2010)</li>
                    <li><strong>Visiting Fellow</strong> — Tata Institute of Fundamental Research, Mumbai (2006–2009)</li>
                    <li><strong>Postdoctoral Associate</strong> — Bowling Green State University, Ohio (2004–2005)</li>
                  </ul>
                </div>

                <div>
                  <a href="https://scholar.google.com/citations?hl=en&user=pgSrq8oAAAAJ&view_op=list_works&sortby=pubdate" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center whitespace-nowrap rounded-3xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-slate-200 bg-white hover:bg-slate-100 text-slate-900 h-9 px-3">
                    Google Scholar
                  </a>
                </div>
              </div>
            }
            imageUrl="/images/prof-neeraj-agarwal.jpg"
            isPI={true}
          />
        </section>


        {/* PhD Scholars */}
        <section>
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-200">
            PhD Scholars
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <MemberCard
              name="Ms. Priti C. Verma"
              role="Ph.D. Scholar"
              imageUrl="/images/priti-verma.png"
              bio={
                <div className="text-left space-y-2">
                  <p><strong>Research interests:</strong> TADF based photocatalysts for organic reactions</p>
                </div>
              }
            />
            <MemberCard
              name="Ms. Pradnya Parab"
              role="Ph.D. Scholar"
              imageUrl="/images/pradnya-parab.png"
              bio={
                <div className="text-left space-y-2">
                  <p><strong>Research interests:</strong> Chiral photoluminescent materials for OLEDs</p>
                </div>
              }
            />
            <MemberCard
              name="Mr. Shubham Salvi"
              role="Ph.D. Scholar"
              imageUrl="/images/shubham-salvi.png"
              bio={
                <div className="text-left space-y-2">
                  <p><strong>Research interests:</strong> Photodynamic therapy</p>
                </div>
              }
            />
            <MemberCard
              name="Ms. Shivangi Dubey"
              role="Ph.D. Scholar (1st Year)"
              bio={
                <div className="text-left space-y-2">
                  <p><strong>Research interests:</strong> Rigid conjugated organics for organic spintronics</p>
                </div>
              }
            />
          </div>
        </section>


        {/* Alumni */}
        <section>
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-200">
            Alumni
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <MemberCard
              name="Dr. Qamar T. Siddiqui"
              role="Ph.D."
              bio={
                <div className="text-left space-y-2">
                  <p><strong>Ph.D. Thesis:</strong> Synthesis of organic materials, their photophysical and electrochemical studies and their applications in organic electronics</p>
                  <p><strong>Viva Voce:</strong> January 25, 2020</p>
                  <p><em>Currently at Gyeongsang National University</em></p>
                </div>
              }
            />
            <MemberCard
              name="Dr. Swati J. N. Dixit"
              role="Ph.D."
              imageUrl="/images/swati-dixit.png"
              bio={
                <div className="text-left space-y-2">
                  <p><strong>Ph.D. Thesis:</strong> Synthesis and photophysical studies of π-conjugated aromatic luminescent materials for organic electronic applications</p>
                  <p><strong>Viva Voce:</strong> May 15, 2024</p>
                  <p><em>Currently at Godrej, Mumbai</em></p>
                </div>
              }
            />
            <MemberCard
              name="Dr. Sneha R. Mishra"
              role="Ph.D."
              imageUrl="/images/sneha-mishra.png"
              bio={
                <div className="text-left space-y-2">
                  <p><strong>Ph.D. Thesis:</strong> Design, synthesis and development of NIR-absorbing cancer cell-targeted photosensitizers and their applications in photodynamic therapy</p>
                  <p><strong>Viva Voce:</strong> October 28, 2024</p>
                  <p><em>Currently at IQS Ramon Llull University, Barcelona, Spain</em></p>
                </div>
              }
            />
            <MemberCard
              name="Ms. Komal V. Barhate"
              role="Ph.D."
              imageUrl="/images/komal-barhate.png"
              bio={
                <div className="text-left space-y-2">
                  <p><strong>Ph.D. Thesis:</strong> Synthesis and photo physical studies of Heterocyclic materials for solid state devices.</p>
                </div>
              }
            />
          </div>
        </section>
      </div>
    </div>
  )
}
