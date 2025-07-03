import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";


export default function AdminDashboard() {

  return (
    <div className="flex flex-col gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Manajemen Pengguna</CardTitle>
          <CardDescription>Kelola semua pengguna dalam sistem dari satu tempat.</CardDescription>
        </CardHeader>
      </Card>
      <Tabs defaultValue="student">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="student">Student</TabsTrigger>
          <TabsTrigger value="instructor">Instructor</TabsTrigger>
          <TabsTrigger value="suplier">Supplier</TabsTrigger>
          <TabsTrigger value="buyer">Buyer</TabsTrigger>
        </TabsList>
        <TabsContent value="student">
          <Card>
            <CardHeader>
              <CardTitle>Daftar Student</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Tabel data student akan ditampilkan di sini.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}