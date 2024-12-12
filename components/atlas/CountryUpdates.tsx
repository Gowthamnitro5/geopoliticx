"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Globe } from 'lucide-react';
import { useCountryUpdates } from './hooks/useCountryUpdates';
import { UpdateCard } from './UpdateCard';

interface CountryUpdatesProps {
  country: string;
  keywords?: string[];
}

export function CountryUpdates({ country, keywords = [] }: CountryUpdatesProps) {
  const { updates, loading, error } = useCountryUpdates(country, keywords);

  if (loading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center p-8">
          <Loader2 className="h-8 w-8 animate-spin" />
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent className="p-8 text-center text-destructive">
          {error}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe className="h-5 w-5" />
          Updates for {country}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {updates.map((update) => (
            <UpdateCard key={update.id} update={update} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}