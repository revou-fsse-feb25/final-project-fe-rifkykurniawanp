export interface StatCardProps {
  title: string;
  icon: React.ComponentType<any>;
  value: string | number;
  description: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  revenue?: number;
}

export interface Course {
  id: number;
  title: string;
  instructor: string;
  students: number;
  progress?: number;
}

export interface Product {
  id: number;
  name: string;
  supplier: string;
  price: number;
  stock: number;
}

export interface SalesData {
  name: string;
  courses: number;
  products: number;
}

export interface ChartCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}

export interface CrudTableProps<T> {
  title: string;
  data: T[];
  columns: Array<{ Header: string; accessor: keyof T }>;
  onAdd?: () => void;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
}

export interface DashboardView {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  component: React.ComponentType;
}