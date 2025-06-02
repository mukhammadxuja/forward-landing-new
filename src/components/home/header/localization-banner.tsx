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
        <div className="hidden md:block w-full bg-background">
          <div className="mx-auto flex max-w-7xl px-[32px] py-2 lg:px-4 items-center justify-between py-2">
            <div className="flex gap-4">
              {/* <span className="text-sm text-muted-foreground">{t('address')}</span> */}
              <a
                href="https://t.me/forward_advertise"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted-foreground hover:underline"
              >
                Telegram
              </a>
              <a
                href="https://instagram.com/forward_ads_"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted-foreground hover:underline"
              >
                Instagram
              </a>
              <a href="tel:+998901234567" className="text-sm text-muted-foreground hover:underline">
                +99891 209 33 33
              </a>
            </div>
            <X
              size={16}
              className="hidden cursor-pointer text-muted-foreground hover:text-foreground"
              onClick={() => setShowBanner(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
