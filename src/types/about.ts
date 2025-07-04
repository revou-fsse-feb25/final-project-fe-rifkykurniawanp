import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "../components/ui/button";

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