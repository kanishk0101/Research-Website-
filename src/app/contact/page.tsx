"use client"

import * as React from "react"
import { MapPin, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden mb-16">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&q=80)' }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white shadow-sm mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-slate-300 font-light leading-relaxed">
              Get in touch with us regarding research opportunities, collaborations, or general inquiries.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto mb-24">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-8 text-center">Get in Touch</h2>
          
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-10">
            {/* Address */}
            <div className="flex items-start">
              <MapPin className="w-8 h-8 text-primary mt-1 mr-6 shrink-0" />
              <div>
                <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">Mailing Address</h3>
                <address className="not-italic text-slate-600 leading-relaxed">
                  School of Chemical Sciences, UM DAE Center for Excellence in Basic Sciences,
                  <br />
                  University of Mumbai, Kalina, Santacruz (E),
                  <br />
                  Mumbai 400098, India
                </address>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <Mail className="w-8 h-8 text-primary mt-1 mr-6 shrink-0" />
              <div>
                <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">Email</h3>
                <p className="text-slate-600 text-lg">
                  <a href="mailto:na@cbs.ac.in" className="hover:text-primary transition-colors cursor-pointer">
                    na@cbs.ac.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Map */}
        <section className="max-w-4xl mx-auto mb-12">
          <div className="w-full h-[450px] bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-sm relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.835174415512!2d72.8576402!3d19.0709405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e6dfc9db7f%3A0xc66085a8647ef5eb!2sUM-DAE%20Centre%20for%20Excellence%20in%20Basic%20Sciences!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="UM-DAE Centre for Excellence in Basic Sciences Location Map"
            />
          </div>
        </section>
      </div>
    </div>
  )
}
