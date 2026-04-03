export interface Listing {
  id: number;
  title: string;
  condition: string;
  description: string;
  seeking: string;
  user: string;
  reputation: string;
}

export const MOCK_LISTINGS: Listing[] = [
  {
    id: 1,
    title: 'Sony PlayStation 5',
    condition: 'Like New',
    description: 'Hardly used, comes with one controller.',
    seeking: 'Electric Guitar or iPad Pro',
    user: 'Alex',
    reputation: '⭐⭐⭐⭐⭐',
  },
  {
    id: 2,
    title: 'Logo & Brand Identity Design',
    condition: 'Digital Service',
    description: 'I will design a full brand package for your startup.',
    seeking: 'Used Herman Miller Chair or 500 Barter Coins',
    user: 'DesignNinja',
    reputation: '⭐⭐⭐⭐',
  },
  {
    id: 3,
    title: 'Vintage Leather Jacket',
    condition: 'Worn/Vintage',
    description: 'Classic brown leather, size Large.',
    seeking: 'Record Player or Good Coffee Beans',
    user: 'Sammy_T',
    reputation: '⭐⭐⭐⭐⭐',
  },
];