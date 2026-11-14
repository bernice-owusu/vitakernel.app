import React, { useState } from 'react';
import { ArrowRight, Droplets, Flame, Layers } from 'lucide-react';
import {
  PageRoute,
  IMAGES,
  OIL_EXTRACTION_PIPELINE,
  BRIQUETTE_PRODUCTION_PIPELINE,
} from '../data/vitakernelData';
import { PageHero } from './PageHero';

interface ProcessPageProps {
  onNavigate: (route: PageRoute, anchor?: string, prefillProduct?: string) => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onNavigate }) => {
  const [activeTrack, setActiveTrack] = useState<'both' | 'oil' | 'briquettes'>('both');

  return (
    <div className="bg-[#F7F5EC]">
      <PageHero
        kicker="Our Process"
        title="From Mango By-products to Valuable Products"
        description="Our production model is based on efficient utilisation of mango-derived raw materials. We apply dedicated processing methods to obtain mango seed oil and biomass briquettes from complementary material streams."
        breadcrumbs={[{ label: 'Home', route: 'home' }, { label: 'Our Process' }]}
        onNavigate={onNavigate}
        imageSrc={IMAGES.machinery}
        imageAlt="Stainless steel agro-processing oil extraction tanks and piping"
        fallbackTitle="Processing Equipment"
        imageAspectClass="aspect-[16/10] md:aspect-[4/3] lg:aspect-[16/9]"
      />

      {/* Interactive Workflow Filter */}
      <section className="py-12 sm:py-16 lg:py-20 border-b border-[#292D2A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B9B57] mb-1">
                Production Workflows
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#174D35]">
                Dual-Stream Processing Architecture
              </h2>
            </div>

            <div
              role="tablist"
              aria-label="Filter processing workflow"
              className="grid grid-cols-3 sm:inline-flex items-center gap-1 p-1 bg-white rounded-lg border border-[#292D2A]/12 w-full sm:w-fit"
            >
              {[
                { id: 'both' as const, label: 'All Streams' },
                { id: 'oil' as const, label: 'Mango Oil' },
                { id: 'briquettes' as const, label: 'Briquettes' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTrack === tab.id}
                  onClick={() => setActiveTrack(tab.id)}
                  className={`px-2 sm:px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap min-h-[42px] text-center truncate ${
                    activeTrack === tab.id
                      ? 'bg-[#174D35] text-white'
                      : 'text-[#292D2A]/75 hover:text-[#174D35]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Mango Seed Oil Extraction */}
            {(activeTrack === 'both' || activeTrack === 'oil') && (
              <div
                id="oil-extraction"
                className={`bg-white rounded-2xl border border-[#292D2A]/10 p-5 sm:p-9 ${
                  activeTrack === 'oil' ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-[#292D2A]/10">
                  <div className="w-11 h-11 rounded-lg bg-[#E5A928]/20 text-[#174D35] flex items-center justify-center shrink-0">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#6B9B57]">
                      Stream 01 · Kernel Lipid Recovery
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#174D35]">
                      Mango Seed Oil Extraction
                    </h3>
                  </div>
                </div>

                <ol className="relative space-y-6 before:content-[''] before:absolute before:left-[15px] before:top-4 before:bottom-4 before:w-px before:bg-[#292D2A]/12">
                  {OIL_EXTRACTION_PIPELINE.map((item) => (
                    <li key={item.step} className="group relative pl-11">
                      <span className="absolute left-0 top-0.5 w-8 h-8 rounded-full border-2 border-[#E5A928] bg-[#F7F5EC] group-hover:bg-[#E5A928] font-mono text-xs font-semibold text-[#174D35] flex items-center justify-center tabular-nums transition-colors duration-150">
                        {item.step}
                      </span>
                      <div className="min-w-0 pb-4 border-b border-[#292D2A]/8 group-last:border-b-0 group-last:pb-0">
                        <h4 className="text-sm sm:text-base font-bold text-[#174D35]">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-[#292D2A]/75 mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Biomass Briquette Production */}
            {(activeTrack === 'both' || activeTrack === 'briquettes') && (
              <div
                id="briquette-production"
                className={`bg-white rounded-2xl border border-[#292D2A]/10 p-5 sm:p-9 ${
                  activeTrack === 'briquettes' ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-[#292D2A]/10">
                  <div className="w-11 h-11 rounded-lg bg-[#6B9B57]/20 text-[#174D35] flex items-center justify-center shrink-0">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#6B9B57]">
                      Stream 02 · Solid Biofuel Densification
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#174D35]">
                      Biomass Briquette Production
                    </h3>
                  </div>
                </div>

                <ol className="relative space-y-6 before:content-[''] before:absolute before:left-[15px] before:top-4 before:bottom-4 before:w-px before:bg-[#292D2A]/12">
                  {BRIQUETTE_PRODUCTION_PIPELINE.map((item) => (
                    <li key={item.step} className="group relative pl-11">
                      <span className="absolute left-0 top-0.5 w-8 h-8 rounded-full border-2 border-[#6B9B57] bg-[#F7F5EC] group-hover:bg-[#6B9B57] group-hover:text-white font-mono text-xs font-semibold text-[#174D35] flex items-center justify-center tabular-nums transition-colors duration-150">
                        {item.step}
                      </span>
                      <div className="min-w-0 pb-4 border-b border-[#292D2A]/8 group-last:border-b-0 group-last:pb-0">
                        <h4 className="text-sm sm:text-base font-bold text-[#174D35]">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-[#292D2A]/75 mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Waste-to-Value Approach */}
      <section id="waste-to-value" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#174D35] text-white rounded-2xl p-6 sm:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="md:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E5A928] mb-3">
                <Layers className="w-4 h-4" />
                <span>Waste-to-Value Approach</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                One Raw Material. Multiple Opportunities.
              </h2>
              <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-2xl">
                The mango seed provides the basis for oil extraction, while suitable remaining mango materials can be converted into biomass briquettes. By designing operations around complementary recovery streams, Vitakernel maximises utility from every batch of agricultural material.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3">
              <button
                type="button"
                onClick={() => onNavigate('contact', 'enquiry-form', 'Both Products')}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#E5A928] hover:bg-[#D2971C] text-[#292D2A] text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap min-h-[44px]"
              >
                <span>Enquire About Supply</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('sustainability')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap min-h-[44px]"
              >
                <span>Read Sustainability Impact</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
