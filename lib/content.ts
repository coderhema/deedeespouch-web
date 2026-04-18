export const brand = {
  name: 'Deedees Cooking Pouch',
  handle: '@deedeespouch',
  tagline: 'Authentic Nigerian flavors, delivered to your door.',
  description:
    'Traditional Nigerian foods in premium pouches for fast, tidy cooking and reliable delivery to Australia.',
  location: 'Australia delivery',
  promise: 'Cook smart. Eat better.'
};

export const logoImage = {
  src: 'https://scontent-iad3-2.cdninstagram.com/v/t51.82787-15/626207283_18081378854246902_31443326691815032_n.jpg?stp=c100.0.300.300a_dst-jpg_e35_s640x640_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=2ums_wEe45wQ7kNvwE5J1TW&_nc_oc=AdpoLGw1C7OxpaOsk7n07ypp3_GMN15pc8hwmwcC__jrJGSoE0eOL85Fmg7GEQpz20o&_nc_zt=23&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_gid=VJvsbPvL3am8gtue3RIG3A&_nc_ss=7a289&oh=00_Af0xryrq5rKnd9SkElG67_kbbHd-sSGeWcM7P8btbQXuRw&oe=69E89757',
  alt: 'Deedees Cooking Pouch logo image from Instagram'
};

export const featuredImage = {
  src: 'https://scontent-iad3-1.cdninstagram.com/v/t51.82787-15/534372025_17843253213558634_1012827675210431039_n.jpg?stp=c216.0.648.648a_dst-jpg_e35_s640x640_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=450_ujDqHrAQ7kNvwE8g4sd&_nc_oc=AdrM0wZrCc19WtIhLWKcLRw-MJQKjs6iWC96uTYgInRw9vKf68pASb9FBVIud73WTfo&_nc_zt=23&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_gid=P-h3y_EicVXwG5xncz_IKA&_nc_ss=7a289&oh=00_Af05IUVQwHVUWCk5mdm6lEfdmwAE8NkAuTJ59Kpf7FwTGw&oe=69E7E8F0',
  alt: 'Deedees Cooking Pouch featured Instagram post'
};

export const navigation = [
  { label: 'Story', href: '#story' },
  { label: 'Why Deedees', href: '#why' },
  { label: 'Products', href: '#products' },
  { label: 'From Our Kitchen', href: '#from-our-kitchen' },
  { label: 'Order Now', href: '#order-now' }
];

export const storyBullets = [
  'Family recipe roots and Nigerian heritage in every pouch',
  'Convenient heat-and-eat format made for busy homes',
  'Premium quality with a clean, elegant presentation'
];

export const whyBenefits = [
  {
    title: 'Authentic recipe',
    description: 'Built around familiar Nigerian flavors and the comforting taste people grew up with.'
  },
  {
    title: 'Heat-and-eat convenience',
    description: 'A pouch format that keeps prep simple, tidy, and quick without losing the tradition.'
  },
  {
    title: 'Australia-wide delivery',
    description: 'Order once and get dependable delivery to your door anywhere across Australia.'
  }
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
      'Soft, savory, and satisfying. A traditional classic made for easy preparation and a clean, beautiful finish.',
    details: ['Rich flavor', 'Family favorite', 'Perfect for gatherings']
  },
  {
    number: '02',
    name: 'Agidi Pouch',
    description:
      'Smooth and light, with the calm texture and dependable structure that works well for everyday meals and events.',
    details: ['Simple to serve', 'Great with stews', 'Premium presentation']
  },
  {
    number: '03',
    name: 'Ekuru Pouch',
    description:
      'A traditional favorite with a clean, modern pouch format that keeps the process easy from kitchen to table.',
    details: ['Traditional taste', 'Less mess', 'Reliable convenience']
  }
];

export const etsyLink = 'https://deedeebespokestore.etsy.com/listing/4438824872';

export const etsyHighlights = [
  'Order Now',
  'Shop the Collection',
  'Get Yours Today'
];

export const footerLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/deedeespouch/' },
  { label: 'Etsy shop', href: etsyLink }
];

export const instagramCards = [
  {
    title: 'Sunday kitchen table',
    caption: 'Drop in an Instagram image or iframe embed here.',
    tilt: '-2deg'
  },
  {
    title: 'Prep and pour',
    caption: 'Drop in an Instagram image or iframe embed here.',
    tilt: '2deg'
  },
  {
    title: 'Family tradition',
    caption: 'Drop in an Instagram image or iframe embed here.',
    tilt: '-1deg'
  }
];
