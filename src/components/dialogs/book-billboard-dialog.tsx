'use client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTitle } from '@/components/ui/dialog';

import { BillboardType } from '../../../public/assets/data';

import { useState } from 'react';
import { Label } from '../ui/label';

function BookBillboardDialog({
  open,
  setOpen,
  selectedBillboard,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedBillboard: BillboardType | null;
}) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-full max-w-[500px]">
        <DialogTitle>Забронировать</DialogTitle>
        <div className="p-2">
          <div className="flex border-b border-gray-200 py-2 items-start gap-2">
            <strong className="text-gray-600">Адрес:</strong>
            <span className="text-gray-800">{selectedBillboard?.address}</span>
          </div>
          <div className="flex border-b border-gray-200 py-2 items-center gap-2">
            <strong className="text-gray-600">Тип:</strong>
            <span className="text-gray-800">{selectedBillboard?.type}</span>
          </div>
          <div className="flex border-b border-gray-200 py-2 items-center gap-2">
            <strong className="text-gray-600">Номер:</strong>
            <span className="text-gray-800">{selectedBillboard?.number}</span>
          </div>
          <div className="flex border-b border-gray-200 py-2 items-center gap-2">
            <strong className="text-gray-600">Размер:</strong>
            <span className="text-gray-800">{selectedBillboard?.size}</span>
          </div>
          <div className="flex border-b border-gray-200 py-2 items-center gap-2">
            <strong className="text-gray-600">Зона:</strong>
            <span className="text-gray-800">{selectedBillboard?.zone}</span>
          </div>
          <div className="flex border-b border-gray-200 py-2 items-center gap-2">
            <strong className="text-gray-600">Цена с НДС:</strong>
            <span className="text-gray-800 text-base font-medium">{selectedBillboard?.price}</span>
          </div>
          <div className="w-full mt-2">
            <Label htmlFor="date" className="text-sm">
              Дата конца
            </Label>
            {/* <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} /> */}
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <Button>Confirm</Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default BookBillboardDialog;
