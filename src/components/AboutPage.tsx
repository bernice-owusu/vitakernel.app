import React from 'react';
import { ArrowRight, CheckCircle2, Compass, Target, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { PageRoute, IMAGES, CORE_VALUES, COMPANY_INFO } from '../data/vitakernelData';
import { ResilientImage } from './ResilientImage';
import { PageHero } from './PageHero';
import { SectionReveal, StaggerGroup, StaggerItem } from './MotionReveal';

interface AboutPageProps {
  onNavigate: (route: PageRoute, anchor?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F7F5EC]">
      <PageHero
        kicker="About Us"
        title="Agro-Processing Built on Resource Value"
        description="Vitakernel is an agro-processing company focused on extracting value from mango-derived materials through the production of mango seed oil and biomass briquettes. Our operations are centred on processing mango seeds to obtain oil and converting suitable residual mango materials into briquettes."
        breadcrumbs={[{ label: 'Home', route: 'home' }, { label: 'About Us' }]}
        onNavigate={onNavigate}
        imageSrc={IMAGES.facility}
        imageAlt="Vitakernel agro-processing facility building exterior"
        fallbackTitle="Vitakernel Facility"
        animateEntrance={true}
      />

      {/* Company Overview & Our Story */}
      <section id="story" className="py-12 sm:py-16 lg:py-20 border-b border-[#292D2A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="md:col-span-5">
              <div className="group aspect-[16/10] md:aspect-[4/3] rounded-2xl overflow-hidden border border-[#292D2A]/10 bg-white shadow-xs">
                <ResilientImage
                  src={IMAGES.orchard}
                  alt="Ripe mangoes hanging on a mango tree branch"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  fallbackTitle="Mango Raw Materials"
                />
              </div>
            </div>
            <div className="md:col-span-7 space-y-4 sm:space-y-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B9B57]">
                Our Story
              </p>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#174D35]" style={{ textWrap: 'balance' }}>
                Seeing Resources Where Others See Agricultural Waste
              </h2>
              <p className="text-sm sm:text-base text-[#292D2A]/85 leading-relaxed">
                Vitakernel was established around the opportunity to unlock the value contained in mango-derived materials. Mango processing generates by-products, including seeds and other residual materials.
              </p>
              <p className="text-sm sm:text-base text-[#292D2A]/85 leading-relaxed">
                We see these materials not simply as waste, but as resources that can be processed into useful products. This vision drives our focus on mango seed oil extraction and biomass briquette production.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('products')}
                  className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#174D35] hover:bg-[#103826] text-white text-sm font-semibold transition-colors cursor-pointer min-h-[44px]"
                >
                  <span>Explore Our Products</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('process')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-[#174D35]/30 bg-white hover:bg-[#F7F5EC] text-[#174D35] text-sm font-semibold transition-colors cursor-pointer min-h-[44px]"
                >
                  <span>See Our Processing Approach</span>
                </button>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision-mission" className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#292D2A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" staggerDelay={0.1}>
            <StaggerItem className="p-6 sm:p-10 rounded-2xl bg-[#F7F5EC] border border-[#292D2A]/10 hover:border-[#E5A928]/60 transition-colors duration-200">
              <div className="w-11 h-11 rounded-lg bg-[#174D35] text-[#E5A928] flex items-center justify-center mb-5">
                <Compass className="w-5 h-5" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B9B57] mb-2">
                Our Vision
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#174D35] mb-3 sm:mb-4">
                Recognised &amp; Trusted Agro-Processing
              </h2>
              <p className="text-sm sm:text-base text-[#292D2A]/85 leading-relaxed">
                To become a recognised and trusted agro-processing company, creating sustainable value through innovative utilisation of agricultural resources.
              </p>
            </StaggerItem>

            <StaggerItem className="p-6 sm:p-10 rounded-2xl bg-[#F7F5EC] border border-[#292D2A]/10 hover:border-[#E5A928]/60 transition-colors duration-200">
              <div className="w-11 h-11 rounded-lg bg-[#174D35] text-[#E5A928] flex items-center justify-center mb-5">
                <Target className="w-5 h-5" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B9B57] mb-2">
                Our Mission
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#174D35] mb-3 sm:mb-4">
                Quality Products Through Responsible Processing
              </h2>
              <p className="text-sm sm:text-base text-[#292D2A]/85 leading-relaxed">
                To transform mango-derived materials into quality products through responsible processing, innovation and strong business partnerships.
              </p>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 sm:py-16 lg:py-20 border-b border-[#292D2A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="max-w-2xl mb-8 sm:mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#6B9B57] mb-2">
              Our Values
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#174D35]">
              Principles Guiding Every Stage of Production
            </h2>
          </SectionReveal>
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6" staggerDelay={0.07}>
            {CORE_VALUES.map((val, idx) => (
              <StaggerItem
                key={val.title}
                className={`group bg-white rounded-xl border border-[#292D2A]/10 hover:border-[#174D35]/25 hover:shadow-sm transition-all duration-200 p-6 sm:p-7 flex flex-col justify-between ${
                  idx < 3
                    ? 'lg:col-span-2'
                    : idx === 3
                    ? 'lg:col-span-3'
                    : 'sm:col-span-2 lg:col-span-3'
                }`}
              >
                <div>
                  <span className="font-mono text-xs font-semibold text-[#E5A928] group-hover:text-[#174D35] transition-colors tabular-nums">
                    0{idx + 1}.
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#174D35] mt-2 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-sm text-[#292D2A]/80 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Executive Leadership & Registered Office */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#292D2A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch" staggerDelay={0.1}>
            <StaggerItem className="md:col-span-5 rounded-2xl bg-[#174D35] text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-16 -right-16 w-44 h-44 rounded-full bg-[#E5A928]/10 blur-2xl"
              />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E5A928] mb-2">
                  Leadership
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold mb-1">
                  {COMPANY_INFO.ceoName}
                </h2>
                <p className="text-sm font-medium text-white/80 mb-5">
                  {COMPANY_INFO.ceoTitle}
                </p>
                <p className="text-sm text-white/80 leading-relaxed">
                  Leading Vitakernel’s agro-processing operations, supplier relationships, and commercial partnerships across mango seed oil extraction and biomass briquette production.
                </p>
              </div>
              <div className="relative pt-6 mt-6 border-t border-white/15 space-y-2.5 text-sm">
                <a
                  href={`mailto:${COMPANY_INFO.emailExecutive}`}
                  className="flex items-center gap-2.5 text-white/90 hover:text-[#E5A928] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#E5A928] shrink-0" />
                  <span className="break-all">{COMPANY_INFO.emailExecutive}</span>
                </a>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="flex items-center gap-2.5 text-white/90 hover:text-[#E5A928] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#E5A928] shrink-0" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </div>
            </StaggerItem>

            <StaggerItem className="md:col-span-7 rounded-2xl bg-[#F7F5EC] border border-[#292D2A]/12 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#6B9B57] mb-2">
                  Head Office &amp; Enquiries
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-[#174D35] mb-3">
                  Accra Corporate Office
                </h3>
                <div className="flex items-start gap-3 text-sm text-[#292D2A]/85 mb-6">
                  <MapPin className="w-4 h-4 text-[#174D35] shrink-0 mt-0.5" />
                  <div>
                    <div>{COMPANY_INFO.addressLine1}</div>
                    <div>{COMPANY_INFO.addressLine2}</div>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-[#292D2A]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-[#292D2A]/75">
                  Commercial desk: <span className="font-semibold text-[#174D35]">{COMPANY_INFO.emailPrimary}</span> · {COMPANY_INFO.website}
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#E5A928] hover:bg-[#D2971C] text-[#292D2A] text-sm font-semibold transition-colors cursor-pointer w-full sm:w-fit min-h-[44px]"
                >
                  <span>Connect With Our Team</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
                </button>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* Transparency & Verified Documentation Commitment */}
      <section id="pre-pub-checklist" className="py-12 sm:py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="rounded-2xl bg-[#F7F5EC] border border-[#292D2A]/12 p-5 sm:p-9">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#174D35]/10 text-[#174D35] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#174D35] mb-2">
                  Transparency &amp; Verified Documentation Commitment
                </h3>
                <p className="text-sm text-[#292D2A]/80 leading-relaxed mb-4">
                  In keeping with Vitakernel’s commitment to integrity, product applications and environmental statements are framed around potential uses and active operational capabilities. Verified batch laboratory reports, exact extraction specifications, monthly capacity figures, and regulatory certifications are provided directly alongside formal commercial quotations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#292D2A]/75">
                  {[
                    'Batch Certificates of Analysis (COA) on request',
                    'Confirmed packaging sizes & MOQ per grade',
                    'Verified calorific & moisture test sheets',
                    'Direct supply & export market consultations',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#6B9B57] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};
