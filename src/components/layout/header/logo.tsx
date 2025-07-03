// components/layout/header/Logo.tsx
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export const Logo = () => (
  <Link 
    href="/" 
    className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200 ease-in-out"
  >
    <div className="relative overflow-hidden rounded-full">
      <Image
        src="/logo.png"
        alt="Logo"
        width={40}
        height={40}
        className="rounded-full object-contain transition-transform duration-300 hover:scale-110"
      />
    </div>
    <span className="hidden sm:inline text-lg font-semibold text-gray-800 transition-colors duration-200">
      RUIND EDU-COMMERCE
    </span>
  </Link>
);