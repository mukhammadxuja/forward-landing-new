"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogActions,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAppContext } from "@/context/app-context";

function ContactDialog() {
  const { openContactDialog, setOpenContactDialog } = useAppContext();
  return (
    <Dialog open={openContactDialog} onOpenChange={setOpenContactDialog}>
      <DialogContent align="center" className="w-full max-w-[500px]">
        <DialogTitle>Обращение в компанию</DialogTitle>
        <form action="" className="space-y-4 mt-2">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label className="text-xs mb-2" htmlFor="name">
                Введите имя
              </Label>
              <Input className="bg-gray-50 !py-5 !px-3" placeholder="Иван" />
            </div>
            <div>
              <Label className="text-xs mb-2" htmlFor="name">
                Введите телефон
              </Label>
              <Input
                className="bg-gray-50 !py-5 !px-3"
                placeholder="+99899 557 10 10"
              />
            </div>
          </div>
          <div className="cols-span-2">
            <Label className="text-xs mb-2" htmlFor="name">
              Введите сообщение
            </Label>
            <Textarea
              className="bg-gray-50 !py-5 !px-3"
              placeholder="Ваше сообщение"
            />
          </div>
        </form>
        <DialogActions>
          <Button>Confirm</Button>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}

export default ContactDialog;
