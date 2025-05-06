import { services } from '../../../../../public/assets/data';

export async function generateMetadata({ params }) {
  const service = services.flatMap((s) => s.cards).find((card) => card.id === params.service);

  if (!service) {
    return {
      title: 'Xizmat topilmadi | Reklama Xizmati',
      description: 'Siz izlayotgan xizmat mavjud emas.',
    };
  }

  return {
    title: service.seo?.title || 'Services Title',
    description: service.seo?.description || 'Services Description',
    openGraph: {
      title: service.seo?.title || 'Services Title',
      description: service.seo?.description || 'Services Description',
      images: [service.images?.image || 'default-image-url'],
    },
    other: {
      keywords: (service.seo?.keywords || ['default', 'keywords']).join(', '),
    },
  };
}

export default function ServiceLayout({ children }) {
  return <main>{children}</main>;
}
