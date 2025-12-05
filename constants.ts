import { PlantProfile } from './types';

export const PLANT_CATEGORIES = ['All', 'Crops', 'Vegetables', 'Fruits', 'Flowers', 'Indoor', 'Medicinal'];

export const PLANT_DATABASE: PlantProfile[] = [
  {
    id: '1',
    name: 'Tomato',
    latinName: 'Solanum lycopersicum',
    category: 'Vegetables',
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&q=80&w=800',
    sunlight: 'Full Sun (6-8 hours)',
    watering: 'Regularly, keep soil moist but not waterlogged.',
    soil: 'Loamy, well-drained, slightly acidic (pH 6.0-6.8)',
    preventionTips: ['Rotate crops yearly', 'Mulch to prevent soil splash', 'Prune lower leaves']
  },
  {
    id: '2',
    name: 'Rose',
    latinName: 'Rosa',
    category: 'Flowers',
    image: 'https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&q=80&w=800',
    sunlight: 'Full Sun (6+ hours)',
    watering: 'Deep watering 2 times a week',
    soil: 'Rich, well-drained loam',
    preventionTips: ['Ensure good air circulation', 'Avoid overhead watering', 'Remove dead wood']
  },
  {
    id: '3',
    name: 'Aloe Vera',
    latinName: 'Aloe barbadensis miller',
    category: 'Medicinal',
    image: 'https://images.myplantin.com/1242_2688/5643/main.jpg',
    sunlight: 'Bright, indirect sunlight',
    watering: 'Deeply but rarely (every 3 weeks)',
    soil: 'Cactus potting mix, sandy soil',
    preventionTips: ['Do not overwater', 'Use pot with drainage holes', 'Protect from frost']
  },
  {
    id: '4',
    name: 'Wheat',
    latinName: 'Triticum',
    category: 'Crops',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=800',
    sunlight: 'Full Sun',
    watering: 'Moderate, critical during flowering',
    soil: 'Clay loam',
    preventionTips: ['Use disease-resistant varieties', 'Proper seed treatment', 'Crop rotation']
  },
  {
    id: '5',
    name: 'Monstera',
    latinName: 'Monstera deliciosa',
    category: 'Indoor',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=800',
    sunlight: 'Bright to medium indirect light',
    watering: 'Every 1-2 weeks, allow soil to dry out',
    soil: 'Peat-based potting soil',
    preventionTips: ['Wipe dust off leaves', 'Check for spider mites', 'Avoid direct scorching sun']
  },
  {
    id: '6',
    name: 'Strawberry',
    latinName: 'Fragaria × ananassa',
    category: 'Fruits',
    image: 'https://cdn.britannica.com/22/75922-050-D3982BD0/flowers-fruits-garden-strawberry-plant-species.jpg',
    sunlight: 'Full Sun (6-10 hours)',
    watering: '1-2 inches per week',
    soil: 'Sandy loam, slightly acidic',
    preventionTips: ['Use straw mulch', 'Remove runners', 'Replace plants every 3 years']
  },
  {
    id: '7',
    name: 'Tulsi (Holy Basil)',
    latinName: 'Ocimum tenuiflorum',
    category: 'Medicinal',
    image: 'https://manthanhub.com/wp-content/uploads/2022/05/image-1.png',
    sunlight: 'Full Sun to Partial Shade',
    watering: 'Regularly, keep soil moist',
    soil: 'Fertile, well-drained loamy soil',
    preventionTips: ['Prune regularly to encourage growth', 'Protect from cold drafts', 'Avoid waterlogging']
  },
  {
    id: '8',
    name: 'Mint',
    latinName: 'Mentha',
    category: 'Medicinal',
    image: 'https://www.thespruce.com/thmb/nVtkf2R36In_gSqy3r-3tLeOy_s=/3198x2132/filters:no_upscale():max_bytes(150000):strip_icc()/growing-mint-1402628-3-d2b5d572445e4798ba330f1273862860.jpg',
    sunlight: 'Part shade to full sun',
    watering: 'Frequent, keep soil moist',
    soil: 'Rich, moist, well-drained',
    preventionTips: ['Contain roots in pots (invasive)', 'Harvest frequently to prevent flowering', 'Monitor for rust fungus']
  },
  {
    id: '9',
    name: 'Marigold',
    latinName: 'Tagetes',
    category: 'Flowers',
    image: 'https://tse3.mm.bing.net/th/id/OIP.O7fMj8wJ3AtCRk0D83__LgHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
    sunlight: 'Full Sun',
    watering: 'Allow soil to dry between waterings',
    soil: 'Adaptable, well-drained soil',
    preventionTips: ['Deadhead spent blooms', 'Avoid overhead watering to prevent mildew', 'Good air circulation']
  },
  {
    id: '10',
    name: 'Banana',
    latinName: 'Musa',
    category: 'Fruits',
    image: 'https://images.pexels.com/photos/29197085/pexels-photo-29197085.jpeg?cs=srgb&dl=pexels-gaby-escovar-3424496-29197085.jpg&fm=jpg',
    sunlight: 'Full Sun',
    watering: 'Regular deep watering',
    soil: 'Rich, well-drained, slightly acidic',
    preventionTips: ['Protect from strong winds', 'Remove suckers to focus energy', 'Mulch heavily to retain moisture']
  },
  {
    id: '11',
    name: 'Watermelon',
    latinName: 'Citrullus lanatus',
    category: 'Fruits',
    image: 'https://tse1.mm.bing.net/th/id/OIP.XOrFzWs2DSTQLYwbRVIdlwHaEK?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
    sunlight: 'Full Sun',
    watering: 'Consistent moisture until fruit set',
    soil: 'Nutrient-rich, sandy loam',
    preventionTips: ['Rotate crops every 3 years', 'Use mulch to keep fruit off soil', 'Watch for cucumber beetles']
  },
  {
    id: '12',
    name: 'Rosemary',
    latinName: 'Salvia rosmarinus',
    category: 'Medicinal',
    image: 'https://hips.hearstapps.com/hmg-prod/images/close-up-image-of-rosemary-growing-in-a-garden-royalty-free-image-1663776933.jpg?resize=1200:*',
    sunlight: 'Full Sun',
    watering: 'Allow soil to dry out completely',
    soil: 'Sandy, well-drained',
    preventionTips: ['Avoid overwatering', 'Prune to maintain shape', 'Ensure good air circulation']
  },
  {
    id: '13',
    name: 'Sunflower',
    latinName: 'Helianthus',
    category: 'Flowers',
    image: 'https://tse1.mm.bing.net/th/id/OIP._v_XSQoKjR6X-MlK_5zbEAHaE7?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
    sunlight: 'Full Sun',
    watering: 'Regular, deep watering',
    soil: 'Loose, well-draining',
    preventionTips: ['Stake tall varieties', 'Watch for pests like aphids', 'Space plants properly']
  }
];