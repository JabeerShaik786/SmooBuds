"use client";

import React from "react";
import { MapPin, Phone, Clock, Compass } from "lucide-react";
import { motion } from "framer-motion";

export function VisitUs() {
  const address = "69-04-06, Pithapuram - Kakinada Road, Opposite Boat Club Park Road, Bank Colony, Ramanayyapeta, Kakinada, Andhra Pradesh 533003";

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-border-brand/60">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Info Side - 5 columns */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent-green">
                  Find Us
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-foreground">
                  Visit the Café
                </h2>
              </div>
              
              <p className="text-sm text-paragraph font-light leading-relaxed">
                Experience our freshly pulled espresso and woodfired bakery goods straight from the oven. Our physical space is designed to trigger comfort and inspiration.
              </p>

              <div className="border-t border-border-brand/80 pt-6 space-y-4 text-sm">
                {/* Address block */}
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-cream/40 rounded-full text-primary mt-0.5">
                    <MapPin className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Address</h4>
                    <p className="text-paragraph text-xs leading-relaxed mt-1 font-light">
                      {address}
                    </p>
                  </div>
                </div>

                {/* Hours block */}
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-cream/40 rounded-full text-primary mt-0.5">
                    <Clock className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Hours of Operation</h4>
                    <p className="text-paragraph text-xs leading-relaxed mt-1 font-light">
                      Monday – Sunday<br />
                      08:00 AM – 11:00 PM
                    </p>
                  </div>
                </div>

                {/* Contact block */}
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-cream/40 rounded-full text-primary mt-0.5">
                    <Phone className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Reservations & Inquiry</h4>
                    <p className="text-paragraph text-xs leading-relaxed mt-1 font-light">
                      +91 88842 55990<br />
                      hello@smoobuds.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border-brand/40">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-primary hover:bg-primary/5 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-primary transition-all duration-300"
              >
                <Compass className="h-4 w-4" /> Get Directions
              </a>
            </div>
          </div>

          {/* Map Side - 7 columns */}
          <div className="lg:col-span-7 h-[350px] lg:h-auto min-h-[400px] relative rounded-xl overflow-hidden border border-border-brand/60 bg-cream/20 shadow-md">
            {/* Embedded Google Map iframe centered at Ramanayyapeta, Kakinada */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.1118128362624!2d82.26127117621434!3d17.000305883838274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a38283fd344d57f%3A0xe541c4bd67634dbd!2sRamanayyapeta%2C%20Kakinada%2C%20Andhra%20Pradesh%20533005!5e0!3m2!1sen!2sin!4v1782827700000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.2) contrast(1.1) invert(0.02)" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Smoo Buds Google Map Location"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
export default VisitUs;
