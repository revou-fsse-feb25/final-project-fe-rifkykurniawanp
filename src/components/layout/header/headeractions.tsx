// components/layout/header/HeaderActions.tsx
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { NotificationPopover } from '../header/NotificationPopUp';
import { ProfileDropdown } from '@/components/layout/header/profiledropdown';
import type { HeaderProps } from '@/types/interface';

type HeaderActionsProps = Pick<
  HeaderProps,
  'currentUser' | 'cartItems' | 'notifications' | 'onLogin' | 'onLogout' | 'onProfileClick' | 'onCartClick' | 'onNotificationRead'
>;

export const HeaderActions: React.FC<HeaderActionsProps> = ({
  currentUser,
  cartItems = [],
  notifications = [],
  onLogin,
  onLogout,
  onProfileClick,
  onCartClick,
  onNotificationRead
}) => {
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="hidden md:flex items-center space-x-4">
      <NotificationPopover notifications={notifications} onNotificationRead={onNotificationRead} />
      
      <button onClick={onCartClick} className="relative p-2 text-gray-700 hover:text-orange-950 hover:bg-gray-50 rounded-lg transition-all">
        <ShoppingCart className="h-6 w-6" />
        {cartItemCount > 0 && (
          <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
            {cartItemCount}
          </Badge>
        )}
      </button>

      {currentUser ? (
        <ProfileDropdown user={currentUser} onLogout={onLogout} onProfileClick={onProfileClick} />
      ) : (
        <Button onClick={onLogin}>Sign In</Button>
      )}
    </div>
  );
};