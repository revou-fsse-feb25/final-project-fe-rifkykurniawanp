"use client";
import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend
} from 'recharts';
import {
  ShoppingCart,
  BookOpen,
  User,
  Award,
  Truck,
  Settings,
  Users,
  Package,
  GraduationCap,
  UserCheck,
  PlusCircle,
  Trash2,
  Edit,
  DollarSign,
  Activity,
  Star
} from "lucide-react";

// --- Mock Data ---
const mockUsers = {
  students: [
    { id: 1, name: 'Ahmad', email: 'ahmad@student.com' },
    { id: 2, name: 'Budi', email: 'budi@student.com' }
  ],
  instructors: [
    { id: 1, name: 'Chen', email: 'chen@instructor.com', revenue: 8400000 },
    { id: 2, name: 'Sarah', email: 'sarah@instructor.com', revenue: 6200000 }
  ],
  suppliers: [
    { id: 1, name: 'SupplyCo', email: 'contact@supply.co', revenue: 15600000 }
  ],
  buyers: [
    { id: 1, name: 'BeliCorp', email: 'buy@belicorp.com' }
  ]
};

const mockCourses = [
  { id: 1, title: 'Tea Brewing Excellence', instructor: 'Chen', students: 25 },
  { id: 2, title: 'Barista Professional', instructor: 'Sarah', students: 42 }
];

const mockProducts = [
  { id: 1, name: 'Premium Green Tea', supplier: 'SupplyCo', price: 150000, stock: 120 },
  { id: 2, name: 'Arabica Coffee Beans', supplier: 'SupplyCo', price: 200000, stock: 80 }
];

const salesData = [
  { name: 'Jan', courses: 4000, products: 2400 },
  { name: 'Feb', courses: 3000, products: 1398 },
  { name: 'Mar', courses: 2000, products: 9800 },
  { name: 'Apr', courses: 2780, products: 3908 },
  { name: 'May', courses: 1890, products: 4800 },
  { name: 'Jun', courses: 2390, products: 3800 },
  { name: 'Jul', courses: 3490, products: 4300 }
];

const recentSales = [
  { name: 'Ahmad Wijaya', email: 'ahmad@example.com', amount: '+Rp 299.000' },
  { name: 'Budi Santoso', email: 'budi.s@example.com', amount: '+Rp 150.000' },
  { name: 'Citra Lestari', email: 'citra@example.com', amount: '+Rp 200.000' }
];

// --- Reusable CRUD Table ---
function CrudTable({ title, data, columns }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{title}</CardTitle>
          <Button size="sm">
            <PlusCircle className="mr-2 h-4 w-4" /> Add New
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map(col => (
                <TableHead key={col.accessor}>{col.Header}</TableHead>
              ))}
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map(row => (
              <TableRow key={row.id}>
                {columns.map(col => (
                  <TableCell key={col.accessor}>{row[col.accessor]}</TableCell>
                ))}
                <TableCell className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

// --- Admin Dashboard ---
function AdminDashboard() {
  const userCols = [{ Header: 'Name', accessor: 'name' }, { Header: 'Email', accessor: 'email' }];
  const courseCols = [{ Header: 'Title', accessor: 'title' }, { Header: 'Instructor', accessor: 'instructor' }, { Header: 'Students', accessor: 'students' }];
  const productCols = [{ Header: 'Name', accessor: 'name' }, { Header: 'Supplier', accessor: 'supplier' }, { Header: 'Price', accessor: 'price' }];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: 'Total Revenue', icon: DollarSign, value: 'Rp 45.231.890', sub: '+20.1% from last month' },
          { title: 'Total Users', icon: Users, value: Object.values(mockUsers).flat().length, sub: '+180.1% from last month' },
          { title: 'Sales', icon: ShoppingCart, value: '+12,234', sub: '+19% from last month' },
          { title: 'Active Now', icon: Activity, value: '+573', sub: '+201 since last hour' }
        ].map((item, i) => (
          <Card key={i}>
            <CardHeader className="flex justify-between items-center pb-2">
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
              <item.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
              <p className="text-xs text-muted-foreground">{item.sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Sales Comparison</CardTitle>
            <CardDescription>Courses vs Products this year</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData} margin={{ bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tickLine={false} axisLine={false} />
                <YAxis tickFormatter={v => `Rp${v/1000}K`} tickLine={false} axisLine={false} />
                <Tooltip />
                <Legend />
                <Bar dataKey="courses" name="Courses" fill="hsl(var(--primary))" radius={[4,4,0,0]} />
                <Bar dataKey="products" name="Products" fill="hsl(var(--secondary))" radius={[4,4,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentSales.map(s => (
                <div key={s.email} className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground">{s.name.charAt(0)}</div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">{s.name}</p>
                    <p className="text-xs text-muted-foreground">{s.email}</p>
                  </div>
                  <div className="ml-auto font-medium">{s.amount}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CRUD Tabs */}
      <Tabs defaultValue="students">
        <TabsList className="grid grid-cols-6 w-full">{
          ['students','instructors','suppliers','buyers','courses','products'].map(val => (
            <TabsTrigger key={val} value={val} className="capitalize">{val}</TabsTrigger>
          ))
        }</TabsList>
        <TabsContent value="students"><CrudTable title="Manage Students" data={mockUsers.students} columns={userCols} /></TabsContent>
        <TabsContent value="instructors"><CrudTable title="Manage Instructors" data={mockUsers.instructors} columns={userCols} /></TabsContent>
        <TabsContent value="suppliers"><CrudTable title="Manage Suppliers" data={mockUsers.suppliers} columns={userCols} /></TabsContent>
        <TabsContent value="buyers"><CrudTable title="Manage Buyers" data={mockUsers.buyers} columns={userCols} /></TabsContent>
        <TabsContent value="courses"><CrudTable title="Manage Courses" data={mockCourses} columns={courseCols} /></TabsContent>
        <TabsContent value="products"><CrudTable title="Manage Products" data={mockProducts} columns={productCols} /></TabsContent>
      </Tabs>
    </div>
  );
}

// --- User Dashboard ---
function UserDashboard() {
  const profile = { name: 'Ahmad Wijaya', email: 'ahmad@example.com', joined: '12 Jan 2024' };
  const activeCourses = [
    { title: 'Tea Brewing Excellence', progress: 75, instructor: 'Master Chen' },
    { title: 'Barista Professional', progress: 45, instructor: 'Sarah Williams' }
  ];
  const orders = [
    { id: 'ORD-12389', name: 'Premium Green Tea', status: 'Shipped', date: '28 Jun 2024' },
    { id: 'ORD-12390', name: 'Arabica Coffee Beans', status: 'Processing', date: '01 Jul 2024' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Welcome back, {profile.name}!</h2>
        <p className="text-muted-foreground">Your learning and shopping hub.</p>
      </div>
      <Tabs defaultValue="courses" className="w-full">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="courses"><BookOpen className="w-4 h-4 mr-2" /> My Courses</TabsTrigger>
          <TabsTrigger value="products"><ShoppingCart className="w-4 h-4 mr-2" /> My Products</TabsTrigger>
          <TabsTrigger value="profile"><User className="w-4 h-4 mr-2" /> My Profile</TabsTrigger>
        </TabsList>
        <TabsContent value="courses" className="mt-4">
          <Card>
            <CardHeader><CardTitle>Continue Learning</CardTitle><CardDescription>Pick up where you left off</CardDescription></CardHeader>
            <CardContent className="space-y-4">
              {activeCourses.map((c,i)=>(
                <div key={i} className="p-4 border rounded-lg bg-muted/40">
                  <div className="flex justify-between items-start">
                    <div><h4 className="font-semibold">{c.title}</h4><p className="text-sm text-muted-foreground">by {c.instructor}</p></div>
                    <Button size="sm">Continue</Button>
                  </div>
                  <Progress value={c.progress} className="h-2 my-3" />
                  <span className="text-sm text-muted-foreground">{c.progress}% Complete</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="products" className="mt-4">
          <Card>
            <CardHeader><CardTitle>Recent Orders</CardTitle><CardDescription>Track your purchases</CardDescription></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow><TableHead>Order ID</TableHead><TableHead>Product</TableHead><TableHead>Date</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
                <TableBody>
                  {orders.map(o=>(
                    <TableRow key={o.id}>
                      <TableCell className="font-medium">{o.id}</TableCell>
                      <TableCell>{o.name}</TableCell>
                      <TableCell>{o.date}</TableCell>
                      <TableCell><Badge variant={o.status==='Shipped'?'default':'secondary'}>{o.status}</Badge></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="profile" className="mt-4">
          <Card>
            <CardHeader><CardTitle>Profile & Achievements</CardTitle><CardDescription>Manage info & track progress</CardDescription></CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4"><h3 className="font-semibold text-lg">Account Details</h3><div className="space-y-3 text-sm"><div className="flex justify-between"><strong>Name:</strong><span>{profile.name}</span></div><div className="flex justify-between"><strong>Email:</strong><span>{profile.email}</span></div><div className="flex justify-between"><strong>Joined:</strong><span>{profile.joined}</span></div></div><Button className="w-full mt-2">Edit Profile</Button></div>
              <div className="space-y-4"><h3 className="font-semibold text-lg">Achievements</h3><div className="space-y-3"><div className="flex items-center justify-between p-3 bg-muted/50 rounded-md"><div className="flex items-center gap-3"><GraduationCap className="text-primary" /><span>Courses Completed</span></div><span className="font-bold text-lg">5</span></div><div className="flex items-center justify-between p-3 bg-muted/50 rounded-md"><div className="flex items-center gap-3"><Award className="text-primary" /><span>Certificates Earned</span></div><span className="font-bold text-lg">3</span></div></div></div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// --- Instructor Dashboard ---
function InstructorDashboard() {
  const totalStudents = mockCourses.reduce((sum,c)=>sum+c.students,0);
  const statData = [
    { title: 'Total Revenue', icon: DollarSign, value: 'Rp 8.4M', sub: '+12.5% from last month' },
    { title: 'Total Students', icon: Users, value: totalStudents, sub: '+30 from last month' },
    { title: 'Active Courses', icon: BookOpen, value: mockCourses.length, sub: 'Currently published' },
    { title: 'Avg. Rating', icon: Star, value: '4.8/5.0', sub: 'Across all courses' }
  ];
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statData.map((d,i)=>(<Card key={i}><CardHeader className="flex justify-between items-center pb-2"><CardTitle className="text-sm font-medium">{d.title}</CardTitle><d.icon className="h-4 w-4 text-muted-foreground" /></CardHeader><CardContent><div className="text-2xl font-bold">{d.value}</div><p className="text-xs text-muted-foreground">{d.sub}</p></CardContent></Card>))}
      </div>
      <Card>
        <CardHeader><CardTitle>Student Enrollment</CardTitle><CardDescription>Monthly new sign-ups</CardDescription></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}><LineChart data={salesData}><CartesianGrid strokeDasharray="3 3"/><XAxis dataKey="name"/><YAxis/><Tooltip/><Line type="monotone" dataKey="courses" stroke="hsl(var(--primary))" activeDot={{r:8}}/></LineChart></ResponsiveContainer>
        </CardContent>
      </Card>
      <Tabs defaultValue="courses"><TabsList className="grid grid-cols-2 w-full"><TabsTrigger value="courses">Manage Courses</TabsTrigger><TabsTrigger value="students">Manage Students</TabsTrigger></TabsList><TabsContent value="courses"><CrudTable title="My Courses" data={mockCourses} columns={[{Header:'Title',accessor:'title'},{Header:'Students',accessor:'students'}]} /></TabsContent><TabsContent value="students"><CrudTable title="My Students" data={mockUsers.students} columns={[{Header:'Name',accessor:'name'},{Header:'Email',accessor:'email'}]} /></TabsContent></Tabs>
    </div>
  );
}

// --- Supplier Dashboard ---
function SupplierDashboard() {
  const totalStock = mockProducts.reduce((sum,p)=>sum+p.stock,0);
  const statData = [
    { title: 'Total Sales', icon: DollarSign, value: 'Rp 15.6M', sub: '+18.2% from last month' },
    { title: 'New Orders', icon: ShoppingCart, value: '+15', sub: '+5 from last week' },
    { title: 'Total Stock', icon: Package, value: `${totalStock} units`, sub: 'Across all products' },
    { title: 'Active Buyers', icon: Users, value: mockUsers.buyers.length, sub: 'Currently purchasing' }
  ];
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">{statData.map((d,i)=>(<Card key={i}><CardHeader className="flex justify-between items-center pb-2"><CardTitle className="text-sm font-medium">{d.title}</CardTitle><d.icon className="h-4 w-4 text-muted-foreground" /></CardHeader><CardContent><div className="text-2xl font-bold">{d.value}</div><p className="text-xs text-muted-foreground">{d.sub}</p></CardContent></Card>))}</div>
      <Card><CardHeader><CardTitle>Sales Performance</CardTitle><CardDescription>Last months revenue</CardDescription></CardHeader><CardContent><ResponsiveContainer width="100%" height={300}><LineChart data={salesData}><CartesianGrid strokeDasharray="3 3"/><XAxis dataKey="name"/><YAxis/><Tooltip/><Line type="monotone" dataKey="products" stroke="hsl(var(--primary))" activeDot={{r:8}}/></LineChart></ResponsiveContainer></CardContent></Card>
      <Tabs defaultValue="products"><TabsList className="grid grid-cols-2 w-full"><TabsTrigger value="products">Manage Products</TabsTrigger><TabsTrigger value="buyers">View Buyers</TabsTrigger></TabsList><TabsContent value="products"><CrudTable title="My Products" data={mockProducts.filter(p=>p.supplier==='SupplyCo')} columns={[{Header:'Name',accessor:'name'},{Header:'Price',accessor:'price'},{Header:'Stock',accessor:'stock'}]} /></TabsContent><TabsContent value="buyers"><Card><CardHeader><CardTitle>My Buyers</CardTitle></CardHeader><CardContent><Table><TableHeader><TableRow><TableHead>Name</TableHead><TableHead>Email</TableHead></TableRow></TableHeader><TableBody>{mockUsers.buyers.map(b=>(<TableRow key={b.id}><TableCell>{b.name}</TableCell><TableCell>{b.email}</TableCell></TableRow>))}</TableBody></Table></CardContent></Card></TabsContent></Tabs>
    </div>
  );
}

// --- Main Dashboard ---
export default function MainDashboard() {
  const [role, setRole] = useState('user');
  const views = [
    { id: 'admin', label: 'Admin', icon: Settings },
    { id: 'user', label: 'My Dashboard', icon: User },
    { id: 'instructor', label: 'Instructor', icon: GraduationCap },
    { id: 'supplier', label: 'Supplier', icon: Truck }
  ];
  const renderView = () => {
    switch(role) {
      case 'admin': return <AdminDashboard />;
      case 'user': return <UserDashboard />;
      case 'instructor': return <InstructorDashboard />;
      case 'supplier': return <SupplierDashboard />;
      default: return <UserDashboard />;
    }
  };
  return (
    <div className="min-h-screen bg-background text-foreground py-8">
      <div className="container mx-auto px-4">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2"><UserCheck className="w-5 h-5" /> Select View</CardTitle>
            <CardDescription>Choose a dashboard by role</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            {views.map(v=>(<Button key={v.id} variant={role===v.id?'secondary':'outline'} onClick={()=>setRole(v.id)} className="flex items-center gap-2 p-3"><v.icon className="w-5 h-5" />{v.label}</Button>))}
          </CardContent>
        </Card>
        <div className="bg-card p-6 rounded-lg shadow-sm">{renderView()}</div>
      </div>
    </div>
  );
}
