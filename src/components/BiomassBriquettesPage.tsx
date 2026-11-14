import React, { useState } from 'react';
import { ArrowRight, Check, FileDown, Package } from 'lucide-react';
import { PageRoute, IMAGES, BRIQUETTE_SPECS } from '../data/vitakernelData';
import { PageHero } from './PageHero';

interface BiomassBriquettesPageProps {
  onNavigate: (route: PageRoute, anchor?: string, prefillProduct?: string) => void;
  onDownloadSpecSheet: (product: 'oil' | 'briquettes') => void;
}

const BRIQUETTE_PACKAGING_FORMATS = [
  {
    id: '25kg',
    label: '25 kg Woven Sacks',
    gradeNote: 'Easy-to-handle woven polypropylene sacks tailored for commercial kitchens, bakeries, and pilot boiler testing.',
  },
  {
    id: '50kg',
    label: '50 kg Commercial Sacks',
    gradeNote: 'Standard commercial sacks offering efficient warehouse stacking and scheduled fuel replenishment.',
  },
  {
    id: 'bulk',
    label: 'Palletised Bulk Loads',
    gradeNote: 'Moisture-protected palletised bulk deliveries structured for industrial boilers and continuous operations.',
  },
] as const;

export const BiomassBriquettesPage: React.FC<BiomassBriquettesPageProps> = ({
  onNavigate,
  onDownloadSpecSheet,
}) => {
  const [selectedFormat, setSelectedFormat] = useState<(typeof BRIQUETTE_PACKAGING_FORMATS)[number]['id']>('25kg');
  const activePackaging =
    BRIQUETTE_PACKAGING_FORMATS.find((f) => f.id === selectedFormat) || BRIQUETTE_PACKAGING_FORMATS[0];

  return (
    <div className="bg-[#F7F5EC]">
      <PageHero
        kicker="Our Products · Biomass Briquettes"
        title="Transforming Mango Residues into Energy Resources"
        description="The value of the mango fruit extends beyond its edible portion and seed. Through appropriate processing, remaining mango-derived materials can serve as raw materials for solid biomass energy products."
        breadcrumbs={[
          { label: 'Home', route: 'home' },
          { label: 'Our Products', route: 'products' },
          { label: 'Biomass Briquettes' },
        ]}
        onNavigate={onNavigate}
        imageSrc={IMAGES.briquettes}
        imageAlt="Stacked cylindrical dark brown compressed mango biomass briquettes"
        fallbackTitle="Biomass Briquettes"
        actions={
          <>
            <button
              type="button"
              onClick={() => onNavigate('contact', 'enquiry-form', 'Biomass Briquettes')}
              className="group inline-flex items-center justify-center gap-2 px-5 lg:px-6 py-3 lg:py-3.5 rounded-lg bg-[#E5A928] hover:bg-[#D2971C] text-[#292D2A] text-sm font-semibold transition-colors cursor-pointer min-h-[44px]"
            >
              <span>Request a Briquette Quote</span>
              <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5" />
            </button>
            <button
              type="button"
              onClick={() => onDownloadSpecSheet('briquettes')}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 lg:py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors cursor-pointer min-h-[44px]"
            >
              <FileDown className="w-4 h-4 text-[#E5A928] shrink-0" />
              <span>Download Spec Summary</span>
            </button>
          </>
        }
      />

      {/* Applications & Production Approach */}
      <section className="py-12 sm:py-16 lg:py-20 border-b border-[#292D2A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
          <div className="md:col-span-6 space-y-6">
            <div className="bg-white rounded-2xl border border-[#292D2A]/10 p-5 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B9B57] mb-2">
                Industrial &amp; Commercial Heating
              </p>
              <h2 className="text-2xl font-bold text-[#174D35] mb-4">
                Potential Applications
              </h2>
              <ul className="space-y-3">
                {[
                  'Industrial boilers and heating systems designed for biomass fuel',
                  'Commercial food processing operations',
                  'Suitable institutional heating applications',
                  'Businesses seeking alternative solid fuel sources',
                  'Biomass fuel distributors and suppliers',
                ].map((app) => (
                  <li key={app} className="flex items-start gap-3 text-sm sm:text-base text-[#292D2A]/85">
                    <Check className="w-4 h-4 text-[#6B9B57] shrink-0 mt-1" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-[#292D2A]/10 p-5 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B9B57] mb-2">
                Resource Impact
              </p>
              <h2 className="text-2xl font-bold text-[#174D35] mb-4">
                The Value of Biomass Briquettes
              </h2>
              <ul className="space-y-3">
                {[
                  'Productive utilisation of agricultural residues',
                  'Support for agricultural waste reduction',
                  'Creation of an alternative solid fuel product',
                  'Contribution to resource efficiency',
                  'Additional commercial opportunities within the agricultural value chain',
                ].map((val) => (
                  <li key={val} className="flex items-start gap-3 text-sm sm:text-base text-[#292D2A]/85">
                    <Check className="w-4 h-4 text-[#E5A928] shrink-0 mt-1" />
                    <span>{val}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-6 space-y-6">
            {/* Connected Vertical Production Timeline */}
            <div className="bg-white rounded-2xl border border-[#292D2A]/10 p-5 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B9B57] mb-2">
                Manufacturing Sequence
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#174D35] mb-6">
                Production Approach
              </h2>
              <ol className="relative space-y-6 before:content-[''] before:absolute before:left-[15px] before:top-4 before:bottom-4 before:w-px before:bg-[#292D2A]/12">
                {[
                  { title: 'Collection of suitable mango residual materials', note: 'Gathering dry and fibrous mango residues from processing partners.' },
                  { title: 'Sorting and preparation of raw materials', note: 'Screening and particle-sizing for consistent densification.' },
                  { title: 'Drying and processing, where required', note: 'Conditioning moisture content prior to compression.' },
                  { title: 'Compression into briquette form', note: 'High-pressure mechanical compaction into uniform cylindrical units.' },
                  { title: 'Packaging and preparation for distribution', note: 'Protected in sacks or bulk formats for reliable commercial dispatch.' },
                ].map((step, i) => (
                  <li key={step.title} className="group relative pl-11">
                    <span className="absolute left-0 top-0.5 w-8 h-8 rounded-full border-2 border-[#E5A928] bg-[#F7F5EC] group-hover:bg-[#E5A928] font-mono text-xs font-semibold text-[#174D35] flex items-center justify-center tabular-nums transition-colors duration-150">
                      0{i + 1}
                    </span>
                    <div className="min-w-0 pb-4 border-b border-[#292D2A]/8 group-last:border-b-0 group-last:pb-0">
                      <h3 className="text-sm sm:text-base font-bold text-[#174D35]">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-[#292D2A]/75 mt-1 leading-relaxed">{step.note}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Interactive Dispatch & Packaging Explorer */}
            <div className="bg-white rounded-2xl border border-[#292D2A]/10 p-5 sm:p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6B9B57] mb-3">
                <Package className="w-4 h-4" />
                <span>Dispatch &amp; Sacking Options</span>
              </div>
              <div
                role="tablist"
                aria-label="Biomass briquettes packaging format"
                className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 p-1 bg-[#F7F5EC] rounded-lg border border-[#292D2A]/10 mb-4"
              >
                {BRIQUETTE_PACKAGING_FORMATS.map((fmt) => (
                  <button
                    key={fmt.id}
                    type="button"
                    role="tab"
                    aria-selected={selectedFormat === fmt.id}
                    onClick={() => setSelectedFormat(fmt.id)}
                    className={`px-2.5 py-2 rounded-md text-xs font-semibold transition-colors cursor-pointer min-h-[40px] ${
                      selectedFormat === fmt.id
                        ? 'bg-[#174D35] text-white'
                        : 'text-[#292D2A]/75 hover:text-[#174D35]'
                    }`}
                  >
                    {fmt.label}
                  </button>
                ))}
              </div>
              <p className="text-sm text-[#292D2A]/80 leading-relaxed mb-4">
                {activePackaging.gradeNote}
              </p>
              <button
                type="button"
                onClick={() => onNavigate('contact', 'enquiry-form', 'Biomass Briquettes')}
                className="text-xs font-semibold text-[#174D35] hover:text-[#6B9B57] inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Enquire about {activePackaging.label}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specification Reference Sheet */}
      <section id="briquette-specs" className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#292D2A]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B9B57] mb-2">
                Commercial Energy Buyer Reference
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#174D35]">
                Biomass Briquettes Specification Sheet
              </h2>
              <p className="text-sm text-[#292D2A]/75 mt-2 max-w-2xl">
                Key fuel and logistical parameters tracked for industrial boiler operators and distributors. Batch proximate analysis and calorific data are issued alongside formal supply quotes.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onDownloadSpecSheet('briquettes')}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[#174D35]/30 hover:bg-[#F7F5EC] text-[#174D35] text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap w-full sm:w-fit shrink-0 min-h-[44px]"
            >
              <FileDown className="w-4 h-4" />
              <span>Export Spec Sheet</span>
            </button>
          </div>

          <div className="md:hidden divide-y divide-[#292D2A]/10 rounded-xl border border-[#292D2A]/12 bg-[#F7F5EC]/50 overflow-hidden">
            {BRIQUETTE_SPECS.map((row) => (
              <div key={row.parameter} className="p-4 space-y-1">
                <div className="text-sm font-bold text-[#174D35]">{row.parameter}</div>
                <div className="font-mono text-xs font-medium text-[#292D2A] tabular-nums">
                  {row.specification}
                </div>
                <div className="text-xs text-[#292D2A]/70 leading-relaxed">{row.notes}</div>
              </div>
            ))}
          </div>

          <div className="hidden md:block overflow-x-auto rounded-xl border border-[#292D2A]/12 shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#174D35] text-white text-xs uppercase tracking-wider">
                  <th className="py-3.5 px-5 font-semibold">Parameter</th>
                  <th className="py-3.5 px-5 font-semibold">Specification / Format</th>
                  <th className="py-3.5 px-5 font-semibold">Verification &amp; Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#292D2A]/10 text-sm">
                {BRIQUETTE_SPECS.map((row, idx) => (
                  <tr
                    key={row.parameter}
                    className={`${idx % 2 === 0 ? 'bg-white' : 'bg-[#F7F5EC]/45'} hover:bg-[#F7F5EC] transition-colors`}
                  >
                    <td className="py-3.5 px-5 font-semibold text-[#174D35]">
                      {row.parameter}
                    </td>
                    <td className="py-3.5 px-5 font-mono text-xs sm:text-sm text-[#292D2A] tabular-nums">
                      {row.specification}
                    </td>
                    <td className="py-3.5 px-5 text-[#292D2A]/75">
                      {row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#174D35] mb-3">
            Powering Possibilities Through Agricultural By-products
          </h2>
          <p className="text-sm sm:text-base text-[#292D2A]/80 max-w-2xl mx-auto mb-7">
            Are you interested in biomass briquettes for your business or industrial operations? Contact our commercial team to discuss trial quantities, specifications, and delivery schedules.
          </p>
          <button
            type="button"
            onClick={() => onNavigate('contact', 'enquiry-form', 'Biomass Briquettes')}
            className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#E5A928] hover:bg-[#D2971C] text-[#292D2A] text-sm font-semibold transition-colors cursor-pointer w-full sm:w-fit min-h-[44px]"
          >
            <span>Request a Briquette Quote</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
          </button>
        </div>
      </section>
    </div>
  );
};
