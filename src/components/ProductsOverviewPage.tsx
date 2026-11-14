import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { PageRoute, IMAGES } from '../data/vitakernelData';
import { ResilientImage } from './ResilientImage';
import { PageHero } from './PageHero';

interface ProductsOverviewPageProps {
  onNavigate: (route: PageRoute, anchor?: string, prefillProduct?: string) => void;
}

export const ProductsOverviewPage: React.FC<ProductsOverviewPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F7F5EC]">
      <PageHero
        kicker="Our Products"
        title="Products Created from the Value of Mango"
        description="At Vitakernel, our products demonstrate how agricultural by-products can be transformed into valuable commercial resources across manufacturing and industrial energy markets."
        breadcrumbs={[{ label: 'Home', route: 'home' }, { label: 'Our Products' }]}
        onNavigate={onNavigate}
        imageSrc={IMAGES.hero}
        imageAlt="Golden mango seed oil bottle and biomass briquettes alongside fresh mangoes"
        fallbackTitle="Vitakernel Product Portfolio"
      />

      {/* Two Flagship Product Lines */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          {/* Mango Seed Oil */}
          <div className="group bg-white rounded-2xl border border-[#292D2A]/10 hover:border-[#E5A928]/60 hover:shadow-sm transition-all duration-200 overflow-hidden grid grid-cols-1 md:grid-cols-12 items-stretch">
            <div className="md:col-span-5 aspect-[16/10] md:aspect-auto md:min-h-[280px] overflow-hidden">
              <ResilientImage
                src={IMAGES.mangoOil}
                alt="Golden mango seed oil bottle on dried mango kernels"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                fallbackTitle="Mango Seed Oil"
              />
            </div>
            <div className="md:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#6B9B57] mb-2">
                  Product Line 01 · Kernel Oil
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#174D35] mb-3">
                  Mango Seed Oil
                </h2>
                <p className="text-sm sm:text-base text-[#292D2A]/85 leading-relaxed mb-6">
                  A plant-derived oil obtained through processing mango kernels. It has potential applications in cosmetic formulations, personal care products, soap manufacturing and other suitable industrial uses.
                </p>

                <h3 className="text-xs sm:text-sm font-bold text-[#174D35] uppercase tracking-wider mb-3">
                  Potential Target Markets
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7 sm:mb-8">
                  {[
                    'Cosmetics & skincare manufacturers',
                    'Soap & personal-care manufacturers',
                    'Natural ingredient distributors',
                    'Cosmetic formulation companies',
                  ].map((market) => (
                    <li key={market} className="flex items-center gap-2 text-sm text-[#292D2A]/85">
                      <Check className="w-4 h-4 text-[#6B9B57] shrink-0" />
                      <span>{market}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-5 border-t border-[#292D2A]/8">
                <button
                  type="button"
                  onClick={() => onNavigate('mango-seed-oil')}
                  className="group/btn inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#174D35] hover:bg-[#103826] text-white text-sm font-semibold transition-colors cursor-pointer min-h-[44px]"
                >
                  <span>Explore Mango Seed Oil</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover/btn:translate-x-0.5" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('contact', 'enquiry-form', 'Mango Seed Oil')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#E5A928] hover:bg-[#D2971C] text-[#292D2A] text-sm font-semibold transition-colors cursor-pointer min-h-[44px]"
                >
                  <span>Request Oil Quote</span>
                </button>
              </div>
            </div>
          </div>

          {/* Biomass Briquettes */}
          <div className="group bg-white rounded-2xl border border-[#292D2A]/10 hover:border-[#E5A928]/60 hover:shadow-sm transition-all duration-200 overflow-hidden grid grid-cols-1 md:grid-cols-12 items-stretch">
            <div className="md:col-span-5 md:order-2 aspect-[16/10] md:aspect-auto md:min-h-[280px] overflow-hidden">
              <ResilientImage
                src={IMAGES.briquettes}
                alt="Stacked cylindrical dark brown compressed biomass briquettes"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                fallbackTitle="Biomass Briquettes"
              />
            </div>
            <div className="md:col-span-7 md:order-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#6B9B57] mb-2">
                  Product Line 02 · Solid Biofuel
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#174D35] mb-3">
                  Biomass Briquettes
                </h2>
                <p className="text-sm sm:text-base text-[#292D2A]/85 leading-relaxed mb-6">
                  Vitakernel converts suitable remaining mango-derived biomass into solid briquettes. These products can be explored as an alternative fuel source for appropriate commercial and industrial heating applications.
                </p>

                <h3 className="text-xs sm:text-sm font-bold text-[#174D35] uppercase tracking-wider mb-3">
                  Potential Target Markets
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7 sm:mb-8">
                  {[
                    'Industrial heating operations',
                    'Food processing businesses',
                    'Commercial cooking operations',
                    'Biomass fuel distributors',
                    'Institutions & energy users',
                  ].map((market) => (
                    <li key={market} className="flex items-center gap-2 text-sm text-[#292D2A]/85">
                      <Check className="w-4 h-4 text-[#6B9B57] shrink-0" />
                      <span>{market}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-5 border-t border-[#292D2A]/8">
                <button
                  type="button"
                  onClick={() => onNavigate('biomass-briquettes')}
                  className="group/btn inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#174D35] hover:bg-[#103826] text-white text-sm font-semibold transition-colors cursor-pointer min-h-[44px]"
                >
                  <span>Explore Biomass Briquettes</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover/btn:translate-x-0.5" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('contact', 'enquiry-form', 'Biomass Briquettes')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#E5A928] hover:bg-[#D2971C] text-[#292D2A] text-sm font-semibold transition-colors cursor-pointer min-h-[44px]"
                >
                  <span>Request Briquette Quote</span>
                </button>
              </div>
            </div>
          </div>

          {/* Commercial CTA Box */}
          <div className="bg-[#174D35] text-white rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">
                Supply Arrangements &amp; Product Specifications
              </h2>
              <p className="text-sm sm:text-base text-white/85">
                Contact Vitakernel for product information, technical specification sheets, pricing, availability and commercial supply arrangements.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('contact', 'enquiry-form', 'Both Products')}
              className="group/btn inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#E5A928] hover:bg-[#D2971C] text-[#292D2A] text-sm font-semibold transition-colors cursor-pointer w-full md:w-fit whitespace-nowrap shrink-0 min-h-[44px]"
            >
              <span>Contact Vitakernel</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover/btn:translate-x-0.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
