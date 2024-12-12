import { Badge } from '@/components/ui/badge';
import { CountryUpdate } from './types';
import { CATEGORIES } from './config';

interface UpdateCardProps {
  update: CountryUpdate;
}

export function UpdateCard({ update }: UpdateCardProps) {
  const category = CATEGORIES[update.category];
  const CategoryIcon = category.icon;

  return (
    <div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
      <div className="flex items-center gap-2 mb-2">
        <CategoryIcon className="h-5 w-5" />
        <h3 className="font-semibold">{update.title}</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-2">
        {update.content}
      </p>
      <div className="flex justify-between items-center">
        <Badge variant="secondary" className={category.color}>
          {category.label}
        </Badge>
        <div className="flex gap-2 text-xs text-muted-foreground">
          <span>{new Date(update.date).toLocaleDateString()}</span>
          <span>•</span>
          <span>{update.source}</span>
        </div>
      </div>
    </div>
  );
}