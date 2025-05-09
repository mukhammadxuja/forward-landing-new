'use client';

import Contact from '@/components/home/contact';
import FAQ from '@/components/home/faq';
import { BuiltUsingTools } from '@/components/home/footer/built-using-tools';
import Stats from '@/components/home/stats';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

function About() {
  return (
    <div className="spacey-y-4 lg:space-y-6">
      <div className="bg-card">
        <div className="lg:mx-auto lg:max-w-7xl px-[32px] lg:px-4 relative spacey-y-4 lg:space-y-6 py-6 lg:py-10">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>About</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="space-y-[24px] mt-3 lg:mt-0">
            <h4 className="section-title">О компании</h4>
            <p className="paragraph max-w-[580px]">
              "Bizning Billboard kompaniyamiz" — tashqi reklama sohasida faoliyat yurituvchi va zamonaviy yechimlarni
              taklif etuvchi kompaniya. Bizning asosiy maqsadimiz — mijozlarimiz uchun samarali va kreativ reklama
              maydonlarini yaratish, ularning brendlarini yanada ko‘proq auditoriyaga yetkazishdir.
            </p>
            <Button className="hidden bg-primary text-white hover:bg-primary/80 rounded-full px-6 py-2">
              Batafsil <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Stats aboutPage={true} />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-[32px] lg:px-4 space-y-4 lg:space-y-0 py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-2 items-start border-b border-border">
        <h4 className="section-title">О компании</h4>
        <div className="space-y-4 lg:space-y-6">
          <p className="paragraph">
            Мы охватываем весь процесс создания недвижимости: от проектирования и строительства до ввода объектов в
            эксплуатацию и обслуживания. Путь наших клиентов максимально удобный и бесшовный на всех этапах жизни в
            проектах. Мы строим сегодня, чтобы завтра ваше будущее было комфортным, современным и надежным. Самолет —
            это:
          </p>
          <p className="paragraph">
            • Крупнейший девелопер по объему текущего строительства* • Самый большой земельный банк в России — 46,5 млн
            кв. м <br /> • 127+ проектов в 17 городах присутствия от Калининграда до Сахалина <br /> • 400+ построенных
            домов • 4600+ тысяч счастливых семей <br /> • 130 запланированных детских садов и школ <br /> • Более 35
            сервисов**, которые делают жизнь людей лучше
          </p>
          <p className="paragraph">
            Мы применяем инновационные решения и лучшие мировые практики при строительстве жилых комплексов и загородных
            проектов. Создаем районы с полной инфраструктурой: школами, детскими садами, поликлиниками, спортивными и
            развивающими центрами, кафе и магазинами. Запускаем передовые инвестиционные проекты, которые улучшают
            качество жизни.
          </p>
          <p className="paragraph">
            * По данным Единого ресурса застройщиков на 01.01.2025, размещенным на erzrf.ru, по объему текущего
            строительства и объему ввода жилья за 2024 год (регион Московская область). <br />
            ** Cервисы группы «Самолет» — это услуги по обмену и покупке квартир, их комплектации всем необходимым.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-[32px] lg:px-4 space-y-4 lg:space-y-0 py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-2 items-start border-b border-border">
        <h4 className="section-title">Наша миссия</h4>
        <div className="space-y-4 lg:space-y-6">
          <p className="paragraph">
            Создавать дома, инфраструктуру и сервисы, которые экономят людям время, чтобы они потратили его на то, что
            действительно важно.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-[32px] lg:px-4 space-y-4 lg:space-y-0 py-8 lg:py-10 ">
        <FAQ />
        <BuiltUsingTools />
        <Contact />
      </div>
    </div>
  );
}

export default About;
