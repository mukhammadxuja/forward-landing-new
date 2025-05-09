'use client';

import BookBillboardDialog from '@/components/dialogs/book-billboard-dialog';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAppContext } from '@/context/app-context';
import { Printer, Trash } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { BillboardType } from '../../../../public/assets/data';

const Map = dynamic(() => import('@/components/sections/map'), { ssr: false });

function Favorites() {
  const { favorites, removeFromFavorites, removeAllFavorites } = useAppContext();
  const [openBillboardBook, setOpenBillboardBook] = useState(false);
  const [selectedBillboard, setSelectedBillboard] = useState<BillboardType | null>(null);

  return (
    <div className="mx-auto max-w-7xl px-[32px] lg:px-4 spacey-y-4 lg:space-y-6 py-6 lg:py-10">
      <div className="spacey-y-4 lg:space-y-6">
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Favorites</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Map billboardData={favorites} mapPage={true} />
        <FavoritesTable
          favorites={favorites}
          setOpenBillboardBook={setOpenBillboardBook}
          setSelectedBillboard={setSelectedBillboard}
          removeFromFavorites={removeFromFavorites}
          removeAllFavorites={removeAllFavorites}
        />

        <BookBillboardDialog
          open={openBillboardBook}
          setOpen={setOpenBillboardBook}
          selectedBillboard={selectedBillboard}
        />
      </div>
    </div>
  );
}

export default Favorites;

function FavoritesTable({
  favorites,
  setOpenBillboardBook,
  setSelectedBillboard,
  removeFromFavorites,
  removeAllFavorites,
}: {
  favorites: BillboardType[];
  setOpenBillboardBook: (open: boolean) => void;
  setSelectedBillboard: (billboard: BillboardType | null) => void;
  removeFromFavorites: (id: number) => void;
  removeAllFavorites: () => void;
}) {
  const tableRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    if (tableRef.current) {
      const printContents = tableRef.current.innerHTML;
      const originalContents = document.body.innerHTML;

      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload();
    }
  };
  return (
    <div className="">
      <div className="flex items-center justify-between mb-2">
        <h2 className="invisible lg:visible text-2xl font-semibold text-center mb-4">Избранные конструкции</h2>
        <div className="flex items-center gap-2">
          <Button className="gap-2" onClick={handlePrint} size="sm" variant="outline">
            <Printer size={20} />
            Печать
          </Button>
          <Button className="gap-2" onClick={removeAllFavorites} size="sm" variant="destructive">
            <Trash size={20} />
            Очистить все
          </Button>
        </div>
      </div>
      <div ref={tableRef} className="bg-background overflow-hidden rounded-md border border-border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-accent border-b border-border">
              <TableHead className="h-9 py-2 whitespace-nowrap text-foreground">№</TableHead>
              <TableHead className="h-9 py-2 whitespace-nowrap text-foreground">Номер</TableHead>
              <TableHead className="h-9 py-2 whitespace-nowrap text-foreground">Адрес</TableHead>
              <TableHead className="h-9 py-2 whitespace-nowrap text-foreground">Тип</TableHead>
              <TableHead className="h-9 py-2 whitespace-nowrap text-foreground">Размер</TableHead>
              <TableHead className="h-9 py-2 whitespace-nowrap text-foreground">Зона</TableHead>
              <TableHead className="h-9 py-2 whitespace-nowrap text-foreground">Стороны</TableHead>
              <TableHead className="h-9 py-2 whitespace-nowrap text-foreground">Цена аренды с НДС</TableHead>
              <TableHead className="h-9 py-2 whitespace-nowrap text-foreground">Занято до</TableHead>
              <TableHead className="h-9 py-2 whitespace-nowrap text-foreground">Бронировать</TableHead>
              <TableHead className="h-9 py-2 whitespace-nowrap text-foreground">Избранное</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {favorites.length > 0 ? (
              favorites.map((item, index) => (
                <TableRow key={item.id} className="border-b border-border">
                  <TableCell className="py-2 font-medium">{index + 1}</TableCell>
                  <TableCell className="py-2">{item.number}</TableCell>
                  <TableCell className="py-2">{item.address}</TableCell>
                  <TableCell className="py-2">{item.type}</TableCell>
                  <TableCell className="py-2">{item.size}</TableCell>
                  <TableCell className="py-2">{item.zone}</TableCell>
                  <TableCell className="py-2">N/A</TableCell>
                  <TableCell className="py-2">{item.price}</TableCell>
                  <TableCell className="py-2">{item.availableUntil || 'Не указано'}</TableCell>
                  <TableCell
                    onClick={() => {
                      setOpenBillboardBook(true);
                      setSelectedBillboard(item);
                    }}
                    className="py-2"
                  >
                    <Button size="sm">Забронировать</Button>
                  </TableCell>
                  <TableCell className="py-2">
                    <Button onClick={() => removeFromFavorites(item.id)} size="sm" variant="ghost">
                      <Trash size={20} className="text-base text-red-500" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={11} className="text-center py-10 text-foreground">
                  Ma'lumotlar mavjud emas
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
