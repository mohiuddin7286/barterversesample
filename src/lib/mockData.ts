export type Category = 'All' | 'Electronics' | 'Services' | 'Fashion' | 'Home' | 'Vehicles';

export interface Listing {
  id: number;
  title: string;
  category: Category;
  condition: string;
  description: string;
  seeking: string;
  user: string;
  reputation: string;
  timeAgo: string;
  imageUrl: string;
}

export const MOCK_LISTINGS: Listing[] = [
  {
    id: 1,
    title: 'Sony PlayStation 5',
    category: 'Electronics',
    condition: 'Like New',
    description: 'Hardly used, comes with one controller and cables.',
    seeking: 'Electric Guitar or iPad Pro',
    user: 'Ayush',
    reputation: '⭐⭐⭐⭐⭐',
    timeAgo: '2h ago',
    imageUrl: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Logo & Brand Identity Design',
    category: 'Services',
    condition: 'Digital Service',
    description: 'I will design a full brand package for your startup.',
    seeking: 'Used Herman Miller Chair or 500 Coins',
    user: 'Shreyansh',
    reputation: '⭐⭐⭐⭐',
    timeAgo: '5h ago',
    imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Vintage Leather Jacket',
    category: 'Fashion',
    condition: 'Vintage',
    description: 'Classic brown leather, size Large. Great patina.',
    seeking: 'Record Player or Good Coffee Beans',
    user: 'Ammar',
    reputation: '⭐⭐⭐⭐⭐',
    timeAgo: '1d ago',
    imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Custom Built Fixie Bike',
    category: 'Vehicles',
    condition: 'Good',
    description: 'Matte black frame, new grip tape. Very fast.',
    seeking: 'Gaming Monitor or 800 Coins',
    user: 'Rishi',
    reputation: '⭐⭐⭐',
    timeAgo: '1d ago',
    imageUrl: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Handmade Ceramic Mugs (Set of 4)',
    category: 'Home',
    condition: 'New',
    description: 'Glazed pottery, microwave safe.',
    seeking: 'Houseplants or Books',
    user: 'Fazal',
    reputation: '⭐⭐⭐⭐⭐',
    timeAgo: '2d ago',
    imageUrl: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80',
  },
];