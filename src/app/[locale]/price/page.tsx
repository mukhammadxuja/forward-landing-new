'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Star } from 'lucide-react';
import Link from 'next/link';

const users = ['https://github.com/shadcn.png', 'https://github.com/shadcn.png', 'https://github.com/shadcn.png'];

function Favorites() {
  return (
    <div className="spacey-y-4 lg:space-y-6 px-4 lg:px-0">
      <div>
        <div className="mx-auto max-w-7xl px-[32px] lg:px-4 relative spacey-y-4 lg:space-y-6 py-4 lg:py-10">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Price</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="space-y-[24px] mt-3 lg:mt-0">
            <span className="text-sm text-white/50 py-1 px-2  flex items-center gap-2 w-fit rounded-full border border-white/50">
              Last updated: 26 Apr 2025
            </span>
            <h4 className="section-title">Level-up your design game, today</h4>
            <p className="text-foreground-secondary text-[16px] tracking-[-.01em] leading-[24px]">
              Get lifetime access to all the blocks and templates, plus any new content that will be added in the
              future. <br /> No recurring fees, no false scarcity, no fake discounts. Just simple, transparent pricing.
            </p>
            <div className="flex items-center gap-3 hover:bg-accent cursor-pointer text-white px-4 py-2 rounded-lg w-fit shadow">
              {/* Avatars */}
              <div className="flex -space-x-2">
                {users.map((src, i) => (
                  <img key={i} src={src} alt={`user-${i}`} className="w-8 h-8 rounded-full border-2 object-cover" />
                ))}
              </div>

              {/* Stars and Text */}
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-xs text-white/70">Used by 8.3k+ designers and developers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favorites;
