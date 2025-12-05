export interface Diagnosis {
  plantName: string;
  diseaseName: string;
  severity: 'Healthy' | 'Mild' | 'Moderate' | 'Severe';
  description: string;
  organicTreatment: string;
  chemicalTreatment: string;
  preventionTips: string[];
}

export interface HistoryItem extends Diagnosis {
  id: string;
  imageURL: string;
  timestamp: number;
}

export interface PlantProfile {
  id: string;
  name: string;
  latinName: string;
  category: 'Crops' | 'Vegetables' | 'Fruits' | 'Flowers' | 'Indoor' | 'Medicinal';
  image: string;
  sunlight: string;
  watering: string;
  soil: string;
  preventionTips: string[];
}
