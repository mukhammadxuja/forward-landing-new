import { FeaturedCardGradient } from '@/components/gradients/featured-card-gradient';
import { FeaturesList } from '@/components/home/pricing/features-list';
import { PriceAmount } from '@/components/home/pricing/price-amount';
import { PriceTitle } from '@/components/home/pricing/price-title';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { IBillingFrequency } from '@/constants/billing-frequency';
import { PricingTier } from '@/constants/pricing-tier';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface Props {
  loading: boolean;
  frequency: IBillingFrequency;
  priceMap: Record<string, string>;
}

export function PriceCards({ loading = false, frequency, priceMap }: Props) {
  return (
    <div className="isolate mx-auto grid grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {PricingTier.map((tier) => (
        <div key={tier.id} className={cn('rounded-lg bg-background/70 backdrop-blur-[6px] overflow-hidden')}>
          <div className={cn('flex gap-5 flex-col rounded-lg rounded-b-none pricing-card-border')}>
            {tier.featured && <FeaturedCardGradient />}
            <PriceTitle tier={tier} />
            <PriceAmount
              loading={loading}
              tier={tier}
              priceMap={priceMap}
              value={frequency.value}
              priceSuffix={frequency.priceSuffix}
            />
            <div className={'px-8'}>
              <Separator className={'bg-border'} />
            </div>
            <div className={'px-8 text-[16px] leading-[24px]'}>{tier.description}</div>
          </div>
          <div className={'px-8 mt-8'}>
            <Button className={'w-full'} variant={'secondary'} asChild={true}>
              <Link href={`/checkout/${tier.priceId[frequency.value]}`}>Get started</Link>
            </Button>
          </div>
          <FeaturesList tier={tier} />
        </div>
      ))}
    </div>
  );
}
