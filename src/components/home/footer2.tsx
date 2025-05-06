// components/Footer.tsx
import { Brain, Instagram, Mail, SendIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

const services = [
  {
    id: 1,
    title: 'Tashqi reklama',
    icon: Brain,
    cards: [
      {
        title: 'Brendmourlar',
        description: "Jizzax shahrining ko'ringan bino-devorlari va tomlarida joylashgan brendmourlar",
        href: '/services/brendmourlar',
      },
      {
        title: 'Katta harflar',
        description: "Jizzax shahrining ko'ringan bino-devorlari va tomlari ustida katta hajmdagi harflar",
        href: '/services/katta-harflar',
      },
      {
        title: 'City Box',
        description: "Jizzax shahrining asosiy ko'chalarida 50 dan ortiq city boxlar",
        href: '/services/city-box',
      },
      {
        title: 'Avtovbus',
        description: "Jzzax shahar va shaharlararo avtobus yo'nalishlarida reklama o'rnaish",
        href: '/services/avtobus',
      },
      {
        title: 'Billboardlar',
        description: 'Jizzax shahar va tuman markazlarida 100 dan ortiq billboardlar',
        href: '/services/billboardlar',
      },
      {
        title: 'LED monitorlar',
        description: 'Jizzax shahar va tuman markazlarida 100 dan ortiq LED monitorlar',
        href: '/services/led-monitorlar',
      },
    ],
  },
  {
    id: 2,
    title: 'Tayyorlash & Ishlab chiqarish',
    icon: Brain,
    cards: [
      {
        title: "Bo'rtma harflar",
        description: "Yonadigan, bo'rtma harflar tayyorlash va o'rnatib berish",
        href: '/services/bortma-harflar',
      },
      {
        title: 'Stella',
        description: "Yo'l chetida va ofislar yonida turadigan stellalarni tayyorlash va o'rnatish hizmati",
        href: '/services/stella',
        new: true,
      },
      {
        title: 'Banner chop etish',
        description: "Bannerlar va orakallarni chop etish va uni o'rnatib berish xizmati",
        href: '/services/banner-chop-etish',
      },
      {
        title: "Bo'rtma harflar",
        description: "Yonadigan, bo'rtma harflar tayyorlash va o'rnatib berish",
        href: '/services/bortma-harflar',
      },
      {
        title: 'Stella',
        description: "Yo'l chetida va ofislar yonida turadigan stellalarni tayyorlash va o'rnatish hizmati",
        href: '/services/stella',
        new: true,
      },
      {
        title: 'Banner chop etish',
        description: "Bannerlar va orakallarni chop etish va uni o'rnatib berish xizmati",
        href: '/services/banner-chop-etish',
      },
    ],
  },
  {
    id: 3,
    title: 'Implementation',
    icon: Brain,
    cards: [
      { title: 'Web sayt yaratish', description: 'Description X', href: '/services/stella' },
      { title: 'Машино-места', description: 'Description Y', href: '/services/stella' },
      { title: 'Кладовые', description: 'Description Z', href: '/services/stella' },
      { title: 'Аренда квартир', description: 'Description W', href: '/services/stella' },
      { title: 'Аукционы недвижимости', description: 'Description V', href: '/services/stella' },
    ],
  },
];

const navLinks = [
  { label: 'Главная', href: '/' },
  { label: 'О нас', href: '/about' },
  { label: 'Портфолио', href: '/portfolio' },
  { label: 'Блог', href: '/blog' },
  { label: 'Цены', href: '/price' },
  { label: 'Контакты', href: '/contact' },
];

export default function Footer2() {
  return (
    <>
      <Separator className={'footer-border'} />
      <footer className="bg-card text-sm text-neutral-800 border-t">
        <div className="mx-auto max-w-7xl px-[32px] lg:px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left column */}
          <div className="space-y-4 lg:space-y-8 mr-10 lg:mr-0">
            <div>
              <p className="mb-2 lg:mb-3 font-medium text-foreground">Наши партнеры</p>
              <Image src="/dotsoft.webp" alt="Самолет" width={70} height={70} />
            </div>
            <div className="py-2 border-t border-border">
              <p className="mb-2 lg:mb-3 font-medium text-foreground">Есть вопросы или предложения?</p>
              <Link href="/contact">
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-accent hover:bg-accent/80 text-primary min-w-44 rounded-full text-xs"
                >
                  Напишите нам
                </Button>
              </Link>
            </div>
            <p className="text-neutral-500 text-xs">
              В группу «Самолет» входит ряд ведущих российских девелоперских компаний полного цикла, реализующих
              масштабные объекты недвижимости.
            </p>

            {/* Social icons */}
            <div>
              <p className="mb-2 lg:mb-3 text-foreground font-medium">Соцсети</p>
              <div className="flex gap-2">
                <Link
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-accent hover:bg-accent/80 text-primary p-2 rounded-full"
                >
                  <SendIcon className="w-full h-full" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-accent hover:bg-accent/80 text-primary p-2 rounded-full"
                >
                  <Instagram className="w-full h-full" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-accent hover:bg-accent/80 text-primary p-2 rounded-full"
                >
                  <Mail className="w-full h-full" />
                </Link>
              </div>
            </div>
          </div>

          {/* Middle columns */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.id}>
                <h4 className="font-semibold mb-3 text-foreground">{service.title}</h4>
                <ul className="space-y-1 lg:space-y-2">
                  {service.cards.map((item, index) => (
                    <li key={index} className="">
                      <Link href={item.href} className="text-neutral-500 hover:text-foreground/80 duration-300 text-sm">
                        {item.title}
                      </Link>
                      {item?.new && <Badge className="ml-1.5 py-0.5 px-1.5 !text-xs">Новое</Badge>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div>
            <h4 className="font-semibold mb-3 text-foreground">О компании</h4>
            <ul className="space-y-1">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-neutral-500 hover:text-foreground/80 duration-300 text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mx-auto max-w-7xl px-[32px] lg:px-4 border-t py-4 flex items-center justify-between">
          <div>
            <Image src="/next.svg" alt="Dotsoft" width={40} height={40} />
          </div>
          <div className="text-xs text-center text-neutral-400">
            © {new Date().getFullYear()} Forward. Все права защищены.
          </div>
        </div>
      </footer>
    </>
  );
}
