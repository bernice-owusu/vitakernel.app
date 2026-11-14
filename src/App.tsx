import React, { useState, useCallback } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { MotionConfig } from 'framer-motion';
import {
  PageRoute,
  MANGO_OIL_SPECS,
  BRIQUETTE_SPECS,
  COMPANY_INFO,
} from './data/vitakernelData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ProductsOverviewPage } from './components/ProductsOverviewPage';
import { MangoSeedOilPage } from './components/MangoSeedOilPage';
import { BiomassBriquettesPage } from './components/BiomassBriquettesPage';
import { ProcessPage } from './components/ProcessPage';
import { SustainabilityPage } from './components/SustainabilityPage';
import { ContactPage } from './components/ContactPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [prefillProduct, setPrefillProduct] = useState<string | undefined>(undefined);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const triggerDownload = (filename: string, content: string, label: string) => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadToast(`${label} downloaded.`);
    window.setTimeout(() => {
      setDownloadToast(null);
    }, 4500);
  };

  const handleDownloadCatalogue = useCallback(() => {
    const content = [
      'VITAKERNEL — COMPANY & PRODUCT OVERVIEW CATALOGUE',
      'Turning Mango By-products into Valuable Resources',
      '========================================================================',
      '',
      '1. ABOUT VITAKERNEL',
      'Vitakernel is an agro-processing company focused on extracting value from',
      'mango-derived materials through the production of mango seed oil and',
      'biomass briquettes.',
      '',
      'Vision: To become a recognised and trusted agro-processing company,',
      'creating sustainable value through innovative utilisation of agricultural resources.',
      '',
      'Mission: To transform mango-derived materials into quality products through',
      'responsible processing, innovation and strong business partnerships.',
      '',
      '2. PRODUCT LINE 01: MANGO SEED OIL',
      'Plant-derived oil obtained from the kernel found within the mango seed.',
      'Potential Applications: Skin & body care, hair care, soaps, creams & lotions.',
      '',
      ...MANGO_OIL_SPECS.map((s) => `- ${s.parameter}: ${s.specification} (${s.notes})`),
      '',
      '3. PRODUCT LINE 02: BIOMASS BRIQUETTES',
      'Solid biofuel produced from suitable residual mango materials.',
      'Potential Applications: Industrial boilers, food processing, institutional heating.',
      '',
      ...BRIQUETTE_SPECS.map((s) => `- ${s.parameter}: ${s.specification} (${s.notes})`),
      '',
      '4. COMMERCIAL ENQUIRIES & LEADERSHIP',
      `Leadership: ${COMPANY_INFO.ceoName} (${COMPANY_INFO.ceoTitle})`,
      `Address: ${COMPANY_INFO.fullAddress}`,
      `Telephone / WhatsApp: ${COMPANY_INFO.phone}`,
      `Email: ${COMPANY_INFO.emailPrimary} | ${COMPANY_INFO.emailExecutive}`,
      `Website: ${COMPANY_INFO.website}`,
      'Note: Verified batch Certificates of Analysis (COA), pricing, and monthly',
      'capacity figures are confirmed upon formal enquiry.',
    ].join('\n');

    triggerDownload(
      'Vitakernel-Company-Product-Catalogue.txt',
      content,
      'Vitakernel Company & Product Catalogue'
    );
  }, []);

  const handleDownloadSpecSheet = useCallback((product: 'oil' | 'briquettes') => {
    if (product === 'oil') {
      const content = [
        'VITAKERNEL — MANGO SEED OIL SPECIFICATION SUMMARY',
        '==================================================',
        'Product: Mango Seed Oil (Kernel-Derived Botanical Oil)',
        '',
        ...MANGO_OIL_SPECS.map(
          (s) => `${s.parameter}\n  Format: ${s.specification}\n  Notes:  ${s.notes}\n`
        ),
        `Commercial Enquiries: ${COMPANY_INFO.emailPrimary} | ${COMPANY_INFO.emailExecutive}`,
        `Tel / WhatsApp: ${COMPANY_INFO.phone} | ${COMPANY_INFO.fullAddress}`,
      ].join('\n');

      triggerDownload(
        'Vitakernel-Mango-Seed-Oil-Specifications.txt',
        content,
        'Mango Seed Oil Specification Sheet'
      );
    } else {
      const content = [
        'VITAKERNEL — BIOMASS BRIQUETTES SPECIFICATION SUMMARY',
        '======================================================',
        'Product: Mango Biomass Briquettes (Solid Agro-Biofuel)',
        '',
        ...BRIQUETTE_SPECS.map(
          (s) => `${s.parameter}\n  Format: ${s.specification}\n  Notes:  ${s.notes}\n`
        ),
        `Commercial Enquiries: ${COMPANY_INFO.emailPrimary} | ${COMPANY_INFO.emailExecutive}`,
        `Tel / WhatsApp: ${COMPANY_INFO.phone} | ${COMPANY_INFO.fullAddress}`,
      ].join('\n');

      triggerDownload(
        'Vitakernel-Biomass-Briquettes-Specifications.txt',
        content,
        'Biomass Briquettes Specification Sheet'
      );
    }
  }, []);

  const handleNavigate = useCallback(
    (route: PageRoute, anchor?: string, productPrefill?: string) => {
      if (productPrefill) {
        setPrefillProduct(productPrefill);
      }
      setCurrentRoute(route);

      window.setTimeout(() => {
        if (anchor) {
          const el = document.getElementById(anchor);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
          }
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 40);
    },
    []
  );

  const renderPage = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'products':
        return <ProductsOverviewPage onNavigate={handleNavigate} />;
      case 'mango-seed-oil':
        return (
          <MangoSeedOilPage
            onNavigate={handleNavigate}
            onDownloadSpecSheet={handleDownloadSpecSheet}
          />
        );
      case 'biomass-briquettes':
        return (
          <BiomassBriquettesPage
            onNavigate={handleNavigate}
            onDownloadSpecSheet={handleDownloadSpecSheet}
          />
        );
      case 'process':
        return <ProcessPage onNavigate={handleNavigate} />;
      case 'sustainability':
        return <SustainabilityPage onNavigate={handleNavigate} />;
      case 'contact':
        return (
          <ContactPage
            prefillProduct={prefillProduct}
            onDownloadCatalogue={handleDownloadCatalogue}
            onNavigate={handleNavigate}
          />
        );
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#F7F5EC] text-[#292D2A]">
        <Header currentRoute={currentRoute} onNavigate={handleNavigate} />

        <main key={currentRoute} className="flex-1 page-enter">
          {renderPage()}
        </main>

        <Footer
          onNavigate={handleNavigate}
          onDownloadCatalogue={handleDownloadCatalogue}
        />

        {downloadToast && (
          <div
            role="status"
            aria-live="polite"
            className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-5 sm:bottom-5 z-50 flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-[#174D35] text-white text-sm font-medium shadow-lg border border-white/15 max-w-md sm:w-auto"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <CheckCircle2 className="w-4 h-4 text-[#E5A928] shrink-0" />
              <span className="truncate">{downloadToast}</span>
            </div>
            <button
              type="button"
              onClick={() => setDownloadToast(null)}
              aria-label="Dismiss notification"
              className="p-1.5 text-white/70 hover:text-white cursor-pointer shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </MotionConfig>
  );
}
