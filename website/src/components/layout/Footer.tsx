import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-navy to-blue-900 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt="Aeromiles Logo"
              width={140}
              height={35}
              className="h-8 w-auto opacity-90"
              unoptimized
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Advancing the frontier of aeromodelling and drone technology in India.
              Bridging the gap between theory and precision engineering.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/education" className="text-white/60 hover:text-white transition-colors text-sm">
                  Aeromiles for Schools
                </Link>
              </li>
              <li>
                <Link href="/defence" className="text-white/60 hover:text-white transition-colors text-sm">
                  Aeromiles for Defence
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li className="flex items-center gap-2">
                <span>Email: contact@aeromiles.in</span>
              </li>
              <li className="flex items-center gap-2">
                <span>India Operations Hub</span>
              </li>
              <li className="flex items-center gap-2">
                <span>Website: aeromiles.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Aeromiles. All rights reserved.
          </p>
          <div className="flex gap-6 text-white/40 text-xs">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
