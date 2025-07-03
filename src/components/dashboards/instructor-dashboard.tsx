import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Award, BookOpen } from "lucide-react";

export default function StudentDashboard() {
  const lastCourse = { title: "Advanced TypeScript", progress: 65 };
  // const myCourses = await getMyCourses();
  // const myCertificates = await getMyCertificates();

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Selamat Datang Kembali, [Nama Student]!</CardTitle>
          <CardDescription>Lanjutkan perjalanan belajarmu.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <h3 className="font-semibold">Lanjutkan Course Terakhir:</h3>
          <div className="p-4 border rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">{lastCourse.title}</span>
              <span className="text-sm text-muted-foreground">{lastCourse.progress}%</span>
            </div>
            <Progress value={lastCourse.progress} />
            <Button size="sm" className="mt-4">Lanjutkan Belajar</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Course Dikuti</CardTitle>
          <BookOpen className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12</div>
          <p className="text-xs text-muted-foreground">Total course yang sedang berjalan</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Sertifikat Diperoleh</CardTitle>
          <Award className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">5</div>
          <p className="text-xs text-muted-foreground">Lihat semua sertifikat</p>
        </CardContent>
      </Card>

      {/* rencana mau di kasih tabel disini (course) */}
    </div>
  );
}