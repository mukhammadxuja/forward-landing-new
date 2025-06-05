import { Brain } from 'lucide-react';

export interface BillboardType {
  id: number;
  position: { lat: number; lng: number };
  status: 'taken' | 'not_taken';
  address: string;
  type: string;
  number: string;
  size: string;
  zone: string;
  price: string;
  availableUntil: string;
  region: string;
  image: string;
}

export const billboardData: BillboardType[] = [
  {
    id: 101,
    position: { lat: 40.1261, lng: 67.8283 },
    status: 'not_taken',
    address: 'Jizzax markazi, Mustaqillik ko‘chasi',
    type: 'brendmourlar',
    number: 'BH-001',
    size: '2x4',
    zone: '1',
    price: '18 000 сум/kun',
    availableUntil: '31/12/2025',
    region: 'Jizzax',
    image: '/assets/billboards/1.png',
  },
  {
    id: 102,
    position: { lat: 40.1275, lng: 67.8301 },
    status: 'not_taken',
    address: 'Jizzax, Istiqlol mahallasi',
    type: 'katta-harflar',
    number: 'BH-002',
    size: '2x3',
    zone: '2',
    price: '16 500 сум/kun',
    availableUntil: '30/11/2025',
    region: 'Jizzax',
    image: '/assets/billboards/1.png',
  },
  {
    id: 103,
    position: { lat: 40.129, lng: 67.832 },
    status: 'not_taken',
    address: 'Jizzax, Markaziy bozor oldi',
    type: 'stella',
    number: 'ST-001',
    size: '1.5x4',
    zone: '1',
    price: '20 000 сум/kun',
    availableUntil: '01/01/2026',
    region: 'Jizzax',
    image: '/assets/billboards/1.png',
  },
  {
    id: 104,
    position: { lat: 40.1284, lng: 67.835 },
    status: 'taken',
    address: 'Jizzax, Toshkent yo‘li',
    type: 'city-box',
    number: 'ST-002',
    size: '1.8x5',
    zone: '2',
    price: '22 000 сум/kun',
    availableUntil: '-',
    region: 'Jizzax',
    image: '/assets/billboards/1.png',
  },
  {
    id: 105,
    position: { lat: 40.1244, lng: 67.8277 },
    status: 'not_taken',
    address: 'Jizzax, Universitet ko‘chasi',
    type: 'avtobus',
    number: 'BN-001',
    size: '2x6',
    zone: '3',
    price: '14 000 сум/kun',
    availableUntil: '01/12/2025',
    region: 'Jizzax',
    image: '/assets/billboards/1.png',
  },
  {
    id: 106,
    position: { lat: 40.1239, lng: 67.829 },
    status: 'not_taken',
    address: 'Jizzax, Bogishamol ko‘chasi',
    type: 'billboardlar',
    number: 'BN-002',
    size: '2x5',
    zone: '3',
    price: '13 000 сум/kun',
    availableUntil: '31/12/2025',
    region: 'Jizzax',
    image: '/assets/billboards/1.png',
  },
  {
    id: 107,
    position: { lat: 40.1239, lng: 67.812 },
    status: 'not_taken',
    address: 'Jizzax, Bogishamol ko‘chasi',
    type: 'led-monitorlar',
    number: 'BN-002',
    size: '2x5',
    zone: '3',
    price: '13 000 сум/kun',
    availableUntil: '31/12/2025',
    region: 'Jizzax',
    image: '/assets/billboards/1.png',
  },
];

export type ServiceCard = {
  id: string;
  title: string;
  description: string;
  href: string;
  fullDescription?: string;
  images?: {
    image: string;
    gallery: string[];
  };
  locations?: never[];
  thereMap?: boolean;
  priceRange?: string[] | string;
  quantity: string;
  seo?: {
    title: string;
    description: string;
    keywords: string[];
  };
  new?: boolean;
};

export type Service = {
  id: number;
  title: string;
  icon: any;
  cards: ServiceCard[];
};

export const services: Service[] = [
  {
    id: 1,
    title: 'Tashqi reklama',
    icon: Brain,
    cards: [
      {
        id: 'brendmourlar',
        title: 'Brendmourlar',
        description: "Jizzax shahrining ko'ringan bino-devorlari va tomlarida joylashgan brendmourlar",
        href: '/services/brendmourlar',
        fullDescription: `Brendmourlar — bu binolar devorlari yoki tomlarida joylashgan, keng ko‘lamli reklama maydonchalari bo‘lib, ular yuqori ko‘rinuvchanlikni ta’minlaydi. Brendmourlar orqali brendingizni shahar markazida, ko‘p odamlar harakatlanadigan joylarda namoyish etishingiz mumkin. Ular dizayn va joylashuvi bo‘yicha juda jozibali bo‘lib, uzoq masofadan ham e’tiborni tortadi.`,
        images: {
          image: '/assets/service/billboard.avif',
          gallery: ['/assets/billboards/1.png', '/assets/service/billboard.avif', '/assets/service/billboard.jpg'],
        },
        locations: [],
        priceRange: '1,500,000 – 3,500,000',
        quantity: '',

        seo: {
          title: 'Brendmourlar – Jizzaxda binolar ustidagi reklama | Reklama Xizmati',
          description:
            'Jizzax markazida ko‘rinadigan joylarda joylashgan brendmourlar. Narxlar, joylashuv va galereya bilan tanishing.',
          keywords: ['brendmour', 'devor reklama', 'bino reklama', 'tashqi reklama', 'Jizzax reklama'],
        },
      },
      {
        id: 'katta-harflar',
        title: 'Katta harflar',
        description: "Jizzax shahrining ko'ringan bino-devorlari va tomlari ustida katta hajmdagi harflar",
        href: '/services/katta-harflar',
        fullDescription: `Katta harflar reklama — bu binolar tomlarida yoki baland nuqtalarda joylashgan, katta o‘lchamli harf shaklidagi yorqin reklama vositasi. Ular asosan tunda yoritiladi va uzoq masofadan ham ko‘rinadi. Brendingiz nomini ko‘pchilik eslab qolishini istasangiz, bu juda samarali vosita hisoblanadi.`,
        images: {
          image: '/images/services/katta-harf.jpg',
          gallery: [
            '/images/services/katta-harf1.jpg',
            '/images/services/katta-harf2.jpg',
            '/images/services/katta-harf3.jpg',
          ],
        },
        locations: [],
        priceRange: '3,000,000 – 6,000,000',
        quantity: '',
        seo: {
          title: 'Katta Harflar – Jizzaxda yoritilgan reklama harflari | Reklama Xizmati',
          description:
            'Jizzaxdagi yirik reklama harflari – bino tomida joylashgan, ko‘rinuvchan va yorqin. Joylashuv va narxlar bilan tanishing.',
          keywords: ['katta harflar', 'yoritilgan harflar', 'Jizzax reklama', 'tashqi reklama harflar'],
        },
      },
      {
        id: 'city-box',
        title: 'City Box',
        description: "Jizzax shahrining asosiy ko'chalarida 50 dan ortiq city boxlar",
        href: '/services/city-box',
        fullDescription: `City Box — bu piyodalar yo‘laklarida joylashgan, shahar hayotining ajralmas qismi bo‘lgan reklama konstruksiyalari. Ular odatda ko‘z darajasida joylashgan bo‘lib, piyodalar tomonidan yaxshi ko‘rinadi. Tez-tez yangilanadigan afishalar, e’lonlar yoki mahsulot reklamalari uchun ayni muddao.`,
        images: {
          image: '/images/services/citybox.jpg',
          gallery: ['/images/services/citybox1.jpg', '/images/services/citybox2.jpg', '/images/services/citybox3.jpg'],
        },
        locations: [],
        priceRange: '500,000 – 1,000,000',
        quantity: '',
        seo: {
          title: 'City Box – Jizzaxdagi piyodalar reklama vositasi | Reklama Xizmati',
          description:
            'Jizzax shahridagi 50+ city boxlar orqali mahsulotingiz reklamasini joylashtiring. Narxlar va galereya mavjud.',
          keywords: ['city box', 'afisha joylari', 'piyoda reklama', 'Jizzax tashqi reklama'],
        },
      },
      {
        id: 'avtobus',
        title: 'Avtobus',
        description: "Jizzax shahar va shaharlararo avtobus yo'nalishlarida reklama o'rnaish",
        href: '/services/avtobus',
        fullDescription: `Avtobus reklamalari — bu shahar va shaharlararo qatnovda faol harakat qiluvchi transport vositalarida joylashtiriladigan reklama turi. Bu usul sizning brendingizni har kuni minglab insonlarga yetkazadi. Avtobusning harakatlanadigan xarakteri sababli reklamangiz turli joylarda ko‘rinadi va keng auditoriyani qamrab oladi.`,
        images: {
          image: '/images/services/avtobus.jpg',
          gallery: ['/images/services/avtobus1.jpg', '/images/services/avtobus2.jpg', '/images/services/avtobus3.jpg'],
        },
        locations: [],
        priceRange: '1,800,000 – 4,000,000',
        quantity: '',
        seo: {
          title: 'Avtobus reklamalari – Jizzax va viloyatlararo tashqi reklama | Reklama Xizmati',
          description:
            'Avtobuslar ustidagi reklama joylari bilan harakatdagi auditoriyani qamrab oling. Narxlar va misollar bilan tanishing.',
          keywords: ['avtobus reklama', 'harakatdagi reklama', 'transport reklama', 'Jizzax reklama'],
        },
      },
      {
        id: 'billboardlar',
        title: 'Billboardlar',
        description: 'Jizzax shahar va tuman markazlarida 100 dan ortiq billboardlar',
        href: '/services/billboardlar',
        fullDescription: `Billboardlar — bu eng ommabop va samarali tashqi reklama vositalaridan biri bo‘lib, ular katta o‘lchamdagi bannerlar orqali mahsulot yoki xizmatni ko‘pchilik e'tiboriga havola etadi. Bizning billboardlarimiz Jizzax shahar markazi va barcha tumanlarning asosiy ko‘chalarida joylashgan bo‘lib, kuniga minglab avtomobil va piyodalar harakatlanadigan hududlarda o‘rnatilgan. Billboard reklamalari nafaqat katta ko‘lamli ko‘rinuvchanlikni ta'minlaydi, balki brend imidjini oshiradi va hududiy mijozlar bilan kuchli aloqa o‘rnatishga yordam beradi. Har bir reklama joyi strategik tarzda tanlangan bo‘lib, ularning yoritilishi, xavfsizligi va texnik holati muntazam nazorat ostida.`,

        images: {
          image: '/images/services/billboard.jpg',
          gallery: [
            '/images/services/billboard1.jpg',
            '/images/services/billboard2.jpg',
            '/images/services/billboard3.jpg',
          ],
        },
        locations: [],
        priceRange: '1,200,000 – 3,000,000',
        quantity: '',
        seo: {
          title: 'Billboardlar – Jizzaxda tashqi reklama joylari | Reklama Xizmati',
          description:
            'Jizzax viloyatining strategik nuqtalarida 100+ billboard joylari. Mavjud joylar, narxlar va galereya bilan tanishing.',
          keywords: ['billboard', 'billboardlar Jizzax', 'tashqi reklama', 'banner joy', 'Jizzax reklama joylari'],
        },
      },
      {
        id: 'led-monitorlar',
        title: 'LED monitorlar',
        description: 'Jizzax shahar va tuman markazlarida 100 dan ortiq LED monitorlar',
        href: '/services/led-monitorlar',
        fullDescription: `LED monitorlar — bu raqamli texnologiyalar asosida ishlovchi yirik ekranlar bo‘lib, ularning yorqinligi va dinamizmi e’tiborni darhol tortadi. Videoroliklar, animatsiyalar yoki maxsus aktsiyalarni namoyish qilish uchun ideal. Ular ko‘p hollarda markaziy yo‘llar, chorrahalar yoki ko‘ngilochar markazlar yaqinida joylashgan.`,
        images: {
          image: '/images/services/led.jpg',
          gallery: ['/images/services/led1.jpg', '/images/services/led2.jpg', '/images/services/led3.jpg'],
        },
        locations: [],
        priceRange: '2,500,000 – 5,500,000',
        quantity: '',
        seo: {
          title: 'LED Monitorlar – Jizzaxda zamonaviy raqamli reklama | Reklama Xizmati',
          description:
            'LED monitorlar orqali e’tiborni tortadigan video va animatsiyalaringizni namoyish eting. Galereya va narxlar bilan tanishing.',
          keywords: ['LED reklama', 'raqamli reklama', 'ekran reklama', 'Jizzax LED'],
        },
      },
    ],
  },
  {
    id: 2,
    title: 'Tayyorlash & Ishlab chiqarish',
    icon: Brain,
    cards: [
      {
        id: 'bortma-harflar',
        title: "Bo'rtma harflar",
        description: "Yonadigan, bo'rtma harflar tayyorlash va o'rnatib berish",
        href: '/services/bortma-harflar',
        fullDescription: `Bo‘rtma harflar – bu korxonangiz yoki brendingizni yorqin va zamonaviy tarzda ifodalovchi reklama shaklidir. Ular asosan metall yoki plastmassadan tayyorlanib, ichki yoki tashqi yoritish tizimi bilan jihozlanadi. Ushbu harflar kechasi va kunduz ko‘rinuvchan bo‘lib, mijoz e'tiborini o‘ziga tortadi. Biz har bir harfni mijoz talabiga ko‘ra dizayn qilib, ishlab chiqaramiz va sifatli o‘rnatishni kafolatlaymiz.`,
        images: {
          image: '/images/services/bortma-harf.jpg',
          gallery: [
            '/images/services/bortma-harf1.jpg',
            '/images/services/bortma-harf2.jpg',
            '/images/services/bortma-harf3.jpg',
          ],
        },
        locations: [],
        priceRange: '700,000 – 2,500,000',
        quantity: '',
        seo: {
          title: "Bo'rtma harflar – Jizzaxda yorqin reklama yechimlari",
          description:
            'Jizzax shahrida sifatli, yoritilgan bo‘rtma harflar tayyorlash va o‘rnatish xizmati. Dizayn, ishlab chiqarish va montaj – barchasi bizdan.',
          keywords: ['bo‘rtma harflar', 'reklama harflar', 'yoritilgan harflar', 'Jizzax tashqi reklama'],
        },
      },
      {
        id: 'stella',
        title: 'Stella',
        description: "Yo'l chetida va ofislar yonida turadigan stellalarni tayyorlash va o'rnatish hizmati",
        href: '/services/stella',
        fullDescription: `Stella – bu korxona yoki tashkilot manzili va logotipini ko‘rsatish uchun foydalaniladigan mustaqil reklama inshootidir. Ular ko‘pincha yo‘l bo‘yida, ofis yoki zavod binolari oldida joylashadi. Stellalar korxonangiz imidjini mustahkamlab, tashrif buyuruvchilarga yo‘l ko‘rsatadi. Biz stellalarni chidamli materiallardan tayyorlab, dizayn, ishlab chiqarish va montaj xizmatlarini taklif qilamiz.`,
        images: {
          image: '/images/services/stella.jpg',
          gallery: ['/images/services/stella1.jpg', '/images/services/stella2.jpg', '/images/services/stella3.jpg'],
        },
        locations: [],
        priceRange: '2,000,000 – 5,000,000',
        quantity: '',
        seo: {
          title: 'Stellalar – Jizzaxda korxona tashqi ko‘rinishi uchun reklama yechimi',
          description:
            'Stellalar – korxona oldida o‘rnatiladigan zamonaviy reklama inshootlari. Jizzax bo‘ylab tayyorlash va o‘rnatish xizmati.',
          keywords: ['stella', 'tashqi reklama', 'Jizzax stellalar', 'reklama ustunlari'],
        },
        new: true,
      },
      {
        id: 'banner-chop-etish',
        title: 'Banner chop etish',
        description: "Bannerlar va orakallarni chop etish va uni o'rnatib berish xizmati",
        href: '/services/banner-chop-etish',
        fullDescription: `Banner chop etish xizmati orqali siz reklama aktsiyalaringizni keng auditoriyaga tez va samarali yetkazishingiz mumkin. Biz bannerlarni yuqori sifatli materiallarga, professional printerlar yordamida chop etamiz. Orakal, vinil yoki boshqa turdagi bannerlar – hammasini tayyorlab, kerak bo‘lsa joyiga o‘rnatamiz. Loyihangiz uchun maxsus dizayn ham taklif qilamiz.`,
        images: {
          image: '/images/services/banner.jpg',
          gallery: ['/images/services/banner1.jpg', '/images/services/banner2.jpg', '/images/services/banner3.jpg'],
        },
        locations: [],
        priceRange: '100,000 – 800,000',
        quantity: '',
        seo: {
          title: 'Banner chop etish – Jizzaxda sifatli reklama bosma mahsulotlari',
          description:
            'Banner va orakal materiallarini chop etish, dizayn qilish va joyiga yetkazib o‘rnatish – Jizzaxda tez va ishonchli xizmat.',
          keywords: ['banner chop', 'Jizzax banner', 'reklama banneri', 'orakal bosma'],
        },
      },
    ],
  },
];
