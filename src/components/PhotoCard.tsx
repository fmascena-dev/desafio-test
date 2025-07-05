"use client";
import Image from "next/image";
import { Photo } from "@/types/photo";
import { useFavorites } from "@/store/useFavorites";
import { useState } from "react";
import Modal from "./Modal";

export default function PhotoCard({ photo }: { photo: Photo }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorited = favorites.some((f) => f.id === photo.id);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative group cursor-pointer w-full max-w-sm mx-auto ">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded shadow-sm border transition duration-300 md:hover:border-[#f09433]">
          <Image
            src={photo.urls.regular}
            alt={photo.alt_description || "Foto"}
            fill
            className="object-cover"
            onClick={() => setIsOpen(true)}
            loading="lazy"
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2 rounded-b">
          {photo.user.name}
        </div>

        <button
          onClick={() => toggleFavorite(photo)}
          className="absolute top-2 right-2 text-white text-xl hover:scale-y-125 hover:scale-x-125 transition duration-300"
          aria-label="Favoritar imagem"
        >
          {isFavorited ? "❤️" : "🤍"}
        </button>
      </div>

      {isOpen && <Modal photo={photo} onClose={() => setIsOpen(false)} />}
    </>
  );
}
