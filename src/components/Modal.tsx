"use client";
import { Photo } from "@/types/photo";
import Image from "next/image";

interface ModalProps {
  photo: Photo;
  onClose: () => void;
}

export default function Modal({ photo, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg max-w-xl w-full px-6 py-4 relative">
        <button
          onClick={onClose}
          className="absolute -top-1.5 right-1 font-extrabold text-gray-950 hover:text-red-600 transition duration-300 text-4xl cursor-pointer"
          aria-label="Fechar modal"
        >
          ×
        </button>

        <Image
          src={photo.urls.full}
          alt={photo.alt_description || "Foto"}
          width={800}
          height={600}
          className="rounded-xl max-h-[60vh] w-full object-contain mx-auto mb-4"
        />

        <h2 className="text-xl font-semibold">{photo.user.name}</h2>
        {photo.description && (
          <p className="mt-2 text-gray-700">{photo.description}</p>
        )}
        <a
          href={photo.user.links.html}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-600 hover:underline"
        >
          Ver perfil na Unsplash →
        </a>
      </div>
    </div>
  );
}
