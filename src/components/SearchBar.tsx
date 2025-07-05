"use client";
import { useState, FormEvent } from "react";

interface Props {
  onSearch: (term: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const [term, setTerm] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Buscar por: nature, city, animals..."
        className="flex-1 px-4 py-2 rounded text-gray-50 border border-gray-300 shadow-sm 
        focus:outline-none focus:border-[#f09433] transition"
      />
      <button
        type="submit"
        className="px-4 py-2 rounded text-white font-semibold transition duration-300 cursor-pointer 
             bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] 
             bg-[length:200%_200%] animate-gradient"
      >
        Buscar
      </button>
    </form>
  );
}
