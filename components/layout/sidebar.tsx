'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';
import { navigation } from '@/lib/constants';
import { MobileNav } from './mobile-nav';
import { Menu } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 right-0 p-4 border-b bg-background z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MobileNav />
            <span className="font-bold text-xl">PolitCX</span>
          </div>
          <ThemeToggle />
        </div>
      </div>

      <div className="w-64 p-4 hidden md:flex md:flex-col border-r">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Menu className="h-8 w-8" />
            <h1 className="text-2xl font-bold">GeoPolitcsX</h1>
          </div>
          <ThemeToggle />
        </div>
        <nav
          className="space-y-2 flex-1"
          role="navigation"
          aria-label="Main navigation"
        >
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.name} href={item.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    'w-full justify-start gap-2',
                    pathname === item.href && 'bg-muted'
                  )}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  {item.name}
                </Button>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
