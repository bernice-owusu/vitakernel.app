import React from 'react';
import { ArrowRight, Recycle, Zap, Factory, Sprout, Users } from 'lucide-react';
import { PageRoute, IMAGES } from '../data/vitakernelData';
import { PageHero } from './PageHero';

interface SustainabilityPageProps {
  onNavigate: (route: PageRoute, anchor?: string) => void;
}

export const SustainabilityPage: React.FC<SustainabilityPageProps> = ({ onNavigate }) => {
  const pillars = [
    {
      id: 'circular-economy',
      icon: Recycle,
      title: 'Agricultural By-product Utilisation',
      subtitle: 'Circular Economy',
      description:
        'We seek to convert mango-derived materials into useful products rather than allowing suitable materials to go unused.',
    },
    {
      id: 'resource-efficiency',
      icon: Sprout,
      title: 'Resource Efficiency',
      subtitle: 'Maximum Yield',
      description:
        'Our production model focuses on maximising the value obtained from available agricultural raw materials across complementary streams.',
    },
    {
      id: 'environmental',
      icon: Zap,
      title: 'Alternative Biomass Energy',
      subtitle: 'Environmental Responsibility',
      description:
        'Through briquette production, we contribute to the development of biomass-based solid fuel products for appropriate industrial and commercial energy applications.',
    },
    {
      id: 'agro-processing',
      icon: Factory,
      title: 'Sustainable Agro-processing',
      subtitle: 'Responsible Production',
      description:
        'We aim to develop processing practices that support responsible production, disciplined quality standards, and efficient resource use.',
    },
    {
      id: 'community',
      icon: Users,
      title: 'Agricultural Value Chain Development',
      subtitle: 'Community & Industry Impact',
      description:
        'By creating commercial opportunities around mango-derived materials, we seek to contribute to a stronger, more resilient agricultural processing value chain.',
    },
  ];

  return (
    <div className="bg-[#F7F5EC]">
      <PageHero
        kicker="Sustainability"
        title="Sustainability Through Resource Utilisation"
        description="We believe agricultural resources should be utilised efficiently and that by-products can create lasting commercial and environmental opportunities when processed responsibly."
        breadcrumbs={[{ label: 'Home', route: 'home' }, { label: 'Sustainability' }]}
        onNavigate={onNavigate}
        imageSrc={IMAGES.sustainability}
        imageAlt="Fresh green plant sprout growing in rich dark organic soil"
        fallbackTitle="Sustainability"
      />

      {/* Five Sustainability Pillars */}
      <section className="py-12 sm:py-16 lg:py-20 border-b border-[#292D2A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-7">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  id={pillar.id}
                  className={`group bg-white rounded-2xl border border-[#292D2A]/10 hover:border-[#E5A928]/65 hover:shadow-sm transition-all duration-200 p-6 sm:p-8 flex flex-col justify-between ${
                    idx < 3
                      ? 'lg:col-span-2'
                      : idx === 3
                      ? 'lg:col-span-3'
                      : 'md:col-span-2 lg:col-span-3'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <div className="w-11 h-11 rounded-lg bg-[#6B9B57]/15 group-hover:bg-[#174D35] text-[#174D35] group-hover:text-[#E5A928] flex items-center justify-center shrink-0 transition-colors duration-200">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-medium text-[#6B9B57] tabular-nums text-right">
                        0{idx + 1} · {pillar.subtitle}
                      </span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-[#174D35] mb-2.5 sm:mb-3">
                      {pillar.title}
                    </h2>
                    <p className="text-sm sm:text-base text-[#292D2A]/80 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6B9B57] mb-3">
            Our Commitment
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#174D35] mb-4">
            A Better Use for Every Suitable Resource
          </h2>
          <p className="text-sm sm:text-base text-[#292D2A]/80 max-w-2xl mx-auto leading-relaxed mb-7 sm:mb-8">
            At Vitakernel, we see sustainability as an opportunity to create business value while promoting responsible utilisation of agricultural resources.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => onNavigate('process')}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#174D35] hover:bg-[#103826] text-white text-sm font-semibold transition-colors cursor-pointer min-h-[44px]"
            >
              <span>Explore Our Processing Model</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact', 'enquiry-form')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#E5A928] hover:bg-[#D2971C] text-[#292D2A] text-sm font-semibold transition-colors cursor-pointer min-h-[44px]"
            >
              <span>Partner With Us</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
