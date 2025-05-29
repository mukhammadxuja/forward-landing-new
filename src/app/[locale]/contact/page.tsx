'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import dynamic from 'next/dynamic';
import Link from 'next/link';
const ContactMap = dynamic(() => import('./contact-map'), {
  ssr: false,
});

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Instagram, Mail, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

function Contact() {
  const t = useTranslations('ContactPage');
  const breadcrumbT = useTranslations('breadcrumb');
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: value,
    }));
  };

  interface FormData {
    name: string;
    email: string;
    phone: string;
    organization: string;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/sendMessage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      toast({
        title: 'Maʼlumotlar yuborildi!',
      });
      setFormData({ name: '', email: '', phone: '', organization: '' });
    } else {
      toast({
        title: 'Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-[32px] lg:px-4 spacey-y-4 lg:space-y-6 py-6 lg:py-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">{breadcrumbT('home')}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{breadcrumbT('contact')}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="space-y-6 lg:space-y-10 mt-4 lg:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10">
          <div className="order-2 md:order-1 w-full h-72 md:h-full rounded-xl overflow-hidden">
            <ContactMap />
          </div>
          <div className="order-1 md:order-2 w-full h-auto">
            <h4 className="block md:hidden mb-4 text-2xl font-semibold">Biz bilan bogʻlaning</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="block mb-2 text-sm font-medium text-primary">
                  {t('name')}
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-card py-4"
                  placeholder={t('namePlaceholder')}
                />
              </div>

              <div>
                <Label htmlFor="email" className="block mb-2 text-sm font-medium text-primary">
                  {t('email')}
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-card py-4"
                  placeholder={t('emailPlaceholder')}
                />
              </div>

              <div>
                <Label htmlFor="phone" className="block mb-2 text-sm font-medium text-primary">
                  {t('phone')}
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-card py-4"
                  placeholder={t('phonePlaceholder')}
                />
              </div>

              <div>
                <Label htmlFor="organization" className="block mb-2 text-sm font-medium text-primary">
                  {t('organization')}
                </Label>
                <Input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full bg-card py-4"
                  placeholder={t('organizationPlaceholder')}
                />
              </div>

              <Button type="submit" className="w-full">
                {t('submit')}
              </Button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="w-full border border-accent bg-background/50 backdrop-blur-lg rounded-xl shadow-sm p-6 lg:p-8 space-y-4 lg:space-y-6">
            <div className="space-y-2">
              <h6 className="paragraph-sm !text-foreground font-medium">{t('phoneTitle')}</h6>
              <p className="link-sm max-w-xs">{t('phoneDesc')}</p>
            </div>
            <a
              href="tel:+99891209333"
              className="text-[20px] lg:text-[24px] tracking-[-.015em] font-semibold text-foreground"
            >
              +99891 209 33 33
            </a>
          </div>
          <div className="w-full border border-accent bg-background/50 backdrop-blur-lg rounded-xl shadow-sm p-6 lg:p-8 space-y-4 lg:space-y-6">
            <div className="space-y-2">
              <h6 className="paragraph-sm !text-foreground font-medium">{t('emailTitle')}</h6>
              <p className="link-sm max-w-xs">{t('emailDesc')}</p>
            </div>
            <a
              href="mailto:forward@gmail.com"
              className="text-[20px] lg:text-[24px] tracking-[-.015em] font-semibold text-foreground"
            >
              forward@gmail.com
            </a>
          </div>
          <div className="w-full border border-accent bg-background/50 backdrop-blur-lg rounded-xl shadow-sm p-6 lg:p-8 space-y-4 lg:space-y-6">
            <div className="space-y-2">
              <h6 className="paragraph-sm !text-foreground font-medium">{t('socialTitle')}</h6>
              <p className="link-sm max-w-xs">{t('socialDesc')}</p>
            </div>
            <div className="flex gap-2 lg:gap-4">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <Send size={24} />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <Instagram size={24} />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
