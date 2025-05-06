import Link from 'next/link';
import { Button } from '../ui/button';

function Contact() {
  return (
    <section className="space-y-4 lg:space-y-0 py-8 lg:py-10 flex flex-col lg:flex-row lg:items-center lg:justify-between">
      <div className="space-y-2 lg:space-y-4">
        <h4 className="section-title">Все еще есть вопросы?</h4>
        <p className="text-foreground-secondary text-[16px] tracking-[-.01em] leading-[24px]">
          Свяжитесь с нами для получения дополнительной информации.
        </p>
      </div>
      <Link href="/contact">
        <Button>Контакт</Button>
      </Link>
    </section>
  );
}

export default Contact;
