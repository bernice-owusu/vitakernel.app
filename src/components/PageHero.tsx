import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageRoute } from '../data/vitakernelData';
import { ResilientImage } from './ResilientImage';

interface BreadcrumbItem {
  label: string;
  route?: PageRoute;
}

interface PageHeroProps {
  kicker: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  onNavigate: (route: PageRoute, anchor?: string, prefillProduct?: string) => void;
  imageSrc?: string;
  imageAlt?: string;
  fallbackTitle?: string;
  imageAspectClass?: string;
  actions?: React.ReactNode;
  animateEntrance?: boolean;
}

export const PageHero: React.FC<PageHeroProps> = ({
  kicker,
  title,
  description,
  breadcrumbs,
  onNavigate,
  imageSrc,
  imageAlt = '',
  fallbackTitle = 'Vitakernel',
  imageAspectClass = 'aspect-[16/10] md:aspect-[4/3]',
  actions,
  animateEntrance = false,
}) => {
  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section className="relative bg-[#174D35] text-white overflow-hidden border-b-4 border-[#E5A928]">
      {/* Subtle architectural botanical ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -right-24 w-96 h-96 rounded-full bg-[#6B9B57]/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/3 w-80 h-80 rounded-full bg-[#E5A928]/8 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-18">
        {/* Interactive Breadcrumb Trail */}
        <nav aria-label="Breadcrumb" className="mb-5 sm:mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/70">
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <li key={crumb.label} className="inline-flex items-center gap-1.5">
                  {idx > 0 && (
                    <ChevronRight className="w-3.5 h-3.5 text-[#E5A928]/80 shrink-0" aria-hidden="true" />
                  )}
                  {crumb.route && !isLast ? (
                    <button
                      type="button"
                      onClick={() => onNavigate(crumb.route!)}
                      className="hover:text-[#E5A928] transition-colors cursor-pointer py-0.5"
                    >
                      {crumb.label}
                    </button>
                  ) : (
                    <span className={isLast ? 'text-[#E5A928] font-medium' : ''}>{crumb.label}</span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={animateEntrance ? { opacity: 0, y: 16 } : false}
            animate={animateEntrance ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, ease: easeCurve }}
            className={imageSrc ? 'md:col-span-7' : 'md:col-span-10 lg:col-span-9'}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E5A928] mb-2.5 sm:mb-3">
              {kicker}
            </p>
            <h1
              className="text-3xl sm:text-4xl lg:text-[2.85rem] font-bold leading-[1.15] tracking-tight mb-4 sm:mb-5"
              style={{ textWrap: 'balance' }}
            >
              {title}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-white/85 leading-relaxed max-w-2xl">
              {description}
            </p>
            {actions && (
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
                {actions}
              </div>
            )}
          </motion.div>

          {imageSrc && (
            <motion.div
              initial={animateEntrance ? { opacity: 0, y: 16 } : false}
              animate={animateEntrance ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.55, delay: 0.08, ease: easeCurve }}
              className="md:col-span-5"
            >
              <div
                className={`group relative ${imageAspectClass} rounded-2xl overflow-hidden border border-white/18 shadow-lg bg-[#103826]`}
              >
                <ResilientImage
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  fallbackTitle={fallbackTitle}
                />
                {/* Signature Mango Gold curved corner sweep */}
                <svg
                  viewBox="0 0 120 120"
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 left-0 w-16 h-16 sm:w-20 sm:h-20"
                >
                  <path d="M0,120 L0,45 C42,45 75,78 75,120 Z" fill="#174D35" opacity="0.92" />
                  <path
                    d="M0,36 C48,36 84,72 84,120 L73,120 C73,78 42,47 0,47 Z"
                    fill="#E5A928"
                  />
                </svg>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
