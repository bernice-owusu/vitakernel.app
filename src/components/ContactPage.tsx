import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  CheckCircle2,
  FileDown,
  MessageCircle,
  Send,
  AlertCircle,
  User,
  Copy,
  Check,
} from 'lucide-react';
import {
  PageRoute,
  ENQUIRY_TYPES,
  PRODUCT_OPTIONS,
  IMAGES,
  COMPANY_INFO,
} from '../data/vitakernelData';
import { PageHero } from './PageHero';

interface ContactPageProps {
  prefillProduct?: string;
  onDownloadCatalogue: () => void;
  onNavigate?: (route: PageRoute, anchor?: string, prefillProduct?: string) => void;
}

interface FormState {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  enquiryType: string;
  productOfInterest: string;
  estimatedQuantity: string;
  message: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  prefillProduct,
  onDownloadCatalogue,
  onNavigate,
}) => {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    enquiryType: 'Product Purchase',
    productOfInterest: prefillProduct || 'Mango Seed Oil',
    estimatedQuantity: '',
    message: '',
  });

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [whatsappNote, setWhatsappNote] = useState<string>('');
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  const [copiedKey, setCopiedKey] = useState<'phone' | 'email' | null>(null);

  useEffect(() => {
    if (prefillProduct) {
      setForm((prev) => ({
        ...prev,
        productOfInterest: prefillProduct,
      }));
    }
  }, [prefillProduct]);

  const handleCopy = (key: 'phone' | 'email', text: string) => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    setCopiedKey(key);
    window.setTimeout(() => setCopiedKey(null), 1800);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!form.message.trim()) {
      setErrorMsg('Please include brief details about your enquiry or quantity requirements.');
      return;
    }

    const refCode = `VK-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRef(refCode);
    setErrorMsg(null);
  };

  const resetForm = () => {
    setSubmittedRef(null);
    setForm({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      country: '',
      enquiryType: 'Product Purchase',
      productOfInterest: prefillProduct || 'Mango Seed Oil',
      estimatedQuantity: '',
      message: '',
    });
  };

  return (
    <div className="bg-[#F7F5EC]">
      <PageHero
        kicker="Contact Us"
        title="Let’s Build Valuable Partnerships"
        description="Whether you are interested in sourcing mango seed oil, purchasing biomass briquettes, exploring distribution opportunities or discussing a potential partnership, we would be pleased to hear from you."
        breadcrumbs={[{ label: 'Home', route: 'home' }, { label: 'Contact Us' }]}
        onNavigate={onNavigate ?? (() => {})}
        imageSrc={IMAGES.facility}
        imageAlt="Vitakernel commercial facility exterior"
        fallbackTitle="Vitakernel Facility"
      />

      {/* Main Enquiry Grid */}
      <section id="enquiry-form" className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">
          {/* Left Column: Contact Details, Catalogue & WhatsApp */}
          <div className="md:col-span-5 space-y-6 order-2 md:order-1">
            <div className="bg-white rounded-2xl border border-[#292D2A]/10 p-5 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#174D35] mb-5">
                Official Contact Channels
              </h2>
              <ul className="space-y-4 text-sm text-[#292D2A]/85">
                <li className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-lg bg-[#F7F5EC] text-[#174D35] flex items-center justify-center shrink-0">
                    <User className="w-4 h-4" />
                  </span>
                  <div className="min-w-0">
                    <div className="font-semibold text-[#174D35]">Executive Leadership</div>
                    <div className="text-[#292D2A]/85 font-medium">
                      {COMPANY_INFO.ceoName}
                    </div>
                    <div className="text-xs text-[#6B9B57] font-semibold uppercase tracking-wide mt-0.5">
                      {COMPANY_INFO.ceoTitle}
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-lg bg-[#F7F5EC] text-[#174D35] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <div className="min-w-0">
                    <div className="font-semibold text-[#174D35]">Company Address</div>
                    <div className="text-[#292D2A]/75 leading-relaxed">
                      {COMPANY_INFO.addressLine1}
                      <br />
                      {COMPANY_INFO.addressLine2}
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-lg bg-[#F7F5EC] text-[#174D35] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-[#174D35]">Telephone / WhatsApp</div>
                    <div className="flex items-center justify-between gap-2">
                      <a
                        href={COMPANY_INFO.phoneHref}
                        className="text-[#292D2A]/80 hover:text-[#174D35] font-medium transition-colors"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                      <button
                        type="button"
                        onClick={() => handleCopy('phone', COMPANY_INFO.phone)}
                        className="inline-flex items-center gap-1 text-xs font-medium text-[#174D35]/70 hover:text-[#174D35] cursor-pointer px-2 py-1 rounded hover:bg-[#F7F5EC] shrink-0"
                        aria-label="Copy phone number"
                      >
                        {copiedKey === 'phone' ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#6B9B57]" />
                            <span className="text-[#6B9B57]">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-lg bg-[#F7F5EC] text-[#174D35] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-[#174D35]">Official Email Addresses</div>
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center justify-between gap-2">
                        <a
                          href={`mailto:${COMPANY_INFO.emailPrimary}`}
                          className="text-[#292D2A]/80 hover:text-[#174D35] transition-colors break-all"
                        >
                          {COMPANY_INFO.emailPrimary}
                        </a>
                        <button
                          type="button"
                          onClick={() => handleCopy('email', COMPANY_INFO.emailPrimary)}
                          className="inline-flex items-center gap-1 text-xs font-medium text-[#174D35]/70 hover:text-[#174D35] cursor-pointer px-2 py-1 rounded hover:bg-[#F7F5EC] shrink-0"
                          aria-label="Copy primary email"
                        >
                          {copiedKey === 'email' ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-[#6B9B57]" />
                              <span className="text-[#6B9B57]">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                      <a
                        href={`mailto:${COMPANY_INFO.emailExecutive}`}
                        className="text-[#292D2A]/80 hover:text-[#174D35] transition-colors break-all"
                      >
                        {COMPANY_INFO.emailExecutive}
                      </a>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-lg bg-[#F7F5EC] text-[#174D35] flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4" />
                  </span>
                  <div className="min-w-0">
                    <div className="font-semibold text-[#174D35]">Website</div>
                    <div className="text-[#292D2A]/75">
                      {COMPANY_INFO.website}
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Catalogue & WhatsApp Quick Actions */}
            <div id="whatsapp-enquiry" className="bg-white rounded-2xl border border-[#292D2A]/10 p-5 sm:p-8 space-y-5">
              <div>
                <h3 className="text-lg font-bold text-[#174D35] mb-1.5">
                  Company &amp; Product Resources
                </h3>
                <p className="text-sm text-[#292D2A]/75 leading-relaxed mb-4">
                  Download our summary company overview and product specification guide for internal procurement review.
                </p>
                <button
                  type="button"
                  onClick={onDownloadCatalogue}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#174D35] hover:bg-[#103826] text-white text-sm font-semibold transition-colors cursor-pointer min-h-[44px]"
                >
                  <FileDown className="w-4 h-4 text-[#E5A928] shrink-0" />
                  <span>Download Company &amp; Product Catalogue</span>
                </button>
              </div>

              <div className="pt-5 border-t border-[#292D2A]/10">
                <h3 className="text-lg font-bold text-[#174D35] mb-1.5">
                  Quick WhatsApp Business Enquiry
                </h3>
                <p className="text-sm text-[#292D2A]/75 leading-relaxed mb-4">
                  Draft a pre-formatted supply or product message to send directly to our commercial desk ({COMPANY_INFO.phone}) via WhatsApp.
                </p>
                <button
                  type="button"
                  onClick={() => setWhatsappOpen((prev) => !prev)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#E5A928] hover:bg-[#D2971C] text-[#292D2A] text-sm font-semibold transition-colors cursor-pointer min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>{whatsappOpen ? 'Hide WhatsApp Composer' : 'Compose WhatsApp Enquiry'}</span>
                </button>

                {whatsappOpen && (
                  <div className="mt-4 p-4 rounded-xl bg-[#F7F5EC] border border-[#292D2A]/10 space-y-3">
                    <label className="block text-xs font-semibold text-[#174D35]">
                      Quick Message Preview
                    </label>
                    <textarea
                      rows={3}
                      value={
                        whatsappNote ||
                        `Hello Vitakernel, I would like information on ${form.productOfInterest} (${form.enquiryType}).`
                      }
                      onChange={(e) => setWhatsappNote(e.target.value)}
                      className="w-full rounded-lg border border-[#292D2A]/15 bg-white p-2.5 text-base sm:text-sm text-[#292D2A] focus:outline-2 focus:outline-[#174D35]"
                    />
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappDigits}?text=${encodeURIComponent(
                        whatsappNote ||
                          `Hello Vitakernel, I would like information on ${form.productOfInterest} (${form.enquiryType}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-[#174D35] text-white text-xs font-semibold min-h-[44px]"
                    >
                      <span>Send via WhatsApp ({COMPANY_INFO.phone})</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Full Commercial Enquiry Form */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-[#292D2A]/10 p-5 sm:p-7 lg:p-10 order-1 md:order-2 shadow-xs">
            {submittedRef ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#6B9B57]/20 text-[#174D35] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <p className="font-mono text-xs font-semibold text-[#6B9B57] tabular-nums">
                  Enquiry Reference: {submittedRef}
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#174D35]">
                  Thank You for Contacting Vitakernel
                </h2>
                <p className="text-sm sm:text-base text-[#292D2A]/80 max-w-lg mx-auto leading-relaxed">
                  Your <span className="font-semibold">{form.enquiryType}</span> regarding{' '}
                  <span className="font-semibold">{form.productOfInterest}</span> has been recorded. Our commercial team will respond with product specifications, availability, and supply details to{' '}
                  <span className="font-semibold">{form.email}</span>.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-3 rounded-lg bg-[#174D35] hover:bg-[#103826] text-white text-sm font-semibold transition-colors cursor-pointer min-h-[44px]"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5 sm:space-y-6">
                <div className="border-b border-[#292D2A]/10 pb-4 sm:pb-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#6B9B57] mb-1">
                    Product &amp; Partnership Enquiry System
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#174D35]">
                    Request a Quote or Partnership Discussion
                  </h2>
                </div>

                {/* One-Tap Product Focus Selector */}
                <div>
                  <span className="block text-xs font-semibold text-[#174D35] mb-2">
                    Select Product Focus
                  </span>
                  <div
                    role="tablist"
                    aria-label="Product of interest quick selector"
                    className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 bg-[#F7F5EC] rounded-lg border border-[#292D2A]/10"
                  >
                    {PRODUCT_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        role="tab"
                        aria-selected={form.productOfInterest === opt}
                        onClick={() =>
                          setForm((prev) => ({
                            ...prev,
                            productOfInterest: opt,
                          }))
                        }
                        className={`px-2.5 py-2 rounded-md text-xs font-semibold transition-colors cursor-pointer min-h-[40px] truncate ${
                          form.productOfInterest === opt
                            ? 'bg-[#174D35] text-white'
                            : 'text-[#292D2A]/75 hover:text-[#174D35]'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {errorMsg && (
                  <div
                    role="alert"
                    className="flex items-center gap-2.5 p-3.5 rounded-lg bg-red-50 border border-red-200 text-sm text-red-800"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold text-[#174D35] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full rounded-lg border border-[#292D2A]/20 bg-[#F7F5EC]/50 px-3.5 py-2.5 text-base sm:text-sm text-[#292D2A] focus:bg-white focus:outline-2 focus:outline-[#174D35] min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold text-[#174D35] mb-1.5">
                      Company / Organisation
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Organisation or business name"
                      className="w-full rounded-lg border border-[#292D2A]/20 bg-[#F7F5EC]/50 px-3.5 py-2.5 text-base sm:text-sm text-[#292D2A] focus:bg-white focus:outline-2 focus:outline-[#174D35] min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-[#174D35] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full rounded-lg border border-[#292D2A]/20 bg-[#F7F5EC]/50 px-3.5 py-2.5 text-base sm:text-sm text-[#292D2A] focus:bg-white focus:outline-2 focus:outline-[#174D35] min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-[#174D35] mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+Country Code & Number"
                      className="w-full rounded-lg border border-[#292D2A]/20 bg-[#F7F5EC]/50 px-3.5 py-2.5 text-base sm:text-sm text-[#292D2A] focus:bg-white focus:outline-2 focus:outline-[#174D35] min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-xs font-semibold text-[#174D35] mb-1.5">
                      Country
                    </label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      value={form.country}
                      onChange={handleChange}
                      placeholder="Country / Region"
                      className="w-full rounded-lg border border-[#292D2A]/20 bg-[#F7F5EC]/50 px-3.5 py-2.5 text-base sm:text-sm text-[#292D2A] focus:bg-white focus:outline-2 focus:outline-[#174D35] min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label htmlFor="enquiryType" className="block text-xs font-semibold text-[#174D35] mb-1.5">
                      Enquiry Type
                    </label>
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      value={form.enquiryType}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-[#292D2A]/20 bg-[#F7F5EC]/50 px-3.5 py-2.5 text-base sm:text-sm text-[#292D2A] focus:bg-white focus:outline-2 focus:outline-[#174D35] min-h-[44px]"
                    >
                      {ENQUIRY_TYPES.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="estimatedQuantity" className="block text-xs font-semibold text-[#174D35] mb-1.5">
                      Estimated Quantity / Trial Volume
                    </label>
                    <input
                      id="estimatedQuantity"
                      name="estimatedQuantity"
                      type="text"
                      value={form.estimatedQuantity}
                      onChange={handleChange}
                      placeholder="e.g. 500 L / 10 Metric Tonnes / Sample Evaluation"
                      className="w-full rounded-lg border border-[#292D2A]/20 bg-[#F7F5EC]/50 px-3.5 py-2.5 text-base sm:text-sm text-[#292D2A] focus:bg-white focus:outline-2 focus:outline-[#174D35] min-h-[44px]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[#174D35] mb-1.5">
                    Message &amp; Specification Requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Share your target application, packaging preference, delivery schedule, or partnership details..."
                    className="w-full rounded-lg border border-[#292D2A]/20 bg-[#F7F5EC]/50 px-3.5 py-2.5 text-base sm:text-sm text-[#292D2A] focus:bg-white focus:outline-2 focus:outline-[#174D35]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-[#292D2A]/65">
                    We Look Forward to Hearing from You.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#E5A928] hover:bg-[#D2971C] text-[#292D2A] text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap w-full sm:w-fit min-h-[44px]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Enquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
