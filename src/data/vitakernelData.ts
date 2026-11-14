export type PageRoute =
  | 'home'
  | 'about'
  | 'products'
  | 'mango-seed-oil'
  | 'biomass-briquettes'
  | 'process'
  | 'sustainability'
  | 'contact';

export interface NavItem {
  id: PageRoute;
  label: string;
  children?: {
    label: string;
    route: PageRoute;
    anchor?: string;
    description: string;
  }[];
}

export const IMAGES = {
  hero: '/src/assets/images/hero_mango_oil_briquettes_1794615082226.jpg',
  facility: '/src/assets/images/facility_exterior_1794615082250.jpg',
  mangoOil: '/src/assets/images/mango_seed_oil_kernels_1794615082101.jpg',
  briquettes: '/src/assets/images/biomass_briquettes_stack_1794615083470.jpg',
  machinery: '/src/assets/images/extraction_machinery_1794615083906.jpg',
  sustainability: '/src/assets/images/sustainability_sprout_1794615083632.jpg',
  orchard: '/src/assets/images/orchard_mangoes_branch_1794615084191.jpg',
} as const;

export const LOGO_URL = '/assets/vitakernel-logo.png';
export const LOGO_LIGHT_URL = '/assets/vitakernel-logo-light.png';

export const COMPANY_INFO = {
  name: 'Vitakernel',
  ceoName: 'Azara Inka Dumah',
  ceoTitle: 'Chief Executive Officer',
  addressLine1: 'H/No. 4 Cantoments, Florentine Villas',
  addressLine2: 'P. O. Box GP 20915, Accra, Ghana',
  fullAddress: 'H/No. 4 Cantoments, Florentine Villas, P. O. Box GP 20915, Accra, Ghana',
  shortLocation: 'Accra, Ghana',
  phone: '+233 244 380 495',
  phoneHref: 'tel:+233244380495',
  whatsappDigits: '233244380495',
  emailPrimary: 'info@vitakernel.com',
  emailExecutive: 'inkadumah@vitakernel.com',
  website: 'www.vitakernel.com',
} as const;

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  {
    id: 'about',
    label: 'About Us',
    children: [
      { label: 'Company Overview', route: 'about', anchor: 'overview', description: 'Who we are and our agro-processing focus' },
      { label: 'Our Story', route: 'about', anchor: 'story', description: 'Unlocking value from mango-derived materials' },
      { label: 'Vision & Mission', route: 'about', anchor: 'vision-mission', description: 'Our long-term direction and core values' },
      { label: 'Sustainability', route: 'sustainability', description: 'Resource efficiency and responsible processing' },
    ],
  },
  {
    id: 'products',
    label: 'Our Products',
    children: [
      { label: 'Products Overview', route: 'products', description: 'Two complementary agro-industrial product lines' },
      { label: 'Mango Seed Oil', route: 'mango-seed-oil', description: 'Plant-derived kernel oil for cosmetic & industrial use' },
      { label: 'Biomass Briquettes', route: 'biomass-briquettes', description: 'Solid biofuel produced from residual mango biomass' },
    ],
  },
  {
    id: 'process',
    label: 'Our Process',
    children: [
      { label: 'Mango Seed Oil Extraction', route: 'process', anchor: 'oil-extraction', description: 'Six-stage kernel separation and extraction workflow' },
      { label: 'Briquette Production', route: 'process', anchor: 'briquette-production', description: 'Five-stage drying, compression and packaging flow' },
      { label: 'Waste-to-Value Approach', route: 'process', anchor: 'waste-to-value', description: 'One raw material creating multiple opportunities' },
    ],
  },
  {
    id: 'sustainability',
    label: 'Sustainability',
    children: [
      { label: 'Circular Economy', route: 'sustainability', anchor: 'circular-economy', description: 'Converting agricultural by-products into resources' },
      { label: 'Environmental Responsibility', route: 'sustainability', anchor: 'environmental', description: 'Alternative biomass energy and waste reduction' },
      { label: 'Community Impact', route: 'sustainability', anchor: 'community', description: 'Strengthening the agricultural processing value chain' },
    ],
  },
  { id: 'contact', label: 'Contact Us' },
];

export const HOME_APPROACH_STEPS = [
  {
    step: '01',
    title: 'Raw Material Collection',
    description: 'Obtaining mango-derived seeds and suitable residual agricultural materials for processing.',
  },
  {
    step: '02',
    title: 'Processing & Extraction',
    description: 'Preparing mango kernels for oil extraction and conditioning fibrous residues for densification.',
  },
  {
    step: '03',
    title: 'Quality Control',
    description: 'Monitoring moisture levels, filtration clarity, and structural integrity across every batch.',
  },
  {
    step: '04',
    title: 'Packaging & Distribution',
    description: 'Working towards consistent product quality and reliable supply for commercial buyers.',
  },
];

export const WHY_CHOOSE_PILLARS = [
  {
    number: '01',
    title: 'Resource Efficiency',
    description: 'Maximising the value obtained from mango-derived materials across complementary processing streams.',
  },
  {
    number: '02',
    title: 'Sustainable Production',
    description: 'Supporting productive use of agricultural by-products rather than leaving suitable materials unused.',
  },
  {
    number: '03',
    title: 'Product Diversification',
    description: 'Serving distinct industrial and commercial markets through mango seed oil extraction and briquette production.',
  },
  {
    number: '04',
    title: 'Industrial Opportunities',
    description: 'Building dependable supply relationships with manufacturers, formulators, distributors, and commercial buyers.',
  },
  {
    number: '05',
    title: 'Responsible Processing',
    description: 'Promoting efficient utilisation of agricultural resources throughout the agro-processing value chain.',
  },
];

export const CORE_VALUES = [
  {
    title: 'Innovation',
    description: 'Exploring better ways to process and utilise agricultural resources.',
  },
  {
    title: 'Sustainability',
    description: 'Promoting responsible resource utilisation and waste reduction.',
  },
  {
    title: 'Quality',
    description: 'Working towards reliable and consistent product standards.',
  },
  {
    title: 'Integrity',
    description: 'Building trust through transparency and responsible business practices.',
  },
  {
    title: 'Partnership',
    description: 'Creating lasting relationships with farmers, suppliers, customers and industry stakeholders.',
  },
];

export interface SpecRow {
  parameter: string;
  specification: string;
  notes: string;
}

export const MANGO_OIL_SPECS: SpecRow[] = [
  { parameter: 'Extraction Method', specification: 'To be confirmed per grade', notes: 'Mechanical pressing / solvent-assisted options on enquiry' },
  { parameter: 'Grade Availability', specification: 'Crude / Filtered / Refined', notes: 'Configured to buyer manufacturing requirements' },
  { parameter: 'Appearance & Colour', specification: 'Golden amber to pale yellow', notes: 'Natural variation by kernel batch & refinement' },
  { parameter: 'Odour', specification: 'Characteristic mild kernel aroma', notes: 'Deodorised options subject to specification' },
  { parameter: 'Free Fatty Acid (FFA)', specification: 'Supplied on batch COA', notes: 'Verified laboratory certificate issued prior to dispatch' },
  { parameter: 'Peroxide Value', specification: 'Supplied on batch COA', notes: 'Measured at packaging stage' },
  { parameter: 'Moisture Content', specification: 'Supplied on batch COA', notes: 'Controlled to protect oxidative stability' },
  { parameter: 'Packaging Options', specification: 'HDPE Jerrycans / Steel Drums / IBC', notes: '20 L, 25 L, 200 L drums & bulk formats on request' },
  { parameter: 'Shelf Life', specification: 'Confirmed per grade & packaging', notes: 'Dependent on storage conditions and seal integrity' },
  { parameter: 'Storage Requirements', specification: 'Cool, dry, shaded environment', notes: 'Keep tightly sealed away from direct heat & sunlight' },
  { parameter: 'Minimum Order Quantity & Capacity', specification: 'Available upon commercial enquiry', notes: 'Tailored to pilot trials or recurring industrial supply' },
];

export const BRIQUETTE_SPECS: SpecRow[] = [
  { parameter: 'Raw Materials Used', specification: 'Suitable residual mango biomass', notes: 'Sourced from mango processing by-product streams' },
  { parameter: 'Shape & Dimensions', specification: 'Cylindrical solid briquettes', notes: 'Standard commercial diameters available on enquiry' },
  { parameter: 'Moisture Content', specification: 'Supplied on batch test sheet', notes: 'Dried prior to high-pressure densification' },
  { parameter: 'Ash Content', specification: 'Supplied on batch test sheet', notes: 'Verified per raw-material batch composition' },
  { parameter: 'Calorific Value', specification: 'Supplied on batch test sheet', notes: 'Laboratory proximate & bomb calorimetry data on request' },
  { parameter: 'Fixed Carbon', specification: 'Supplied on batch test sheet', notes: 'Reported with full proximate analysis' },
  { parameter: 'Bulk / Unit Density', specification: 'High-compression solid form', notes: 'Engineered for transport and boiler handling' },
  { parameter: 'Packaging Options', specification: '25 kg / 50 kg Woven Sacks or Bulk', notes: 'Palletised commercial loads available on request' },
  { parameter: 'Storage Requirements', specification: 'Dry, covered, ventilated warehouse', notes: 'Protect from ground moisture and rain exposure' },
  { parameter: 'Minimum Order Quantity', specification: 'Available upon commercial enquiry', notes: 'Flexible dispatch for industrial trials and contracts' },
  { parameter: 'Monthly Production Capacity', specification: 'Confirmed during supply consultation', notes: 'Scaled to seasonal and annual buyer agreements' },
];

export const OIL_EXTRACTION_PIPELINE = [
  {
    step: '01',
    title: 'Raw Material Collection',
    description: 'Mango seeds are sourced and collected from regional orchard and fruit-processing channels.',
  },
  {
    step: '02',
    title: 'Seed Preparation',
    description: 'Collected seeds are cleaned, sorted, and conditioned to remove surface impurities and excess moisture.',
  },
  {
    step: '03',
    title: 'Kernel Separation',
    description: 'Inner mango kernels are separated cleanly from the outer fibrous seed shells (endocarp).',
  },
  {
    step: '04',
    title: 'Oil Extraction',
    description: 'Prepared kernels undergo controlled mechanical or thermal-assisted extraction to release the lipid fraction.',
  },
  {
    step: '05',
    title: 'Oil Processing & Filtration',
    description: 'Extracted oil is clarified and filtered to meet targeted industrial and cosmetic formulation standards.',
  },
  {
    step: '06',
    title: 'Packaging & Storage',
    description: 'Finished mango seed oil is filled into food/industrial-grade containers ready for dispatch.',
  },
];

export const BRIQUETTE_PRODUCTION_PIPELINE = [
  {
    step: '01',
    title: 'Residual Material Collection',
    description: 'Suitable remaining mango-derived biomass materials are gathered from processing streams.',
  },
  {
    step: '02',
    title: 'Material Sorting & Preparation',
    description: 'Incoming agricultural residues are screened, sized, and separated from non-combustible contaminants.',
  },
  {
    step: '03',
    title: 'Drying & Conditioning',
    description: 'Moisture content is reduced to target thresholds required for clean, stable compression.',
  },
  {
    step: '04',
    title: 'Briquetting & Compression',
    description: 'Conditioned biomass is compressed under high mechanical pressure into dense cylindrical briquettes.',
  },
  {
    step: '05',
    title: 'Cooling, Packaging & Dispatch',
    description: 'Finished briquettes are cooled, packed in protective sacks or bulk loads, and staged for delivery.',
  },
];

export const ENQUIRY_TYPES = [
  'Product Purchase',
  'Product Distribution',
  'Supply Partnership',
  'Business Collaboration',
  'General Enquiry',
  'Other',
];

export const PRODUCT_OPTIONS = [
  'Mango Seed Oil',
  'Biomass Briquettes',
  'Both Products',
  'Other',
];
