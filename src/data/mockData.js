export const fallbackProducts = [
  { id: 1, name: 'Wireless Earbuds', category: 'Electronics', price: 1999 },
  { id: 2, name: 'Smart Watch', category: 'Wearables', price: 3499 },
  { id: 3, name: 'Phone Case', category: 'Accessories', price: 699 },
  { id: 4, name: 'Portable Speaker', category: 'Audio', price: 2499 },
  {
    id: 5,
    name: 'Alagon',
    category: 'Lifestyle',
    price: 1299,
    reviewScore: 4.7,
    reviewCount: 1842,
    humanReview: 'People praise its reliable quality and easy everyday use.',
    googleAiInsight: 'Positive review momentum suggests rising demand this week.'
  },
  {
    id: 6,
    name: 'Travel Charger',
    category: 'Accessories',
    price: 1799,
    reviewScore: 4.8,
    reviewCount: 3260,
    humanReview: 'People love its compact size, fast charging, and multiple ports.',
    googleAiInsight: 'Best overall match: high ratings and strong review momentum indicate dependable demand.'
  }
];

export const trendData = [
  { day: 'Mon', demand: 620, mentions: 420 }, { day: 'Tue', demand: 680, mentions: 510 },
  { day: 'Wed', demand: 760, mentions: 640 }, { day: 'Thu', demand: 840, mentions: 790 },
  { day: 'Fri', demand: 920, mentions: 980 }, { day: 'Sat', demand: 1060, mentions: 1210 },
  { day: 'Sun', demand: 1150, mentions: 1480 }
];

export const categoryData = [
  { name: 'Audio', value: 82 }, { name: 'Wearables', value: 69 },
  { name: 'Accessories', value: 55 }, { name: 'Mobiles', value: 43 }
];

export const socialChannels = [
  { name: 'Instagram', mentions: '4,820', change: '+42%', tone: 'purple' },
  { name: 'YouTube', mentions: '2,190', change: '+26%', tone: 'red' },
  { name: 'X / Twitter', mentions: '1,480', change: '+18%', tone: 'blue' }
];

export const predictionRows = [
  ['Wireless Earbuds', '1,150 units', '91%', 'High'], ['Smart Watch', '860 units', '87%', 'High'],
  ['Portable Speaker', '720 units', '82%', 'Medium'], ['Phone Case', '640 units', '79%', 'Medium']
];

export const recommendationRows = {
  'Travel Charger': [
    { type: 'Cheapest pick', brand: 'Portronics', product: 'Travel charger', cost: 899, detail: 'Affordable fast-charging option.', tone: 'green' },
    { type: 'Best-rated pick', brand: 'Anker', product: 'Travel charger', cost: 2499, detail: 'Reliable build and strong charging performance.', tone: 'purple' }
  ],
  'Portable Speaker': [
    { type: 'Budget pick', brand: 'iBall', product: 'Bluetooth speaker', cost: 1499, detail: 'Value-friendly Bluetooth audio choice.', tone: 'green' },
    { type: 'Best-rated pick', brand: 'Sony', product: 'Bluetooth speaker', cost: 4999, detail: 'Balanced sound and dependable brand quality.', tone: 'purple' },
    { type: 'Popular alternative', brand: 'JBL', product: 'Bluetooth speaker', cost: 3999, detail: 'Strong demand and portable sound.', tone: 'blue' }
  ],
  'Wireless Earbuds': [
    { type: 'Cheapest pick', brand: 'boAt', product: 'Wireless earbuds', cost: 1299, detail: 'Affordable everyday earbuds with strong demand.', tone: 'green' },
    { type: 'Best-rated pick', brand: 'Noise', product: 'Wireless earbuds', cost: 1999, detail: 'Popular fit with reliable battery life.', tone: 'purple' }
  ],
  'Smart Watch': [
    { type: 'Budget pick', brand: 'Fire-Boltt', product: 'Smart watch', cost: 1799, detail: 'Feature-rich choice at a lower cost.', tone: 'green' },
    { type: 'Premium pick', brand: 'Samsung', product: 'Smart watch', cost: 14999, detail: 'Polished Android experience and health tracking.', tone: 'purple' },
    { type: 'Best-rated pick', brand: 'Apple', product: 'Apple Watch', cost: 44999, detail: 'Premium ecosystem and strong customer trust.', tone: 'blue' }
  ],
  'Phone Case': [
    { type: 'Cheapest pick', brand: 'Ringke', product: 'Phone case', cost: 699, detail: 'Protective fit at an accessible cost.', tone: 'green' },
    { type: 'Best-rated pick', brand: 'Spigen', product: 'Phone case', cost: 1299, detail: 'Trusted protection with a clean finish.', tone: 'purple' },
    { type: 'Popular alternative', brand: 'Caseology', product: 'Phone case', cost: 999, detail: 'Stylish protection for everyday use.', tone: 'blue' }
  ]
};
