import { Skeleton } from '@/components/ui/skeleton';
import { Tier } from '@/constants/pricing-tier';
import { cn } from '@/lib/utils';

interface Props {
  loading: boolean;
  tier: Tier;
  priceMap: Record<string, string>;
  value: string;
  priceSuffix: string;
}

export function PriceAmount({ loading = false, priceMap, priceSuffix, tier, value }: Props) {
  return (
    <div className="mt-6 flex flex-col px-8">
      {!loading ? (
        <Skeleton className="h-[96px] w-full bg-border" />
      ) : (
        <>
          <div className={cn('text-[50px] leading-[96px] tracking-[-1.6px] font-medium')}>
            {priceMap[tier.priceId[value]]?.replace(/\.00$/, '') || "100"}
          </div>
          <div className={cn('font-medium leading-[12px] text-[12px]')}>{priceSuffix}</div>
        </>
      )}
    </div>
  );
}
