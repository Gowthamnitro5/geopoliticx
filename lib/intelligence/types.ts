export interface IntelligenceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface IntelligenceReport {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  confidence: number;
  sources: string[];
  timestamp: string;
  region: string;
  impact: {
    economic: number;
    diplomatic: number;
    military: number;
    social: number;
  };
}

export interface TrendingTopic {
  id: string;
  topic: string;
  category: string;
  momentum: number;
  lastUpdated: string;
}