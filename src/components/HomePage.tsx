import React from 'react';
import {
  ArrowRight,
  Check,
  Sprout,
  Settings,
  Droplets,
  PackageCheck,
  Mail,
  Phone,
  MapPin,
  Flame,
} from 'lucide-react';
import { motion } from 'framer-motion';
import {
  PageRoute,
  IMAGES,
  HOME_APPROACH_STEPS,
  WHY_CHOOSE_PILLARS,
  COMPANY_INFO,
} from '../data/vitakernelData';
import { ResilientImage } from './ResilientImage';
import { SectionReveal, StaggerGroup, StaggerItem } from './MotionReveal';

interface HomePageProps {
  onNavigate: (route: PageRoute, anchor?: string, prefillProduct?: string) => void;
}

const HERO_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const processIcons = [Sprout, Settings, Droplets, PackageCheck];

  return (
    <div className="bg-[#F7F5EC]">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#F7F5EC] border-b border-[#292D2A]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 items-stretch md:min-h-[480px] lg:min-h-[600px]">
            {/* Left Copy Column */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: HERO_EASE }}
              className="md:col-span-6 px-4 sm:px-6 md:pl-6 md:pr-4 lg:pl-8 lg:pr-10 pt-9 pb-7 md:py-12 lg:py-18 flex flex-col justify-center relative z-10"
            >
              <p className="text-xs font-semibold tracking-wide text-[#6B9B57] mb-3 sm:mb-4">
                Sustainable Agro-Processing · Mango Seed Oil &amp; Biomass Briquettes
              </p>
              <h1
                className="text-[clamp(1.85rem,3.4vw,3.65rem)] font-bold leading-[1.12] tracking-tight text-[#174D35] mb-4 sm:mb-6"
                style={{ textWrap: 'balance' }}
              >
                Turning Mango By-products into Valuable Resources
              </h1>
              <p className="text-sm md:text-[15px] lg:text-lg text-[#292D2A]/80 leading-relaxed max-w-xl mb-6 md:mb-7 lg:mb-8">
                At Vitakernel, we transform mango-derived raw materials into valuable products through sustainable processing. From extracting oil from mango seeds to producing biomass briquettes from suitable residual mango materials, we are creating new opportunities from agricultural resources.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate('products')}
                  className="group inline-flex items-center justify-center gap-2 px-5 lg:px-6 py-3 lg:py-3.5 rounded-lg bg-[#174D35] hover:bg-[#103826] text-white text-sm font-semibold transition-all duration-150 cursor-pointer sm:whitespace-nowrap shadow-xs min-h-[44px]"
                >
                  <span>Explore Our Products</span>
                  <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('contact', 'enquiry-form')}
                  className="inline-flex items-center justify-center gap-2 px-5 lg:px-6 py-3 lg:py-3.5 rounded-lg border border-[#174D35]/35 hover:border-[#174D35] bg-white/85 hover:bg-white text-[#174D35] text-sm font-semibold transition-colors duration-150 cursor-pointer sm:whitespace-nowrap min-h-[44px]"
                >
                  <span>Partner With Us</span>
                </button>
              </div>

              <div className="mt-7 pt-5 border-t border-[#292D2A]/10 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#292D2A]/65">
                <span className="font-semibold text-[#174D35]">{COMPANY_INFO.shortLocation}</span>
                <span aria-hidden="true">·</span>
                <span>Dual-Stream Processing</span>
                <span aria-hidden="true">·</span>
                <span>Commercial Bulk &amp; Trial Supply</span>
              </div>
            </motion.div>

            {/* Right Visual Column with Signature Mango Gold Curved Arc */}
            <motion.div
              initial={{ opacity: 0.25 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: HERO_EASE }}
              className="md:col-span-6 relative aspect-[4/3] sm:aspect-[16/9] md:aspect-auto md:min-h-[480px] lg:min-h-[600px] overflow-hidden"
            >
              {/* Mobile Horizontal Curved Gold Sweep */}
              <svg
                viewBox="0 0 800 72"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="md:hidden absolute top-0 left-0 w-full h-9 sm:h-11 z-10 pointer-events-none"
              >
                <path d="M0,0 L800,0 L800,26 C560,68 240,68 0,26 Z" fill="#F7F5EC" />
                <path
                  d="M0,26 C240,68 560,68 800,26 L800,40 C560,82 240,82 0,40 Z"
                  fill="#E5A928"
                />
              </svg>

              {/* Tablet & Desktop Vertical Curved Gold Sweep */}
              <svg
                viewBox="0 0 180 600"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="hidden md:block absolute left-0 top-0 h-full w-20 lg:w-32 z-10 pointer-events-none"
              >
                <path d="M0,0 L145,0 C45,170 20,420 90,600 L0,600 Z" fill="#F7F5EC" />
                <path
                  d="M145,0 C45,170 20,420 90,600 L118,600 C48,420 73,170 172,0 Z"
                  fill="#E5A928"
                />
              </svg>

              <ResilientImage
                src={IMAGES.hero}
                alt="Fresh ripe mangoes with glossy leaves beside a corked bottle of golden mango seed oil and stacked biomass briquettes"
                className="w-full h-full object-cover"
                fallbackTitle="Mango Seed Oil & Biomass Briquettes"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE & OUR PRODUCTS OVERVIEW */}
      <section className="py-12 sm:py-16 lg:py-20 border-b border-[#292D2A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerGroup className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch" staggerDelay={0.1}>
            {/* About Vitakernel Card */}
            <StaggerItem className="group lg:col-span-5 bg-white rounded-2xl border border-[#292D2A]/10 hover:border-[#174D35]/20 hover:shadow-sm transition-all duration-200 overflow-hidden grid grid-cols-1 md:grid-cols-12 lg:flex lg:flex-col items-stretch">
              <div className="md:col-span-5 lg:col-span-12 aspect-[16/10] md:aspect-auto md:min-h-[260px] lg:aspect-[16/10] lg:min-h-0 w-full overflow-hidden bg-[#174D35]/5">
                <ResilientImage
                  src={IMAGES.facility}
                  alt="Vitakernel agro-processing facility exterior"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  fallbackTitle="Vitakernel Processing Facility"
                />
              </div>
              <div className="md:col-span-7 lg:col-span-12 p-5 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#6B9B57] mb-2">
                    Who We Are
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#174D35] mb-3 leading-snug">
                    Creating Value Beyond the Mango Fruit
                  </h2>
                  <p className="text-sm sm:text-base text-[#292D2A]/80 leading-relaxed mb-4">
                    At Vitakernel, we believe that every suitable part of the mango has value. Through agro-processing, we convert mango seeds into useful oil and utilise suitable residual mango materials to produce biomass briquettes.
                  </p>
                  <p className="text-sm text-[#292D2A]/75 leading-relaxed mb-6">
                    Our business is built around resource efficiency, responsible production and the development of marketable products from agricultural by-products.
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => onNavigate('about')}
                    className="group/btn inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#174D35] hover:bg-[#103826] text-white text-sm font-semibold transition-colors cursor-pointer w-full sm:w-fit sm:whitespace-nowrap min-h-[44px]"
                  >
                    <span>Learn More About Us</span>
                    <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-150 group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </StaggerItem>

            {/* Our Products Panel */}
            <StaggerItem className="lg:col-span-7 bg-white rounded-2xl border border-[#292D2A]/10 p-5 sm:p-8 flex flex-col justify-between">
              <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#292D2A]/8 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#6B9B57] mb-1.5">
                    Our Products
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#174D35]">
                    Two Products. One Sustainable Vision.
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('products')}
                  className="group/link text-sm font-semibold text-[#174D35] hover:text-[#6B9B57] inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0 w-fit py-1"
                >
                  <span>View Products Overview</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover/link:translate-x-0.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 flex-1">
                {/* Mango Seed Oil Card */}
                <div className="group rounded-xl bg-[#F7F5EC]/70 border border-[#292D2A]/8 hover:border-[#174D35]/25 hover:bg-[#F7F5EC] hover:shadow-sm transition-all duration-200 p-4 sm:p-5 flex flex-col justify-between">
                  <div>
                    <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-white">
                      <ResilientImage
                        src={IMAGES.mangoOil}
                        alt="Clear bottle of golden mango seed oil resting on dried mango kernels"
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                        fallbackTitle="Mango Seed Oil"
                      />
                    </div>
                    <p className="font-mono text-xs text-[#6B9B57] font-medium mb-1">
                      01 · Botanical Oil
                    </p>
                    <h3 className="text-xl font-bold text-[#174D35] mb-2">
                      Mango Seed Oil
                    </h3>
                    <p className="text-sm text-[#292D2A]/80 leading-relaxed mb-4">
                      A plant-derived oil obtained from mango kernels, with potential applications in cosmetics, personal care, soap manufacturing and other suitable industrial uses.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#292D2A]/8 flex flex-col gap-3">
                    <p className="text-xs text-[#292D2A]/60">
                      Cosmetics · Personal Care · Soap
                    </p>
                    <button
                      type="button"
                      onClick={() => onNavigate('mango-seed-oil')}
                      className="group/btn inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#174D35] hover:bg-[#103826] text-white text-sm font-semibold transition-colors cursor-pointer w-full sm:w-fit whitespace-nowrap min-h-[44px]"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover/btn:translate-x-0.5" />
                    </button>
                  </div>
                </div>

                {/* Biomass Briquettes Card */}
                <div className="group rounded-xl bg-[#F7F5EC]/70 border border-[#292D2A]/8 hover:border-[#174D35]/25 hover:bg-[#F7F5EC] hover:shadow-sm transition-all duration-200 p-4 sm:p-5 flex flex-col justify-between">
                  <div>
                    <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-white">
                      <ResilientImage
                        src={IMAGES.briquettes}
                        alt="Stacked cylindrical dark brown compressed mango biomass briquettes"
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                        fallbackTitle="Biomass Briquettes"
                      />
                    </div>
                    <p className="font-mono text-xs text-[#6B9B57] font-medium mb-1">
                      02 · Solid Biofuel
                    </p>
                    <h3 className="text-xl font-bold text-[#174D35] mb-2">
                      Biomass Briquettes
                    </h3>
                    <p className="text-sm text-[#292D2A]/80 leading-relaxed mb-4">
                      Solid biofuel produced from suitable residual mango materials, helping convert agricultural by-products into a useful energy resource.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#292D2A]/8 flex flex-col gap-3">
                    <p className="text-xs text-[#292D2A]/60">
                      Boilers · Food Processing · Energy
                    </p>
                    <button
                      type="button"
                      onClick={() => onNavigate('biomass-briquettes')}
                      className="group/btn inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#174D35] hover:bg-[#103826] text-white text-sm font-semibold transition-colors cursor-pointer w-full sm:w-fit whitespace-nowrap min-h-[44px]"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover/btn:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* 3. PRODUCT SPOTLIGHTS */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#292D2A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerGroup className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8" staggerDelay={0.12}>
            {/* Mango Seed Oil Spotlight */}
            <StaggerItem className="group rounded-2xl bg-[#F7F5EC]/60 border border-[#292D2A]/10 hover:border-[#E5A928]/60 hover:shadow-sm transition-all duration-200 overflow-hidden grid grid-cols-1 md:grid-cols-12 items-stretch">
              <div className="md:col-span-7 p-5 sm:p-7 flex flex-col justify-between order-2 md:order-1">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#6B9B57] mb-1.5">
                    Mango Seed Oil · Stream 01
                  </p>
                  <h2 className="text-2xl font-bold text-[#174D35] mb-3 leading-snug">
                    Unlocking the Value of Mango Seeds
                  </h2>
                  <p className="text-sm text-[#292D2A]/80 leading-relaxed mb-5">
                    Mango seed oil is a plant-derived oil obtained from the kernel found within the mango seed. It has potential applications in cosmetics, personal care and related industries.
                  </p>
                  <ul className="space-y-2.5 mb-5">
                    {[
                      'Plant-derived raw material',
                      'Wide range of formulation applications',
                      'Supports agricultural by-product use',
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-[#292D2A]">
                        <Check className="w-4 h-4 text-[#6B9B57] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-mono text-xs text-[#292D2A]/65 tabular-nums pb-4 border-b border-[#292D2A]/8 mb-4">
                    Supply Formats: 20L / 25L Jerrycans · 200L Drums · IBC
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('contact', 'enquiry-form', 'Mango Seed Oil')}
                  className="group/btn inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#174D35] hover:bg-[#103826] text-white text-sm font-semibold transition-colors cursor-pointer w-full sm:w-fit sm:whitespace-nowrap min-h-[44px]"
                >
                  <span>Request Product Information</span>
                  <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-150 group-hover/btn:translate-x-0.5" />
                </button>
              </div>
              <div className="relative md:col-span-5 aspect-[16/10] md:aspect-auto md:min-h-[260px] order-1 md:order-2 overflow-hidden">
                <ResilientImage
                  src={IMAGES.mangoOil}
                  alt="Golden mango seed oil bottle with dried kernels"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  fallbackTitle="Mango Seed Oil"
                />
                <svg
                  viewBox="0 0 100 100"
                  aria-hidden="true"
                  className="pointer-events-none hidden md:block absolute top-0 left-0 w-10 h-full"
                  preserveAspectRatio="none"
                >
                  <path d="M0,0 L28,0 C10,32 10,68 28,100 L0,100 Z" fill="#FBF9F4" />
                  <path d="M28,0 C10,32 10,68 28,100 L35,100 C17,68 17,32 35,0 Z" fill="#E5A928" />
                </svg>
              </div>
            </StaggerItem>

            {/* Biomass Briquettes Spotlight */}
            <StaggerItem className="group rounded-2xl bg-[#F7F5EC]/60 border border-[#292D2A]/10 hover:border-[#E5A928]/60 hover:shadow-sm transition-all duration-200 overflow-hidden grid grid-cols-1 md:grid-cols-12 items-stretch">
              <div className="md:col-span-7 p-5 sm:p-7 flex flex-col justify-between order-2 md:order-1">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#6B9B57] mb-1.5">
                    Biomass Briquettes · Stream 02
                  </p>
                  <h2 className="text-2xl font-bold text-[#174D35] mb-3 leading-snug">
                    Transforming Mango Residues into Energy Resources
                  </h2>
                  <p className="text-sm text-[#292D2A]/80 leading-relaxed mb-5">
                    Our briquettes are produced from suitable mango-derived materials, offering an alternative solid fuel source for appropriate commercial and industrial heating.
                  </p>
                  <ul className="space-y-2.5 mb-5">
                    {[
                      'Alternative solid fuel source',
                      'Supports agricultural waste reduction',
                      'Contributes to a circular economy',
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-[#292D2A]">
                        <Check className="w-4 h-4 text-[#6B9B57] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-mono text-xs text-[#292D2A]/65 tabular-nums pb-4 border-b border-[#292D2A]/8 mb-4">
                    Supply Formats: 25kg / 50kg Woven Sacks · Palletised Bulk
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('contact', 'enquiry-form', 'Biomass Briquettes')}
                  className="group/btn inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#174D35] hover:bg-[#103826] text-white text-sm font-semibold transition-colors cursor-pointer w-full sm:w-fit sm:whitespace-nowrap min-h-[44px]"
                >
                  <span>Request a Briquette Quote</span>
                  <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-150 group-hover/btn:translate-x-0.5" />
                </button>
              </div>
              <div className="relative md:col-span-5 aspect-[16/10] md:aspect-auto md:min-h-[260px] order-1 md:order-2 overflow-hidden">
                <ResilientImage
                  src={IMAGES.briquettes}
                  alt="Stacked cylindrical compressed mango biomass briquettes"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  fallbackTitle="Biomass Briquettes"
                />
                <svg
                  viewBox="0 0 100 100"
                  aria-hidden="true"
                  className="pointer-events-none hidden md:block absolute top-0 left-0 w-10 h-full"
                  preserveAspectRatio="none"
                >
                  <path d="M0,0 L28,0 C10,32 10,68 28,100 L0,100 Z" fill="#FBF9F4" />
                  <path d="M28,0 C10,32 10,68 28,100 L35,100 C17,68 17,32 35,0 Z" fill="#E5A928" />
                </svg>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* 4. OUR PROCESS & APPROACH */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F7F5EC] border-b border-[#292D2A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B9B57] mb-2">
                Our Approach &amp; Process
              </p>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#174D35]">
                From Mango By-products to Valuable Products
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('process')}
              className="group/btn inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-[#174D35]/30 bg-white hover:bg-[#174D35] hover:text-white text-[#174D35] text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap w-full sm:w-fit min-h-[44px]"
            >
              <span>View Detailed Workflows</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover/btn:translate-x-0.5" />
            </button>
          </SectionReveal>

          <SectionReveal delay={0.08} className="bg-white rounded-2xl border border-[#292D2A]/10 overflow-hidden shadow-xs">
            <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#292D2A]/10" staggerDelay={0.07}>
              {HOME_APPROACH_STEPS.map((item, idx) => {
                const Icon = processIcons[idx];
                return (
                  <StaggerItem
                    key={item.step}
                    className="group bg-white hover:bg-[#F7F5EC]/60 transition-colors duration-200 p-5 sm:p-7 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4 sm:mb-5">
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-[#E5A928] bg-[#F7F5EC] group-hover:bg-[#E5A928] flex items-center justify-center text-[#174D35] transition-colors duration-200">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-mono text-xs font-medium text-[#6B9B57] tabular-nums">
                          Step {item.step}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#174D35] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#292D2A]/75 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>

            <div className="relative min-h-[260px] sm:min-h-[340px] w-full border-t border-[#292D2A]/10 overflow-hidden">
              <ResilientImage
                src={IMAGES.machinery}
                alt="Stainless steel agro-processing oil extraction vessels and sanitary piping inside Vitakernel facility"
                className="absolute inset-0 w-full h-full object-cover"
                fallbackTitle="Processing & Extraction Facility"
              />
              <div className="relative z-10 min-h-[260px] sm:min-h-[340px] bg-gradient-to-t from-[#103826]/95 via-[#174D35]/70 to-[#174D35]/20 flex flex-col justify-end p-5 sm:p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
                  <div className="lg:col-span-6 text-white">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#E5A928] mb-1.5">
                      One Raw Material · Multiple Opportunities
                    </p>
                    <p className="text-sm sm:text-base text-white/95 leading-relaxed">
                      The mango seed provides the basis for oil extraction, while suitable remaining mango materials are prepared and compressed into solid biomass briquettes.
                    </p>
                  </div>

                  {/* Interactive Dual-Stream Valorisation Links */}
                  <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => onNavigate('process', 'oil-extraction')}
                      className="group/stream text-left rounded-xl bg-white/12 hover:bg-white/20 backdrop-blur-sm border border-white/20 p-3.5 sm:p-4 text-white transition-all duration-150 cursor-pointer"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E5A928]">
                          <Droplets className="w-3.5 h-3.5" />
                          <span>Mango Kernels</span>
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-white/75 transition-transform duration-150 group-hover/stream:translate-x-0.5" />
                      </div>
                      <div className="text-sm font-semibold">Oil Extraction Pipeline</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => onNavigate('process', 'briquette-production')}
                      className="group/stream text-left rounded-xl bg-white/12 hover:bg-white/20 backdrop-blur-sm border border-white/20 p-3.5 sm:p-4 text-white transition-all duration-150 cursor-pointer"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E5A928]">
                          <Flame className="w-3.5 h-3.5" />
                          <span>Residual Biomass</span>
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-white/75 transition-transform duration-150 group-hover/stream:translate-x-0.5" />
                      </div>
                      <div className="text-sm font-semibold">Briquette Production Flow</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 5. SUSTAINABILITY & WHY CHOOSE VITAKERNEL */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#292D2A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <SectionReveal className="group lg:col-span-5 rounded-2xl bg-[#F7F5EC] border border-[#292D2A]/10 overflow-hidden grid grid-cols-1 md:grid-cols-12 lg:flex lg:flex-col justify-between items-stretch">
              <div className="md:col-span-5 lg:col-span-12 aspect-[16/10] md:aspect-auto md:min-h-[250px] lg:aspect-[16/10] lg:min-h-0 w-full overflow-hidden">
                <ResilientImage
                  src={IMAGES.sustainability}
                  alt="Vibrant young green sprout growing in dark organic soil in warm morning sunlight"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  fallbackTitle="Sustainability Approach"
                />
              </div>
              <div className="md:col-span-7 lg:col-span-12 p-5 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#6B9B57] mb-2">
                    Sustainability
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#174D35] mb-3">
                    A Better Use for Every Resource
                  </h2>
                  <p className="text-sm sm:text-base text-[#292D2A]/80 leading-relaxed mb-6">
                    We are committed to sustainable practices, from resource-efficient production to responsible agricultural by-product utilisation, creating business value across the mango processing chain.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('sustainability')}
                  className="group/btn inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#174D35] hover:bg-[#103826] text-white text-sm font-semibold transition-colors cursor-pointer w-full sm:w-fit sm:whitespace-nowrap min-h-[44px]"
                >
                  <span>Our Sustainability Approach</span>
                  <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-150 group-hover/btn:translate-x-0.5" />
                </button>
              </div>
            </SectionReveal>

            <div className="lg:col-span-7 flex flex-col justify-between">
              <SectionReveal className="mb-5 sm:mb-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#6B9B57] mb-2">
                  Value Proposition
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#174D35]">
                  Why Choose Vitakernel?
                </h2>
              </SectionReveal>

              <StaggerGroup
                className="divide-y divide-[#292D2A]/10 border-t border-b border-[#292D2A]/10"
                staggerDelay={0.06}
              >
                {WHY_CHOOSE_PILLARS.map((pillar) => (
                  <StaggerItem
                    key={pillar.number}
                    className="group/row py-4 sm:py-5 px-2 sm:px-3 -mx-2 sm:-mx-3 rounded-lg hover:bg-[#F7F5EC]/70 transition-colors duration-150 flex items-baseline gap-4 sm:gap-6"
                  >
                    <span className="font-mono text-sm font-semibold text-[#E5A928] tabular-nums shrink-0 transition-colors group-hover/row:text-[#174D35]">
                      {pillar.number}.
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-[#174D35] mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-[#292D2A]/75 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT US & PARTNERSHIPS PREVIEW BAND */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F7F5EC] border-b border-[#292D2A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="group bg-white rounded-2xl border border-[#292D2A]/10 overflow-hidden grid grid-cols-1 md:grid-cols-12 items-stretch shadow-xs">
            <div className="md:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between order-2 md:order-1">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#6B9B57] mb-1.5">
                  Contact Us · Accra Corporate Office
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#174D35] mb-3">
                  Let’s Build Partnerships
                </h2>
                <p className="text-sm sm:text-base text-[#292D2A]/80 leading-relaxed max-w-xl mb-6">
                  Whether you’re interested in sourcing mango seed oil, purchasing biomass briquettes or exploring partnership opportunities, we’d love to hear from you.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-7 text-sm text-[#292D2A]/85">
                  <a
                    href={`mailto:${COMPANY_INFO.emailPrimary}`}
                    className="flex items-center gap-2.5 hover:text-[#174D35] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#6B9B57] shrink-0" />
                    <span className="truncate">{COMPANY_INFO.emailPrimary}</span>
                  </a>
                  <a
                    href={COMPANY_INFO.phoneHref}
                    className="flex items-center gap-2.5 hover:text-[#174D35] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#6B9B57] shrink-0" />
                    <span>{COMPANY_INFO.phone}</span>
                  </a>
                  <div className="flex items-start gap-2.5 sm:col-span-2">
                    <MapPin className="w-4 h-4 text-[#6B9B57] shrink-0 mt-0.5" />
                    <span>{COMPANY_INFO.fullAddress}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-[#292D2A]/10">
                <button
                  type="button"
                  onClick={() => onNavigate('contact', 'enquiry-form')}
                  className="group/btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#174D35] hover:bg-[#103826] text-white text-sm font-semibold transition-colors cursor-pointer w-full sm:w-fit sm:whitespace-nowrap min-h-[44px]"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-150 group-hover/btn:translate-x-0.5" />
                </button>
                <span className="text-xs text-[#292D2A]/65">
                  Office of {COMPANY_INFO.ceoName} · {COMPANY_INFO.ceoTitle}
                </span>
              </div>
            </div>
            <div className="md:col-span-5 aspect-[16/10] md:aspect-auto md:min-h-[280px] order-1 md:order-2 overflow-hidden">
              <ResilientImage
                src={IMAGES.facility}
                alt="Modern Vitakernel processing building exterior"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                fallbackTitle="Vitakernel Facility"
              />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 7. CLOSING ARCHITECTURAL CTA BANNER WITH SIGNATURE GOLD ARC */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="relative rounded-2xl bg-[#174D35] text-white overflow-hidden border border-[#174D35] grid grid-cols-1 lg:grid-cols-12 items-stretch shadow-sm">
            <div className="lg:col-span-8 p-7 sm:p-10 lg:p-12 relative z-10 flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E5A928] mb-3">
                Commercial &amp; Partnership Enquiries
              </p>
              <h2
                className="text-2xl sm:text-4xl font-bold text-white mb-4"
                style={{ textWrap: 'balance' }}
              >
                Let’s Create More Value from Agricultural Resources.
              </h2>
              <p className="text-sm sm:text-base text-white/85 max-w-2xl leading-relaxed mb-7">
                Whether you are looking for mango seed oil, biomass briquettes or an agro-processing partnership, Vitakernel is ready to explore opportunities with you.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/12 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap min-h-[44px]"
                >
                  <span>Contact Our Team</span>
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('contact', 'enquiry-form')}
                  className="group/btn inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#E5A928] hover:bg-[#D2971C] text-[#292D2A] text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap min-h-[44px]"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover/btn:translate-x-0.5" />
                </button>
              </div>
            </div>

            <div className="hidden md:block lg:col-span-4 relative min-h-[220px] overflow-hidden">
              <svg
                viewBox="0 0 120 300"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute left-0 top-0 h-full w-16 lg:w-20 z-10 pointer-events-none"
              >
                <path d="M0,0 L85,0 C25,90 15,210 60,300 L0,300 Z" fill="#174D35" />
                <path
                  d="M85,0 C25,90 15,210 60,300 L78,300 C33,210 43,90 103,0 Z"
                  fill="#E5A928"
                />
              </svg>
              <ResilientImage
                src={IMAGES.orchard}
                alt="Fresh ripe mangoes on a sunlit tree branch"
                className="w-full h-full object-cover"
                fallbackTitle="Agricultural Resources"
              />
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};
