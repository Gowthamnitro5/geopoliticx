import { Globe, TrendingUp, Shield, Building2 } from 'lucide-react';
import { CategoryConfig } from './types';

export const CATEGORIES: Record<string, CategoryConfig> = {
  diplomatic: { 
    icon: Globe, 
    color: 'bg-blue-500',
    label: 'Diplomatic Relations'
  },
  military: { 
    icon: Shield, 
    color: 'bg-red-500',
    label: 'Military Affairs'
  },
  economic: { 
    icon: TrendingUp, 
    color: 'bg-green-500',
    label: 'Economic Analysis'
  },
  trade: { 
    icon: Building2, 
    color: 'bg-yellow-500',
    label: 'Trade Relations'
  }
};