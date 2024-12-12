export interface CountryData {
  type: string;
  properties: {
    name: string;
  };
  geometry: any;
}

export interface CountryUpdate {
  id: string;
  category: 'diplomatic' | 'military' | 'economic' | 'trade';
  title: string;
  content: string;
  date: string;
  source: string;
}

export interface CategoryConfig {
  icon: any;
  color: string;
  label: string;
}