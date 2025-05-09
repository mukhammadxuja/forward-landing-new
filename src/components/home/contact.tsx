import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Button } from '../ui/button';

function Contact() {
  const t = useTranslations('IndexPage.contact');
  return (
    <section className="space-y-4 lg:space-y-0 py-8 lg:py-10 flex flex-col lg:flex-row lg:items-center lg:justify-between">
      <div className="space-y-2 lg:space-y-4">
        <h4 className="section-title">{t('title')}</h4>
        <p className="text-foreground-secondary text-[16px] tracking-[-.01em] leading-[24px]">{t('description')}</p>
      </div>
      <Link href="/contact">
        <Button>{t('button')}</Button>
      </Link>
    </section>
  );
}

export default Contact;
