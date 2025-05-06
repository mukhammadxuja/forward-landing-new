import { Metadata } from 'next';
import { ReactNode } from 'react';
import { ServiceCard, services } from '../../../../../public/assets/data';

type Props = {
  params: {
    service: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.flatMap((s) => s.cards).find((card) => card.id === params.service);

  if (!service) {
    return {
      title: 'Xizmat topilmadi | Reklama Xizmati',
      description: 'Siz izlayotgan xizmat mavjud emas.',
    };
  }

  const typedService = service as ServiceCard;

  return {
    title: typedService.seo?.title ?? 'Services Title',
    description: typedService.seo?.description ?? 'Services Description',
    openGraph: {
      title: typedService.seo?.title ?? 'Services Title',
      description: typedService.seo?.description ?? 'Services Description',
      images: [typedService.images?.image ?? 'default-image-url'],
    },
    other: {
      keywords: typedService.seo?.keywords?.join(', ') ?? 'default, keywords',
    },
  };
}

export default function ServiceLayout({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
