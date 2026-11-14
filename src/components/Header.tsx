import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, Phone, Mail, ArrowRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { NAV_ITEMS, PageRoute, COMPANY_INFO } from '../data/vitakernelData';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute, anchor?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate }) => {
  const [openDropdown, setOpenDropdown] = useState<PageRoute | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<PageRoute | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (route: PageRoute, anchor?: string) => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    onNavigate(route, anchor);
  };

  const isRouteActive = (item: (typeof NAV_ITEMS)[number]) => {
    if (currentRoute === item.id) return true;
    if (item.children) {
      return item.children.some((c) => c.route === currentRoute);
    }
    return false;
  };

  return (
    <>
    <header className="sticky top-0 z-50 bg-[#F7F5EC]/95 backdrop-blur-md border-b border-[#292D2A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between gap-4 lg:gap-6">
        {/* Zone 1: Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleLinkClick('home')}
          className="text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#174D35] rounded cursor-pointer shrink-0 flex items-center"
          aria-label="Vitakernel Home"
        >
          <BrandLogo variant="dark" showTagline={false} />
        </button>

        {/* Zone 2: Concise single-line desktop navigation links */}
        <nav
          ref={navRef}
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-3 xl:gap-6"
        >
          {NAV_ITEMS.map((item) => {
            const hasChildren = Boolean(item.children && item.children.length > 0);
            const active = isRouteActive(item);
            const isOpen = openDropdown === item.id;

            return (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => hasChildren && setOpenDropdown(item.id)}
                onMouseLeave={() => hasChildren && setOpenDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => {
                    if (hasChildren) {
                      if (isOpen) {
                        handleLinkClick(item.id);
                      } else {
                        setOpenDropdown(item.id);
                      }
                    } else {
                      handleLinkClick(item.id);
                    }
                  }}
                  aria-expanded={hasChildren ? isOpen : undefined}
                  className={`inline-flex items-center gap-1 py-2 text-xs xl:text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer border-b-2 ${
                    active
                      ? 'text-[#174D35] border-[#E5A928] font-semibold'
                      : 'text-[#292D2A]/80 border-transparent hover:text-[#174D35] hover:border-[#6B9B57]/60'
                  }`}
                >
                  <span>{item.label}</span>
                  {hasChildren && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-150 ${
                        isOpen ? 'rotate-180 text-[#174D35]' : 'text-[#292D2A]/50'
                      }`}
                    />
                  )}
                </button>

                {hasChildren && isOpen && (
                  <div className="absolute left-0 top-full pt-1.5 w-72 z-50 menu-reveal">
                    <div className="bg-white rounded-xl border border-[#292D2A]/10 shadow-lg p-2">
                      <button
                        type="button"
                        onClick={() => handleLinkClick(item.id)}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#F7F5EC] transition-colors cursor-pointer border-b border-[#292D2A]/8 mb-1"
                      >
                        <div className="text-xs font-semibold text-[#174D35]">
                          View {item.label} Overview
                        </div>
                      </button>
                      {item.children!.map((child) => (
                        <button
                          key={`${child.route}-${child.label}`}
                          type="button"
                          onClick={() => handleLinkClick(child.route, child.anchor)}
                          className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-[#F7F5EC] transition-colors cursor-pointer group block"
                        >
                          <div className="text-sm font-medium text-[#292D2A] group-hover:text-[#174D35]">
                            {child.label}
                          </div>
                          <div className="text-xs text-[#292D2A]/60 mt-0.5 line-clamp-1">
                            {child.description}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Zone 3: Primary CTA Button + Mobile/Tablet Trigger */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleLinkClick('contact', 'enquiry-form')}
            className="hidden sm:inline-flex items-center justify-center px-3.5 xl:px-4 py-2.5 rounded-lg bg-[#E5A928] hover:bg-[#D2971C] text-[#292D2A] text-xs xl:text-sm font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer shadow-xs"
          >
            Request a Quote
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#292D2A]/15 bg-white/70 text-[#174D35] hover:bg-white transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>

      {/* Responsive Mobile & Tablet Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 sm:top-24 bottom-0 z-40 bg-[#F7F5EC] border-t border-[#292D2A]/10 overflow-y-auto flex flex-col justify-between">
          <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 py-5 sm:py-7 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
            {NAV_ITEMS.map((item) => {
              const hasChildren = Boolean(item.children && item.children.length > 0);
              const expanded = mobileExpanded === item.id;
              const active = isRouteActive(item);
              return (
                <div key={item.id} className="border-b border-[#292D2A]/8 pb-1">
                  <div className="flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => handleLinkClick(item.id)}
                      className={`flex-1 text-left py-3 px-3 text-base font-semibold rounded-lg cursor-pointer min-h-[44px] transition-colors ${
                        active ? 'text-[#174D35] bg-white border border-[#292D2A]/10' : 'text-[#292D2A] hover:bg-white/60'
                      }`}
                    >
                      {item.label}
                    </button>
                    {hasChildren && (
                      <button
                        type="button"
                        onClick={() => setMobileExpanded(expanded ? null : item.id)}
                        className="w-11 h-11 inline-flex items-center justify-center rounded-lg text-[#174D35]/75 hover:bg-white/80 cursor-pointer shrink-0"
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-expanded={expanded}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-150 ${expanded ? 'rotate-180 text-[#174D35]' : ''}`}
                        />
                      </button>
                    )}
                  </div>
                  {hasChildren && expanded && (
                    <div className="pl-3 pr-1 pb-2 pt-1 space-y-1">
                      {item.children!.map((child) => (
                        <button
                          key={`${child.route}-${child.label}`}
                          type="button"
                          onClick={() => handleLinkClick(child.route, child.anchor)}
                          className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium text-[#292D2A]/80 hover:bg-white hover:text-[#174D35] cursor-pointer block min-h-[44px]"
                        >
                          <div>{child.label}</div>
                          <div className="text-xs text-[#292D2A]/55 font-normal mt-0.5">
                            {child.description}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Drawer Action & Direct Contact Footer */}
          <div className="p-4 sm:p-6 bg-white border-t border-[#292D2A]/10 mt-4">
            <div className="max-w-3xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => handleLinkClick('contact', 'enquiry-form')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-[#E5A928] hover:bg-[#D2971C] text-[#292D2A] text-sm font-semibold text-center cursor-pointer min-h-[46px]"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="grid grid-cols-2 sm:flex items-center gap-2">
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#F7F5EC] text-[#174D35] text-xs font-semibold min-h-[44px]"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{COMPANY_INFO.phone}</span>
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.emailPrimary}`}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#F7F5EC] text-[#174D35] text-xs font-semibold min-h-[44px]"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{COMPANY_INFO.emailPrimary}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
