import { TwitterIcon, InstagramIcon, LinkedinIcon, GithubIcon } from '@/components/icons/index';

export const socialLinks = [
  {
    href: "https://twitter.com/teacoffeehub",
    icon: TwitterIcon,
    label: "Twitter"
  },
  {
    href: "https://instagram.com/teacoffeehub",
    icon: InstagramIcon,
    label: "Instagram"
  },
  {
    href: "https://linkedin.com/company/teacoffeehub",
    icon: LinkedinIcon,
    label: "LinkedIn"
  },
  {
    href: "https://github.com/teacoffeehub",
    icon: GithubIcon,
    label: "GitHub"
  },
];

export const linkSections = [
  {
    title: 'Produk',
    links: [
      { name: 'Teh Premium', href: '/tea' },
      { name: 'Kopi Artisan', href: '/coffee' },
      { name: 'Herbal Alami', href: '/herbal' },
      { name: 'Matcha Jepang', href: '/matcha' },
      { name: 'Peralatan Brewing', href: '/equipment' },
      { name: 'Semua Produk', href: '/products' },
    ],
  },
  {
    title: 'Kursus',
    links: [
      { name: 'Tea Brewing 101', href: '/courses/tea-brewing' },
      { name: 'Barista Professional', href: '/courses/barista' },
      { name: 'Herbal Medicine', href: '/courses/herbal' },
      { name: 'Latte Art Workshop', href: '/courses/latte-art' },
      { name: 'Sertifikasi', href: '/certification' },
      { name: 'Semua Kursus', href: '/courses' },
    ],
  },
  {
    title: 'Bundle Spesial',
    links: [
      { name: 'Starter Tea Kit', href: '/bundles/tea-starter' },
      { name: 'Coffee Lover Set', href: '/bundles/coffee-lover' },
      { name: 'Herbal Wellness Pack', href: '/bundles/herbal-wellness' },
      { name: 'Barista Complete Kit', href: '/bundles/barista-kit' },
      { name: 'Gift Bundle', href: '/bundles/gift' },
      { name: 'Semua Bundle', href: '/bundles' },
    ],
  },
  {
    title: 'Layanan',
    links: [
      { name: 'Konsultasi Gratis', href: '/consultation' },
      { name: 'Subscription Box', href: '/subscription' },
      { name: 'Corporate Training', href: '/corporate' },
      { name: 'Bulk Order', href: '/bulk-order' },
      { name: 'Customer Support', href: '/support' },
      { name: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'Perusahaan',
    links: [
      { name: 'Tentang Kami', href: '/about' },
      { name: 'Blog & Tips', href: '/blog' },
      { name: 'Komunitas', href: '/community' },
      { name: 'Mitra Petani', href: '/farmers' },
      { name: 'Karir', href: '/careers' },
      { name: 'Kontak', href: '/contact' },
    ],
  },
];

export const legalLinks = [
  { name: 'Kebijakan Privasi', href: '/privacy' },
  { name: 'Syarat & Ketentuan', href: '/terms' },
  { name: 'Kebijakan Refund', href: '/refund' },
  { name: 'Pengaturan Cookie', href: '/cookies' },
];

// Featured bundles for footer highlights
export const featuredBundles = [
  {
    name: 'Tea Starter Kit',
    description: 'Perfect untuk pemula tea lover',
    originalPrice: 'Rp 299.000',
    bundlePrice: 'Rp 199.000',
    href: '/bundles/tea-starter',
    badge: 'HEMAT 33%'
  },
  {
    name: 'Coffee Master Set',
    description: 'Lengkap dengan kursus barista',
    originalPrice: 'Rp 899.000',
    bundlePrice: 'Rp 649.000',
    href: '/bundles/coffee-master',
    badge: 'TERLARIS'
  },
  {
    name: 'Wellness Bundle',
    description: 'Herbal + konsultasi kesehatan',
    originalPrice: 'Rp 599.000',
    bundlePrice: 'Rp 399.000',
    href: '/bundles/wellness',
    badge: 'REKOMENDASI'
  }
];

// Quick access links for footer
export const quickLinks = [
  { name: 'Lacak Pesanan', href: '/track-order' },
  { name: 'Gratis Ongkir', href: '/free-shipping' },
  { name: 'Program Affiliasi', href: '/affiliate' },
  { name: 'Poin Reward', href: '/rewards' },
];

// Newsletter signup data
export const newsletterInfo = {
  title: 'Dapatkan Tips & Promo Terbaru',
  description: 'Berlangganan newsletter untuk tips brewing, resep baru, dan penawaran eksklusif',
  placeholder: 'Masukkan email Anda...',
  buttonText: 'Berlangganan',
  benefits: [
    'Tips brewing mingguan',
    'Promo eksklusif member',
    'Akses early bird kursus baru',
    'Resep signature drink'
  ]
};