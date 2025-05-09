'use client';
import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export function LocalizationBanner() {
  const t = useTranslations('navbar');
  const [showBanner, setShowBanner] = useState(true);
  if (!showBanner) {
    return null;
  }
  return (
    <>
      {showBanner && (
        <div className="hidden md:block w-full border-b border-border/50 bg-background">
          <div className="mx-auto flex max-w-7xl px-[32px] py-2 lg:px-4 items-center justify-between py-2">
            <div className="flex gap-4">
              <span className="text-sm text-muted-foreground">{t('address')}</span>
              <a href="tel:+998901234567" className="text-sm text-muted-foreground hover:underline">
                +998 90 123 45 67
              </a>
            </div>
            <X
              size={16}
              className="cursor-pointer text-muted-foreground hover:text-foreground"
              onClick={() => setShowBanner(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
