export const brand = {
  name: 'Deedees Cooking Pouch',
  handle: '@deedeespouch',
  tagline: 'Cook smart. Eat better.',
  description:
    'Premium traditional Nigerian meals prepared for modern, busy families who want convenience without losing taste, ritual, or warmth.',
  location: 'Australia delivery',
  promise: 'Tradition in every pouch'
};

export const logoImage = {
  src: 'https://scontent-iad3-2.cdninstagram.com/v/t51.82787-15/626207283_18081378854246902_31443326691815032_n.jpg?stp=c100.0.300.300a_dst-jpg_e35_s640x640_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=2ums_wEe45wQ7kNvwE5J1TW&_nc_oc=AdpoLGw1C7OxpaOsk7n07ypp3_GMN15pc8hwmwcC__jrJGSoE0eOL85Fmg7GEQpz20o&_nc_zt=23&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_gid=VJvsbPvL3am8gtue3RIG3A&_nc_ss=7a289&oh=00_Af0xryrq5rKnd9SkElG67_kbbHd-sSGeWcM7P8btbQXuRw&oe=69E89757',
  alt: 'Deedees Cooking Pouch logo image from Instagram'
};

export const featuredImage = {
  src: 'https://scontent-iad3-1.cdninstagram.com/v/t51.82787-15/534372025_17843253213558634_1012827675210431039_n.jpg?stp=c216.0.648.648a_dst-jpg_e35_s640x640_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=450_ujDqHrAQ7kNvwE8g4sd&_nc_oc=AdrM0wZrCc19WtIhLWKcLRw-MJQKjs6iWC96uTYgInRw9vKf68pASb9FBVIud73WTfo&_nc_zt=23&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_gid=P-h3y_EicVXwG5xncz_IKA&_nc_ss=7a289&oh=00_Af05IUVQwHVUWCk5mdm6lEfdmwAE8NkAuTJ59Kpf7FwTGw&oe=69E7E8F0',
  alt: 'Deedees Cooking Pouch featured product image from Instagram'
};

export const navigation = [
  { label: 'Story', href: '#story' },
  { label: 'Products', href: '#products' },
  { label: 'Etsy', href: '#etsy' },
  { label: 'Footer', href: '#footer' }
];

export const storyNotes = [
  'Cook smart. Eat better.',
  'Moi Moi | Agidi | Ekuru 🍲',
  'Tradition in every pouch 🥘',
  'Australia delivery'
];

export const storyBullets = [
  'Clean cooking with less mess',
  'Reusable, leak-proof, BPA-free',
  'Built for home kitchens, parties, and catering',
  'Designed to make traditional food feel premium and effortless'
];

export interface ProductCard {
  number: string;
  name: string;
  description: string;
  details: string[];
}

export const products: ProductCard[] = [
  {
    number: '01',
    name: 'Moi Moi Pouch',
    description:
      'Soft, savoury, and rich with the comfort of a family-style classic, presented with a polished finish.',
    details: ['Protein-rich', 'Perfect for bulk cooking', 'Clean release and tidy presentation']
  },
  {
    number: '02',
    name: 'Agidi Pouch',
    description:
      'Smooth and delicate, made to sit neatly beside stews and sauces without losing its shape or elegance.',
    details: ['Minimal mess', 'Ideal for event prep', 'Elegant, consistent portions']
  },
  {
    number: '03',
    name: 'Ekuru Pouch',
    description:
      'A lighter classic with a nostalgic texture and a modern, premium delivery experience.',
    details: ['Light texture', 'Traditional appeal', 'Reusable format']
  }
];

export const etsyLink = 'https://deedeebespokestore.etsy.com/listing/4438824872';

export const etsyHighlights = [
  'Fast ordering',
  'Easy delivery',
  'Trusted handcrafted feel'
];

export const footerLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/deedeespouch/' },
  { label: 'Etsy shop', href: etsyLink }
];
