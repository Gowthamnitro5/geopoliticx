import { useState, useEffect } from 'react';
import { CountryUpdate } from '../types';
import { fetchCountryUpdates } from '@/lib/api/country';

export function useCountryUpdates(country: string, keywords: string[] = []) {
  const [updates, setUpdates] = useState<CountryUpdate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getUpdates() {
      if (!country) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const data = await fetchCountryUpdates(country, keywords);
        setUpdates(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch updates');
        console.error('Error fetching country updates:', err);
      } finally {
        setLoading(false);
      }
    }

    getUpdates();
  }, [country, keywords]);

  return { updates, loading, error };
}