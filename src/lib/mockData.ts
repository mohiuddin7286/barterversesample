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
}

export const MOCK_LISTINGS: Listing[] = [
  {
    id: 1,
    title: 'Sony PlayStation 5',
    category: 'Electronics',
    condition: 'Like New',
    description: 'Hardly used, comes with one controller and cables.',
    seeking: 'Electric Guitar or iPad Pro',
    user: 'Alex',
    reputation: '⭐⭐⭐⭐⭐',
    timeAgo: '2h ago',
  },
  {
    id: 2,
    title: 'Logo & Brand Identity Design',
    category: 'Services',
    condition: 'Digital Service',
    description: 'I will design a full brand package for your startup.',
    seeking: 'Used Herman Miller Chair or 500 Coins',
    user: 'DesignNinja',
    reputation: '⭐⭐⭐⭐',
    timeAgo: '5h ago',
  },
  {
    id: 3,
    title: 'Vintage Leather Jacket',
    category: 'Fashion',
    condition: 'Vintage',
    description: 'Classic brown leather, size Large. Great patina.',
    seeking: 'Record Player or Good Coffee Beans',
    user: 'Sammy_T',
    reputation: '⭐⭐⭐⭐⭐',
    timeAgo: '1d ago',
  },
  {
    id: 4,
    title: 'Custom Built Fixie Bike',
    category: 'Vehicles',
    condition: 'Good',
    description: 'Matte black frame, new grip tape. Very fast.',
    seeking: 'Gaming Monitor or 800 Coins',
    user: 'RiderX',
    reputation: '⭐⭐⭐',
    timeAgo: '1d ago',
  },
  {
    id: 5,
    title: 'Handmade Ceramic Mugs (Set of 4)',
    category: 'Home',
    condition: 'New',
    description: 'Glazed pottery, microwave safe.',
    seeking: 'Houseplants or Books',
    user: 'EarthyArt',
    reputation: '⭐⭐⭐⭐⭐',
    timeAgo: '2d ago',
  },
];