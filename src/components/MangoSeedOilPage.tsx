import React, { useState } from 'react';
import { ArrowRight, Check, FileDown, Package } from 'lucide-react';
import { PageRoute, IMAGES, MANGO_OIL_SPECS } from '../data/vitakernelData';
import { PageHero } from './PageHero';

interface MangoSeedOilPageProps {
  onNavigate: (route: PageRoute, anchor?: string, prefillProduct?: string) => void;
  onDownloadSpecSheet: (product: 'oil' | 'briquettes') => void;
}

const OIL_PACKAGING_FORMATS = [
  {
    id: 'jerrycan',
    label: '20L / 25L Jerrycans',
    gradeNote: 'Food/industrial-grade sealed HDPE jerrycans suited for pilot runs, formulators, and regional batch trials.',
  },
  {
    id: 'drum',
    label: '200L Steel Drums',
    gradeNote: 'Epoxy-lined commercial steel drums engineered for cosmetics manufacturing and recurring soap production.',
  },
  {
    id: 'ibc',
    label: 'IBC Bulk Containers',
    gradeNote: 'Intermediate bulk totes structured for larger contract procurement and export logistics.',
  },
] as const;

export const MangoSeedOilPage: React.FC<MangoSeedOilPageProps> = ({
  onNavigate,
  onDownloadSpecSheet,
}) => {
  const [selectedFormat, setSelectedFormat] = useState<(typeof OIL_PACKAGING_FORMATS)[number]['id']>('jerrycan');
  const activePackaging = OIL_PACKAGING_FORMATS.find((f) => f.id === selectedFormat) || OIL_PACKAGING_FORMATS[0];

  return (
    <div className="bg-[#F7F5EC]">
      <PageHero
        kicker="Our Products · Mango Seed Oil"
        title="Unlocking the Value of Mango Seeds"
        description="Mango seeds contain natural components that can be processed to obtain mango seed oil. Vitakernel focuses on extracting this oil for potential use across suitable manufacturing and industrial applications."
        breadcrumbs={[
          { label: 'Home', route: 'home' },
          { label: 'Our Products', route: 'products' },
          { label: 'Mango Seed Oil' },
        ]}
        onNavigate={onNavigate}
        imageSrc={IMAGES.mangoOil}
        imageAlt="Golden mango seed oil bottle sitting atop dried mango kernels"
        fallbackTitle="Mango Seed Oil"
        actions={
          <>
            <button
              type="button"
              onClick={() => onNavigate('contact', 'enquiry-form', 'Mango Seed Oil')}
              className="group inline-flex items-center justify-center gap-2 px-5 lg:px-6 py-3 lg:py-3.5 rounded-lg bg-[#E5A928] hover:bg-[#D2971C] text-[#292D2A] text-sm font-semibold transition-colors cursor-pointer min-h-[44px]"
            >
              <span>Request Product Information</span>
              <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5" />
            </button>
            <button
              type="button"
              onClick={() => onDownloadSpecSheet('oil')}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 lg:py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors cursor-pointer min-h-[44px]"
            >
              <FileDown className="w-4 h-4 text-[#E5A928] shrink-0" />
              <span>Download Spec Summary</span>
            </button>
          </>
        }
      />

      {/* Product Overview & Potential Applications + Timeline */}
      <section className="py-12 sm:py-16 lg:py-20 border-b border-[#292D2A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
          <div className="md:col-span-6 space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B9B57] mb-2">
                Product Overview
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#174D35] mb-3">
                A Plant-Derived Oil from the Mango Kernel
              </h2>
              <p className="text-sm sm:text-base text-[#292D2A]/85 leading-relaxed">
                Mango seed oil is a plant-derived oil obtained from the kernel found within the mango seed. It is of interest to manufacturers in the cosmetics, personal care and related industries seeking natural plant-derived raw materials.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-[#292D2A]/10 p-5 sm:p-6">
              <h3 className="text-lg font-bold text-[#174D35] mb-4">
                Potential Applications
              </h3>
              <ul className="space-y-3">
                {[
                  'Skin and body care formulations',
                  'Hair care formulations',
                  'Soaps and cleansing products',
                  'Cosmetic creams and lotions',
                  'Other suitable industrial formulations',
                ].map((app) => (
                  <li key={app} className="flex items-start gap-3 text-sm sm:text-base text-[#292D2A]/85">
                    <Check className="w-4 h-4 text-[#6B9B57] shrink-0 mt-1" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive Packaging Format Explorer */}
            <div className="bg-white rounded-xl border border-[#292D2A]/10 p-5 sm:p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6B9B57] mb-3">
                <Package className="w-4 h-4" />
                <span>Commercial Packaging Formats</span>
              </div>
              <div
                role="tablist"
                aria-label="Mango Seed Oil packaging format"
                className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 p-1 bg-[#F7F5EC] rounded-lg border border-[#292D2A]/10 mb-4"
              >
                {OIL_PACKAGING_FORMATS.map((fmt) => (
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
                onClick={() => onNavigate('contact', 'enquiry-form', 'Mango Seed Oil')}
                className="text-xs font-semibold text-[#174D35] hover:text-[#6B9B57] inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Enquire about {activePackaging.label}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Connected Vertical Extraction Process Timeline */}
          <div className="md:col-span-6">
            <div className="bg-white rounded-2xl border border-[#292D2A]/10 p-5 sm:p-8 h-full">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B9B57] mb-2">
                Processing Sequence
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#174D35] mb-6">
                Extraction Process Overview
              </h2>
              <ol className="relative space-y-6 before:content-[''] before:absolute before:left-[15px] before:top-4 before:bottom-4 before:w-px before:bg-[#292D2A]/12">
                {[
                  { title: 'Collection and preparation of mango seeds', note: 'Sourcing and cleaning whole seeds prior to decortication.' },
                  { title: 'Separation and preparation of the kernels', note: 'Removing the outer shell and conditioning inner kernels.' },
                  { title: 'Processing and oil extraction', note: 'Controlled extraction matched to Vitakernel production procedures.' },
                  { title: 'Filtration or other appropriate refinement', note: 'Clarifying extracted oil to meet target grade purity.' },
                  { title: 'Packaging and storage', note: 'Sealed commercial containers protected from light and moisture.' },
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
          </div>
        </div>
      </section>

      {/* Technical Specification Reference Sheet */}
      <section id="oil-specs" className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#292D2A]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B9B57] mb-2">
                Commercial Buyer Reference
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#174D35]">
                Mango Seed Oil Specification Sheet
              </h2>
              <p className="text-sm text-[#292D2A]/75 mt-2 max-w-2xl">
                Key technical parameters evaluated during buyer procurement. Batch-specific laboratory figures and grade options are confirmed on formal quotation.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onDownloadSpecSheet('oil')}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[#174D35]/30 hover:bg-[#F7F5EC] text-[#174D35] text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap w-full sm:w-fit shrink-0 min-h-[44px]"
            >
              <FileDown className="w-4 h-4" />
              <span>Export Spec Sheet</span>
            </button>
          </div>

          <div className="md:hidden divide-y divide-[#292D2A]/10 rounded-xl border border-[#292D2A]/12 bg-[#F7F5EC]/50 overflow-hidden">
            {MANGO_OIL_SPECS.map((row) => (
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
                {MANGO_OIL_SPECS.map((row, idx) => (
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

      {/* Bottom Supplier CTA */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#174D35] mb-3">
            Looking for a Mango Seed Oil Supplier?
          </h2>
          <p className="text-sm sm:text-base text-[#292D2A]/80 max-w-2xl mx-auto mb-7">
            Vitakernel welcomes enquiries from manufacturers, distributors, cosmetic formulators and businesses interested in sourcing mango seed oil.
          </p>
          <button
            type="button"
            onClick={() => onNavigate('contact', 'enquiry-form', 'Mango Seed Oil')}
            className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#E5A928] hover:bg-[#D2971C] text-[#292D2A] text-sm font-semibold transition-colors cursor-pointer w-full sm:w-fit min-h-[44px]"
          >
            <span>Request Product Information</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
          </button>
        </div>
      </section>
    </div>
  );
};
