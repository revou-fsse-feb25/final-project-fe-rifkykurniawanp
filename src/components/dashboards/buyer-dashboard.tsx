import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Truck } from "lucide-react";

export default function BuyerDashboard() {
  // const orders = await getMyOrders();
  const latestOrder = { id: "ORD-12389", status: "Shipped" };

  return (
    <div className="flex flex-col gap-8">
      <Card>
        <CardHeader className="flex flex-row items-center gap-4 space-y-0">
          <Truck className="w-8 h-8"/>
          <div>
            <CardTitle>Status Pesanan Terbaru</CardTitle>
            <CardDescription>
              Pesanan <span className="font-semibold text-primary">{latestOrder.id}</span> Anda saat ini berstatus: <Badge>{latestOrder.status}</Badge>
            </CardDescription>
          </div>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Riwayat Pesanan</CardTitle>
          <CardDescription>Lihat semua progres pesanan Anda di sini.</CardDescription>
        </CardHeader>
        <CardContent>
            {/* <DataTable columns={orderColumns} data={orders} /> */}
            <p>Tabel riwayat pesanan akan ditampilkan di sini.</p>
        </CardContent>
      </Card>
    </div>
  )
}