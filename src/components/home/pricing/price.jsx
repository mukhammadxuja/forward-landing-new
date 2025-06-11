import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useReactToPrint } from '@dcorp/react-to-print';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';

export default function Price() {
  const componentRef = useRef(null);
  const t = useTranslations('IndexPage.price');

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Forward narxlar ro'yhati",
    copyStyles: true,
    pageStyle: `
  @page {
    size: A4;
    margin: 10mm;
    color: #000;
  }

  @media print {
    body {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
      padding: 10mm 0;
      margin: 0;
    }

    .print-container {
      padding: 0 20mm;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    th, td {
      padding: 8px;
      text-align: left;
    }

    th {
      background-color: #f0f0f0;
      font-weight: bold;
      color: #000;
    }

    td {
      background-color: #fff;
      color: #000;
    }

    .text-center {
      text-align: center;
    }

    .text-sm {
      font-size: 12px;
    }

    .font-medium {
      font-weight: 500;
    }
  }
`,
  });

  const services = [
    { id: 1, name: t('name1'), unit: t('unit1'), price: '1 500 000' },
    { id: 2, name: t('name2'), unit: t('unit2'), price: '80 000' },
    { id: 3, name: t('name3'), unit: t('unit3'), price: '110 000' },
    { id: 4, name: t('name4'), unit: t('unit4'), price: '2 200 000' },
    { id: 5, name: t('name5'), unit: t('unit5'), price: '1 500 000' },
    { id: 6, name: t('name6'), unit: t('unit6'), price: '2 200 000' },
    { id: 7, name: t('name7'), unit: t('unit7'), price: '2 800 000' },
    { id: 8, name: t('name8'), unit: t('unit8'), price: '3 300 000' },
    { id: 9, name: t('name9'), unit: t('unit9'), price: '600 000' },
    { id: 10, name: t('name10'), unit: t('unit10'), price: '1 800 000' },
    { id: 11, name: t('name11'), unit: t('unit11'), price: '40 000' },
    { id: 12, name: t('name12'), unit: t('unit12'), price: '40 000' },
  ];

  return (
    <div className="mx-auto max-w-7xl py-5 lg:py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="section-title">Narxlar ro'yhati</h2>
        <Button variant="outline" onClick={handlePrint} asChild={false}>
          PDF saqlash
        </Button>
      </div>

      <div ref={componentRef}>
        <div className="rounded-md border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="w-12 py-2 lg:py-4">№</TableHead>
                <TableHead className="py-2 whitespace-nowrap lg:py-4">Xizmat turi</TableHead>
                <TableHead className="py-2 whitespace-nowrap lg:py-4">O‘lchov birligi</TableHead>
                <TableHead className="py-2 whitespace-nowrap lg:py-4">Narx (1 dona/kv)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="py-2 whitespace-nowrap lg:py-4 font-medium">{item.id}</TableCell>
                  <TableCell className="py-2 whitespace-nowrap lg:py-4">{item.name}</TableCell>
                  <TableCell className="py-2 whitespace-nowrap lg:py-4">{item.unit}</TableCell>
                  <TableCell className="py-2 whitespace-nowrap lg:py-4">{item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <p className="text-muted-foreground mt-4 text-center text-sm hidden">Narxlar reklama turiga qarab o‘zgaradi</p>
      </div>
    </div>
  );
}
