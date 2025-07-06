"use client";
import Header from "@/components/Header";
import PhotoCard from "@/components/PhotoCard";
import { cn } from "@/lib/utils";
import { useFavorites } from "@/store/useFavorites";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <main className="px-4 py-6 max-w-6xl mx-auto">
      <Header />
      <h2 className={cn(
                  "text-4xl text-center font-bold leading-[5rem] tracking-[-0.02em]",
                  "bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888]",
                  "bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient"
                )}>Fotos Favoritas ❤️</h2>
      {favorites.length === 0 ? (
        <p className="text-gray-200 font-bold text-2xl flex justify-center items-center mt-6">Nenhuma imagem favoritada.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
          {favorites.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      )}
    </main>
  );
}
