import { User, Course, Product, SalesData } from '@/types/dashboard';

export class DataService {
  static getUsers() {
    return {
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
  }

  static getCourses(): Course[] {
    return [
      { id: 1, title: 'Tea Brewing Excellence', instructor: 'Chen', students: 25 },
      { id: 2, title: 'Barista Professional', instructor: 'Sarah', students: 42 }
    ];
  }

  static getProducts(): Product[] {
    return [
      { id: 1, name: 'Premium Green Tea', supplier: 'SupplyCo', price: 150000, stock: 120 },
      { id: 2, name: 'Arabica Coffee Beans', supplier: 'SupplyCo', price: 200000, stock: 80 }
    ];
  }

  static getSalesData(): SalesData[] {
    return [
      { name: 'Jan', courses: 4000, products: 2400 },
      { name: 'Feb', courses: 3000, products: 1398 },
      { name: 'Mar', courses: 2000, products: 9800 },
      { name: 'Apr', courses: 2780, products: 3908 },
      { name: 'May', courses: 1890, products: 4800 },
      { name: 'Jun', courses: 2390, products: 3800 },
      { name: 'Jul', courses: 3490, products: 4300 }
    ];
  }

  static getRecentSales() {
    return [
      { name: 'Ahmad Wijaya', email: 'ahmad@example.com', amount: '+Rp 299.000' },
      { name: 'Budi Santoso', email: 'budi.s@example.com', amount: '+Rp 150.000' },
      { name: 'Citra Lestari', email: 'citra@example.com', amount: '+Rp 200.000' }
    ];
  }
}