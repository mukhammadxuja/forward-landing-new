'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain } from 'lucide-react';
import Link from 'next/link';

function About() {
  return (
    <div className="spacey-y-4 lg:space-y-6 px-4 lg:px-0">
      <div className="bg-accent">
        <div className="mx-auto max-w-7xl px-[32px] lg:px-4 relative spacey-y-4 lg:space-y-6 bg-accent py-4 lg:py-10">
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
            <p className="text-foreground-secondary text-[16px] tracking-[-.01em] leading-[24px] max-w-[380px]">
              "Bizning Billboard kompaniyamiz" — tashqi reklama sohasida faoliyat yurituvchi va zamonaviy yechimlarni
              taklif etuvchi kompaniya. Bizning asosiy maqsadimiz — mijozlarimiz uchun samarali va kreativ reklama
              maydonlarini yaratish, ularning brendlarini yanada ko‘proq auditoriyaga yetkazishdir.
            </p>
            <Button className="bg-emerald-600 text-white hover:bg-emerald-600/80 rounded-full px-6 py-2">
              Batafsil <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              <div className="flex items-start gap-4 p-4 lg:p-6 bg-background rounded-xl shadow-sm">
                <Brain className="text-emerald-600/80 text-3xl lg:text-4xl" />
                <div>
                  <p className="font-semibold text-sm lg:text-base">17+ shaharda</p>
                  <p className="text-gray-500 text-xs lg:text-sm">butun O‘zbekiston bo‘ylab faoliyat</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 lg:p-6 bg-background rounded-xl shadow-sm">
                <Brain className="text-emerald-600/80 text-3xl lg:text-4xl" />
                <div>
                  <p className="font-semibold text-sm lg:text-base">120+ loyihalar</p>
                  <p className="text-gray-500 text-xs lg:text-sm">turli sohalar uchun joylashtirilgan</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 lg:p-6 bg-background rounded-xl shadow-sm">
                <Brain className="text-emerald-600/80 text-3xl lg:text-4xl" />
                <div>
                  <p className="font-semibold text-sm lg:text-base">600 000+ tomoshabin</p>
                  <p className="text-gray-500 text-xs lg:text-sm">kunlik ko‘rish qamrovi</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 lg:p-6 bg-background rounded-xl shadow-sm">
                <Brain className="text-emerald-600/80 text-3xl lg:text-4xl" />
                <div>
                  <p className="font-semibold text-sm lg:text-base">80% mijozlar</p>
                  <p className="text-gray-500 text-xs lg:text-sm">xizmatdan to‘liq mamnun</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-[32px] lg:px-4 space-y-4 lg:space-y-0 py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-2 items-start border-b border-gray-300">
        <h4 className="text-[32px] tracking-[-.015em] leading-[36px] font-semibold">О компании</h4>
        <div className="space-y-4 lg:space-y-6">
          <p className="text-foreground-secondary text-[16px] tracking-[-.01em] leading-[24px]">
            Мы охватываем весь процесс создания недвижимости: от проектирования и строительства до ввода объектов в
            эксплуатацию и обслуживания. Путь наших клиентов максимально удобный и бесшовный на всех этапах жизни в
            проектах. Мы строим сегодня, чтобы завтра ваше будущее было комфортным, современным и надежным. Самолет —
            это:
          </p>
          <p className="text-foreground-secondary text-[16px] tracking-[-.01em] leading-[24px]">
            • Крупнейший девелопер по объему текущего строительства* • Самый большой земельный банк в России — 46,5 млн
            кв. м <br /> • 127+ проектов в 17 городах присутствия от Калининграда до Сахалина <br /> • 400+ построенных
            домов • 4600+ тысяч счастливых семей <br /> • 130 запланированных детских садов и школ <br /> • Более 35
            сервисов**, которые делают жизнь людей лучше
          </p>
          <p className="text-foreground-secondary text-[16px] tracking-[-.01em] leading-[24px]">
            Мы применяем инновационные решения и лучшие мировые практики при строительстве жилых комплексов и загородных
            проектов. Создаем районы с полной инфраструктурой: школами, детскими садами, поликлиниками, спортивными и
            развивающими центрами, кафе и магазинами. Запускаем передовые инвестиционные проекты, которые улучшают
            качество жизни.
          </p>
          <p className="text-foreground-secondary text-[16px] tracking-[-.01em] leading-[24px]">
            * По данным Единого ресурса застройщиков на 01.01.2025, размещенным на erzrf.ru, по объему текущего
            строительства и объему ввода жилья за 2024 год (регион Московская область). <br />
            ** Cервисы группы «Самолет» — это услуги по обмену и покупке квартир, их комплектации всем необходимым.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-[32px] lg:px-4 space-y-4 lg:space-y-0 py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-2 items-start border-b border-gray-300">
        <h4 className="text-[32px] tracking-[-.015em] leading-[36px] font-semibold">Наша миссия</h4>
        <div className="space-y-4 lg:space-y-6">
          <p className="text-foreground-secondary text-[16px] tracking-[-.01em] leading-[24px]">
            Создавать дома, инфраструктуру и сервисы, которые экономят людям время, чтобы они потратили его на то, что
            действительно важно.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
