import { ChartPie, Clock, Eye, Palette } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { AnimatedGradientBorderTW } from '../ui/border';

function Stats({ aboutPage = false }) {
  const t = useTranslations('IndexPage.stats');
  return (
    <div
      className={`grid gap-3 lg:gap-4 mt-4 ${aboutPage ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-2 lg:grid-cols-4'}`}
    >
      <AnimatedGradientBorderTW className="flex items-start gap-4">
        <Eye className="text-primary hidden md:block text-3xl lg:text-4xl" />
        <div>
          <p className="font-semibold text-sm lg:text-base">{t('card1Title')}</p>
          <p className="text-gray-500 text-xs lg:text-sm">{t('card1Paragraph')}</p>
        </div>
      </AnimatedGradientBorderTW>

      <AnimatedGradientBorderTW className="flex items-start gap-4">
        <Palette className="text-primary hidden md:block text-3xl lg:text-4xl" />
        <div>
          <p className="font-semibold text-sm lg:text-base">{t('card2Title')}</p>
          <p className="text-gray-500 text-xs lg:text-sm">{t('card2Paragraph')}</p>
        </div>
      </AnimatedGradientBorderTW>

      <AnimatedGradientBorderTW className="flex items-start gap-4">
        <Clock className="text-primary hidden md:block text-3xl lg:text-4xl" />
        <div>
          <p className="font-semibold text-sm lg:text-base">{t('card3Title')}</p>
          <p className="text-gray-500 text-xs lg:text-sm">{t('card3Paragraph')}</p>
        </div>
      </AnimatedGradientBorderTW>

      <AnimatedGradientBorderTW className="flex items-start gap-4">
        <ChartPie className="text-primary hidden md:block text-3xl lg:text-4xl" />
        <div>
          <p className="font-semibold text-sm lg:text-base">{t('card4Title')}</p>
          <p className="text-gray-500 text-xs lg:text-sm">{t('card4Paragraph')}</p>
        </div>
      </AnimatedGradientBorderTW>
    </div>
  );
}

export default Stats;
