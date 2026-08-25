import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-4">The Excitation Dynamics & Organic Materials Group</h2>
            <p className="text-slate-600 max-w-sm mb-6">
              Manipulating Excitons and Photons for Next-Generation Electronics and Therapeutics.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/research" className="text-slate-600 hover:text-primary transition-colors">Research Areas</Link></li>
              <li><Link href="/publications" className="text-slate-600 hover:text-primary transition-colors">Publications</Link></li>
              <li><Link href="/news" className="text-slate-600 hover:text-primary transition-colors">Latest News</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Contact</h3>
            <address className="not-italic text-slate-600 space-y-2">
              <p>UM-DAE Centre for Excellence in Basic Sciences</p>
              <p>University of Mumbai</p>
              <p>School of Chemical Sciences</p>
              <p>Kalina, Santacruz (E), Mumbai 400098, India</p>
              <p className="pt-2"><a href="mailto:na@cbs.ac.in" className="hover:text-primary transition-colors">na@cbs.ac.in</a></p>
            </address>
          </div>
        </div>
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} The Excitation Dynamics & Organic Materials Group. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
