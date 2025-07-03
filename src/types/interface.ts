
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'student' | 'suplier' | 'buyer' | 'instructor' | 'admin';
}

export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'info' | 'success' | 'warning' | 'error';
}

// Anda juga bisa menambahkan tipe props di sini jika akan digunakan di banyak tempat
export interface HeaderProps {
  currentUser?: User;
  cartItems?: CartItem[];
  notifications?: Notification[];
  onSearch?: (query: string) => void;
  onCartClick?: () => void;
  onProfileClick?: () => void;
  onLogin?: () => void;
  onLogout?: () => void;
  onNotificationRead?: (notificationId: string) => void;
  className?: string;
}


// Interface untuk komponen yang digunakan di about page
export interface TeamMember {
    name: string;
    role: string;
    specialty: string;
    imageUrl: string;
    stats: string;
}

export interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface Stat {
    number: string;
    label: string;
    icon: React.ReactNode;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
    size?: 'default' | 'sm' | 'lg' | 'icon';
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface TabsProps {
    children: React.ReactNode;
}

export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isActive?: boolean;
}

export interface TabsContentProps {
    children: React.ReactNode;
    isActive: boolean;
}

export interface AnimatedSectionProps {
    children: React.ReactNode;
    id: string;
}