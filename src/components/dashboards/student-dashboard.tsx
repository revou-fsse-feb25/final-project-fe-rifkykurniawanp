import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Coffee, Leaf, Timer, Star, ShoppingCart, User } from "lucide-react";

export default function StudentDashboard() {
  const activeCourses = [
    { 
      title: "Tea Brewing Excellence", 
      progress: 75, 
      category: "Tea",
      nextLesson: "Oolong Brewing Techniques",
      instructor: "Master Chen",
      totalLessons: 12,
      completedLessons: 9
    },
    { 
      title: "Barista Professional", 
      progress: 45, 
      category: "Coffee",
      nextLesson: "Espresso Extraction",
      instructor: "Sarah Williams",
      totalLessons: 16,
      completedLessons: 7
    },
    { 
      title: "Herbal Medicine Basics", 
      progress: 30, 
      category: "Herbal",
      nextLesson: "Turmeric Benefits",
      instructor: "Dr. Ahmad",
      totalLessons: 8,
      completedLessons: 2
    }
  ];

  const recentProgress = [
    { course: "Tea Brewing Excellence", lesson: "Green Tea Steeping", completed: true },
    { course: "Barista Professional", lesson: "Milk Steaming Basics", completed: true },
    { course: "Herbal Medicine Basics", lesson: "Ginger Properties", completed: false }
  ];

  const myCertificates = [
    { name: "Tea Sommelier Level 1", date: "2024-06-15", category: "Tea" },
    { name: "Coffee Cupping Basics", date: "2024-05-20", category: "Coffee" },
    { name: "Herbal Tea Blending", date: "2024-04-10", category: "Herbal" }
  ];

  const membershipBenefits = {
    type: "Premium Member",
    discount: "15%",
    freeShipping: true,
    exclusiveAccess: true
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-green-50 p-6">
      {/* Header Navigation */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-4">
          <Button variant="default" className="bg-amber-600 hover:bg-amber-700">
            <BookOpen className="w-4 h-4 mr-2" />
            My Course
          </Button>
          <Button variant="outline" className="border-amber-200">
            <ShoppingCart className="w-4 h-4 mr-2" />
            My Product
          </Button>
          <Button variant="outline" className="border-amber-200">
            <User className="w-4 h-4 mr-2" />
            My Profile
          </Button>
        </div>
        <div className="flex items-center space-x-4">
          <Badge variant="secondary" className="bg-amber-100 text-amber-800">
            Progress Penyelesaian Terbaru
          </Badge>
          <Badge variant="outline" className="border-green-200 text-green-700">
            {membershipBenefits.type}
          </Badge>
        </div>
      </div>

      {/* Navigation Bar */}
      <Card className="mb-6 bg-white/80 backdrop-blur-sm border-amber-200">
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <Coffee className="w-4 h-4" />
              Sedang berjalan
            </span>
            <span>|</span>
            <span>Selesai</span>
            <span>|</span>
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              Sertifikat
            </span>
            <span>|</span>
            <span>Alat & Bahan Penunjang</span>
            <span>|</span>
            <span>Diskusi</span>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Area */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Course Progress Section */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-white/90 backdrop-blur-sm border-amber-200">
            <CardHeader>
              <CardTitle className="text-xl text-amber-900">Detail Ongoing Course + Task</CardTitle>
              <CardDescription>
                Detail selesai / list sertifikat / alat & bahan penunjang serta link untuk akses
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {activeCourses.map((course, index) => (
                <div key={index} className="p-4 border border-amber-100 rounded-lg bg-gradient-to-r from-amber-50 to-green-50">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-amber-900">{course.title}</h4>
                      <p className="text-sm text-gray-600">Instructor: {course.instructor}</p>
                      <p className="text-sm text-gray-500">
                        {course.completedLessons}/{course.totalLessons} lessons completed
                      </p>
                    </div>
                    <Badge variant="outline" className={`
                      ${course.category === 'Tea' ? 'border-green-200 text-green-700' : 
                        course.category === 'Coffee' ? 'border-amber-200 text-amber-700' : 
                        'border-purple-200 text-purple-700'}
                    `}>
                      {course.category}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-gray-600">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                    <p className="text-sm text-gray-600 mt-2">
                      Next: {course.nextLesson}
                    </p>
                    <Button size="sm" className="mt-3 bg-amber-600 hover:bg-amber-700">
                      Lanjutkan Belajar
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Progress */}
          <Card className="bg-white/90 backdrop-blur-sm border-amber-200">
            <CardHeader>
              <CardTitle className="text-lg text-amber-900">Progress Terbaru</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentProgress.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{item.course}</p>
                      <p className="text-sm text-gray-600">{item.lesson}</p>
                    </div>
                    <Badge variant={item.completed ? "default" : "secondary"} className={
                      item.completed ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"
                    }>
                      {item.completed ? "Selesai" : "Dalam Progress"}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Stats Cards */}
          <Card className="bg-gradient-to-br from-amber-100 to-amber-50 border-amber-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-amber-900">Course Diikuti</CardTitle>
              <BookOpen className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-900">8</div>
              <p className="text-xs text-amber-700">Total course aktif</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-100 to-green-50 border-green-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-900">Sertifikat Diperoleh</CardTitle>
              <Award className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-900">5</div>
              <p className="text-xs text-green-700">Lihat semua sertifikat</p>
            </CardContent>
          </Card>

          {/* Certificates */}
          <Card className="bg-white/90 backdrop-blur-sm border-amber-200">
            <CardHeader>
              <CardTitle className="text-lg text-amber-900">Sertifikat Terbaru</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {myCertificates.slice(0, 3).map((cert, index) => (
                  <div key={index} className="p-3 bg-gradient-to-r from-amber-50 to-green-50 rounded-lg border border-amber-100">
                    <div className="flex items-center gap-2 mb-1">
                      <Award className="w-4 h-4 text-amber-600" />
                      <span className="text-sm font-medium text-amber-900">{cert.name}</span>
                    </div>
                    <p className="text-xs text-gray-600">{cert.date}</p>
                    <Badge variant="outline" className="mt-2 text-xs border-amber-200 text-amber-700">
                      {cert.category}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Membership Benefits */}
          <Card className="bg-gradient-to-br from-purple-100 to-purple-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-lg text-purple-900">Member Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-purple-600" />
                  <span className="text-sm">Diskon {membershipBenefits.discount} semua produk</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4 text-purple-600" />
                  <span className="text-sm">Gratis ongkir seluruh Indonesia</span>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-purple-600" />
                  <span className="text-sm">Akses eksklusif kursus premium</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Promotion Section */}
      <Card className="mt-6 bg-gradient-to-r from-amber-500 to-green-500 text-white border-0">
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">🎉 Promo Spesial Tea & Coffee Bundle!</h3>
            <p className="mb-4">Dapatkan paket lengkap Tea Starter Kit + Coffee Brewing Course hanya Rp 299.000</p>
            <Button variant="secondary" className="bg-white text-amber-600 hover:bg-gray-100">
              Lihat Promo Sekarang
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}