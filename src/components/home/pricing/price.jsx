import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const services = [
  { id: 1, name: 'Bilboard', unit: '1 dona', price: '1 500 000' },
  { id: 2, name: 'Brandmauer', unit: '1 kv', price: '80 000' },
  { id: 3, name: 'Tom usti konstruktsiyasi', unit: '1 kv', price: '110 000' },
  { id: 4, name: 'Prizmatron', unit: '1 dona', price: '2 200 000' },
  { id: 5, name: 'Led ekran', unit: '1 dona / 5 sekund', price: '1 500 000' },
  { id: 6, name: 'Led ekran', unit: '1 dona / 10 sekund', price: '2 200 000' },
  { id: 7, name: 'Led ekran', unit: '1 dona / 15 sekund', price: '2 800 000' },
  { id: 8, name: 'Led ekran', unit: '1 dona / 20 sekund', price: '3 300 000' },
  { id: 9, name: 'Avtobus', unit: '1 dona', price: '600 000' },
  { id: 10, name: 'Bekat', unit: '1 dona', price: '1 800 000' },
  { id: 11, name: 'Banner chop etish', unit: '1 kv', price: '40 000' },
  { id: 12, name: 'Montaj / demontaj', unit: '1 kv', price: '40 000' },
];

export default function Price() {
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Narxlar_Ro'yxati",
    pageStyle: `
      @page {
        size: A4;
        margin: 20mm;
      }

      @media print {
        body {
          -webkit-print-color-adjust: exact;
        }

        table {
          border-collapse: collapse;
          width: 100%;
        }

        th, td {
          border: 1px solid #ccc;
          padding: 8px;
        }
      }
    `,
  });
  return (
    <div className="mx-auto max-w-7xl py-10 lg:py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="section-title">Narxlar ro'yhati</h2>
        <Button variant="outline" onClick={handlePrint}>
          PDF saqlash
        </Button>
      </div>

      <div ref={componentRef}>
        <div className="rounded-md border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="w-12 py-2 lg:py-4">№</TableHead>
                <TableHead className="py-2 lg:py-4">Xizmat turi</TableHead>
                <TableHead className="py-2 lg:py-4">O‘lchov birligi</TableHead>
                <TableHead className="py-2 lg:py-4">Narx (1 dona/kv)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="py-2 lg:py-4 font-medium">{item.id}</TableCell>
                  <TableCell className="py-2 lg:py-4">{item.name}</TableCell>
                  <TableCell className="py-2 lg:py-4">{item.unit}</TableCell>
                  <TableCell className="py-2 lg:py-4">{item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <p className="text-muted-foreground mt-4 text-center text-sm">Narxlar reklama turiga qarab o‘zgaradi</p>
      </div>
    </div>
  );
}
