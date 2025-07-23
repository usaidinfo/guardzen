
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  rating: number;
  reviews: number;
  category: string;
  description: string;
  features: string[];
  colors: string[];
  sizes: string[];
  inStock: boolean;
  featured: boolean;
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Pro Sports Guard',
    price: 149.99,
    originalPrice: 179.99,
    image: 'https://readdy.ai/api/search-image?query=professional%20sports%20mouth%20guard%20with%20blue%20and%20white%20colors%2C%20clean%20product%20photography%20on%20white%20background%2C%20high%20quality%20protective%20gear%20for%20athletes%2C%20modern%20design%20with%20comfortable%20fit&width=400&height=400&seq=1&orientation=squarish',
    images: [
      'https://readdy.ai/api/search-image?query=professional%20sports%20mouth%20guard%20with%20blue%20and%20white%20colors%2C%20clean%20product%20photography%20on%20white%20background%2C%20high%20quality%20protective%20gear%20for%20athletes%2C%20modern%20design%20with%20comfortable%20fit&width=400&height=400&seq=1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=close%20up%20view%20of%20sports%20mouth%20guard%20showing%20texture%20and%20material%20quality%2C%20professional%20product%20photography%2C%20white%20background%2C%20detailed%20view%20of%20protective%20features&width=400&height=400&seq=2&orientation=squarish',
    ],
    rating: 4.8,
    reviews: 234,
    category: 'Sports',
    description: 'Premium sports mouth guard designed for maximum protection and comfort during intense athletic activities.',
    features: [
      'Dual-layer construction for superior protection',
      'Custom moldable fit',
      'Breathable design',
      'FDA approved materials',
      'Easy to clean and maintain'
    ],
    colors: ['Blue', 'Black', 'Clear', 'Red'],
    sizes: ['Small', 'Medium', 'Large'],
    inStock: true,
    featured: true,
  },
  {
    id: '2',
    name: 'Night Guard Plus',
    price: 89.99,
    image: 'https://readdy.ai/api/search-image?query=dental%20night%20guard%20for%20teeth%20grinding%2C%20clear%20transparent%20mouth%20guard%2C%20professional%20medical%20product%20photography%20on%20white%20background%2C%20comfortable%20sleep%20protection%20device&width=400&height=400&seq=3&orientation=squarish',
    images: [
      'https://readdy.ai/api/search-image?query=dental%20night%20guard%20for%20teeth%20grinding%2C%20clear%20transparent%20mouth%20guard%2C%20professional%20medical%20product%20photography%20on%20white%20background%2C%20comfortable%20sleep%20protection%20device&width=400&height=400&seq=3&orientation=squarish',
      'https://readdy.ai/api/search-image?query=night%20guard%20in%20protective%20case%2C%20clean%20product%20photography%2C%20white%20background%2C%20showing%20storage%20and%20hygiene%20features&width=400&height=400&seq=4&orientation=squarish',
    ],
    rating: 4.6,
    reviews: 189,
    category: 'Dental',
    description: 'Comfortable night guard designed to prevent teeth grinding and jaw clenching during sleep.',
    features: [
      'Soft inner layer for comfort',
      'Hard outer layer for durability',
      'Prevents teeth grinding',
      'Reduces jaw tension',
      'Includes storage case'
    ],
    colors: ['Clear', 'Blue'],
    sizes: ['Small', 'Medium', 'Large'],
    inStock: true,
    featured: true,
  },
  {
    id: '3',
    name: 'Youth Sports Guard',
    price: 69.99,
    image: 'https://readdy.ai/api/search-image?query=colorful%20youth%20sports%20mouth%20guard%20for%20kids%2C%20fun%20bright%20colors%2C%20safe%20protective%20gear%20for%20young%20athletes%2C%20clean%20product%20photography%20on%20white%20background&width=400&height=400&seq=5&orientation=squarish',
    images: [
      'https://readdy.ai/api/search-image?query=colorful%20youth%20sports%20mouth%20guard%20for%20kids%2C%20fun%20bright%20colors%2C%20safe%20protective%20gear%20for%20young%20athletes%2C%20clean%20product%20photography%20on%20white%20background&width=400&height=400&seq=5&orientation=squarish',
    ],
    rating: 4.7,
    reviews: 156,
    category: 'Youth',
    description: 'Specially designed mouth guard for young athletes with fun colors and comfortable fit.',
    features: [
      'Child-friendly design',
      'Safe materials',
      'Easy to mold',
      'Vibrant colors',
      'Parental guide included'
    ],
    colors: ['Pink', 'Green', 'Orange', 'Purple'],
    sizes: ['Small', 'Medium'],
    inStock: true,
    featured: false,
  },
  {
    id: '4',
    name: 'Pro Boxing Guard',
    price: 199.99,
    image: 'https://readdy.ai/api/search-image?query=professional%20boxing%20mouth%20guard%2C%20black%20and%20red%20colors%2C%20heavy%20duty%20protection%20for%20combat%20sports%2C%20clean%20product%20photography%20on%20white%20background%2C%20premium%20quality&width=400&height=400&seq=6&orientation=squarish',
    images: [
      'https://readdy.ai/api/search-image?query=professional%20boxing%20mouth%20guard%2C%20black%20and%20red%20colors%2C%20heavy%20duty%20protection%20for%20combat%20sports%2C%20clean%20product%20photography%20on%20white%20background%2C%20premium%20quality&width=400&height=400&seq=6&orientation=squarish',
    ],
    rating: 4.9,
    reviews: 98,
    category: 'Combat Sports',
    description: 'Heavy-duty mouth guard designed for boxing and other combat sports with maximum protection.',
    features: [
      'Extra thick protection',
      'Shock absorption technology',
      'Secure fit system',
      'Professional grade materials',
      'Competition approved'
    ],
    colors: ['Black', 'Red', 'Blue'],
    sizes: ['Medium', 'Large'],
    inStock: true,
    featured: true,
  },
  {
    id: '5',
    name: 'Clear Comfort Guard',
    price: 79.99,
    image: 'https://readdy.ai/api/search-image?query=clear%20transparent%20mouth%20guard%2C%20minimal%20design%2C%20comfortable%20everyday%20protection%2C%20clean%20product%20photography%20on%20white%20background%2C%20subtle%20and%20discreet&width=400&height=400&seq=7&orientation=squarish',
    images: [
      'https://readdy.ai/api/search-image?query=clear%20transparent%20mouth%20guard%2C%20minimal%20design%2C%20comfortable%20everyday%20protection%2C%20clean%20product%20photography%20on%20white%20background%2C%20subtle%20and%20discreet&width=400&height=400&seq=7&orientation=squarish',
    ],
    rating: 4.4,
    reviews: 267,
    category: 'Everyday',
    description: 'Discreet clear mouth guard perfect for everyday protection with maximum comfort.',
    features: [
      'Ultra-thin design',
      'Nearly invisible',
      'All-day comfort',
      'Easy speech',
      'Lightweight'
    ],
    colors: ['Clear'],
    sizes: ['Small', 'Medium', 'Large'],
    inStock: true,
    featured: false,
  },
  {
    id: '6',
    name: 'Custom Fit Pro',
    price: 249.99,
    image: 'https://readdy.ai/api/search-image?query=premium%20custom%20fit%20mouth%20guard%2C%20professional%20grade%20protection%2C%20sophisticated%20design%2C%20clean%20product%20photography%20on%20white%20background%2C%20luxury%20sports%20equipment&width=400&height=400&seq=8&orientation=squarish',
    images: [
      'https://readdy.ai/api/search-image?query=premium%20custom%20fit%20mouth%20guard%2C%20professional%20grade%20protection%2C%20sophisticated%20design%2C%20clean%20product%20photography%20on%20white%20background%2C%20luxury%20sports%20equipment&width=400&height=400&seq=8&orientation=squarish',
    ],
    rating: 4.9,
    reviews: 87,
    category: 'Premium',
    description: 'Top-of-the-line custom-fit mouth guard with professional-grade protection and comfort.',
    features: [
      'Professional custom molding',
      'Premium materials',
      'Perfect fit guarantee',
      'Maximum protection',
      'Lifetime warranty'
    ],
    colors: ['Black', 'Blue', 'Clear', 'Red'],
    sizes: ['Custom'],
    inStock: true,
    featured: true,
  },
];

export const getProducts = () => mockProducts;

export const getProduct = (id: string) => mockProducts.find(p => p.id === id);

export const getFeaturedProducts = () => mockProducts.filter(p => p.featured);

export const getProductsByCategory = (category: string) => 
  mockProducts.filter(p => p.category === category);

export const searchProducts = (query: string) =>
  mockProducts.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  );
