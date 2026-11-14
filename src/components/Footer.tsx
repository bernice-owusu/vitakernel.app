import React from 'react';
import { Mail, MapPin, Phone, FileDown, MessageCircle, Globe, ArrowUp } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { PageRoute, IMAGES, COMPANY_INFO } from '../data/vitakernelData';
import { ResilientImage } from './ResilientImage';

interface FooterProps {
  onNavigate: (route: PageRoute, anchor?: string) => void;
  onDownloadCatalogue: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onDownloadCatalogue }) => {
  return (
    <footer className="bg-[#174D35] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 sm:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/15">
          {/* Brand Column */}
          <div className="md:col-span-2 lg:col-span-4 space-y-5">
            <BrandLogo variant="light" showTagline={true} />
            <p className="text-sm text-white/80 leading-relaxed max-w-sm">
              Vitakernel is an agro-processing business transforming mango-derived raw materials into mango seed oil and solid biomass briquettes through responsible production.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-1">
              <button
                type="button"
                onClick={onDownloadCatalogue}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/18 text-white text-xs font-medium transition-colors cursor-pointer sm:whitespace-nowrap min-h-[44px]"
              >
                <FileDown className="w-4 h-4 text-[#E5A928] shrink-0" />
                <span>Download Company Catalogue</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact', 'whatsapp-enquiry')}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#E5A928] hover:bg-[#D2971C] text-[#292D2A] text-xs font-semibold transition-colors cursor-pointer sm:whitespace-nowrap min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WhatsApp Enquiry</span>
              </button>
            </div>
          </div>

          {/* Quick Links & Our Products (paired 2-col on mobile for compact scanning) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[#E5A928] tracking-wide">Quick Links</h3>
              <ul className="space-y-2.5 text-sm text-white/80">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('home')}
                    className="hover:text-white transition-colors cursor-pointer text-left py-0.5"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('about')}
                    className="hover:text-white transition-colors cursor-pointer text-left py-0.5"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('process')}
                    className="hover:text-white transition-colors cursor-pointer text-left py-0.5"
                  >
                    Our Process
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('sustainability')}
                    className="hover:text-white transition-colors cursor-pointer text-left py-0.5"
                  >
                    Sustainability
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="hover:text-white transition-colors cursor-pointer text-left py-0.5"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[#E5A928] tracking-wide">Our Products</h3>
              <ul className="space-y-2.5 text-sm text-white/80">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('products')}
                    className="hover:text-white transition-colors cursor-pointer text-left py-0.5"
                  >
                    Products Overview
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('mango-seed-oil')}
                    className="hover:text-white transition-colors cursor-pointer text-left py-0.5"
                  >
                    Mango Seed Oil
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('biomass-briquettes')}
                    className="hover:text-white transition-colors cursor-pointer text-left py-0.5"
                  >
                    Biomass Briquettes
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('mango-seed-oil', 'oil-specs')}
                    className="hover:text-white transition-colors cursor-pointer text-left py-0.5"
                  >
                    Mango Oil Spec Sheet
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('biomass-briquettes', 'briquette-specs')}
                    className="hover:text-white transition-colors cursor-pointer text-left py-0.5"
                  >
                    Briquette Spec Sheet
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold text-[#E5A928] tracking-wide">Contact</h3>
            <ul className="space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E5A928] shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.addressLine1}
                  <br />
                  {COMPANY_INFO.addressLine2}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#E5A928] shrink-0 mt-0.5" />
                <a href={COMPANY_INFO.phoneHref} className="hover:text-[#E5A928] transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#E5A928] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5 min-w-0">
                  <a
                    href={`mailto:${COMPANY_INFO.emailPrimary}`}
                    className="hover:text-[#E5A928] transition-colors break-all"
                  >
                    {COMPANY_INFO.emailPrimary}
                  </a>
                  <a
                    href={`mailto:${COMPANY_INFO.emailExecutive}`}
                    className="hover:text-[#E5A928] transition-colors text-xs text-white/75 break-all"
                  >
                    {COMPANY_INFO.emailExecutive}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-[#E5A928] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.website}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Brand Strip */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1.5">
            <span>&copy; {new Date().getFullYear()} Vitakernel. All Rights Reserved.</span>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => onNavigate('about', 'pre-pub-checklist')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Quality &amp; Documentation
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Supply &amp; Partnership Enquiries
            </button>
          </div>
          <div className="relative z-10 flex items-center gap-4">
            <span className="italic text-white/85" style={{ fontFamily: 'var(--font-serif)' }}>
              Turning mango by-products into valuable resources.
            </span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Scroll to top"
              title="Back to top"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/12 hover:bg-[#E5A928] border border-white/15 text-white hover:text-[#292D2A] transition-colors cursor-pointer shrink-0"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Subtle signature mango orchard accent thumbnail in corner on wide viewports */}
      <div
        className="hidden xl:block absolute bottom-0 right-0 w-44 h-24 opacity-25 pointer-events-none overflow-hidden rounded-tl-full border-t-4 border-l-4 border-[#E5A928]"
        aria-hidden="true"
      >
        <ResilientImage src={IMAGES.orchard} alt="" className="w-full h-full object-cover" />
      </div>
    </footer>
  );
};
