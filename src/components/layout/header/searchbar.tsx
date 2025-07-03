// components/layout/header/SearchBar.tsx
"use client";

import { Search } from 'lucide-react';
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, className = '' }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  return (
    <form onSubmit={handleSearchSubmit} className={`w-full ${className}`}>
      <div className="relative group">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-orange-950 transition-colors duration-200" />
        <input
          type="text"
          placeholder="Search courses, instructors..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-950 focus:border-transparent outline-none transition-all duration-200 ease-in-out hover:border-orange-950 hover:shadow-sm"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
    </form>
  );
};