"use client";
import { Photo } from "@/types/photo";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  photo: Photo;
  onClose: () => void;
}

export default function Modal({ photo, onClose }: ModalProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg max-w-xl w-full px-6 py-4 relative"
        >
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 w-10 h-10 rounded-full font-extrabold text-gray-950 hover:text-red-600 transition duration-300 text-4xl cursor-pointer bg-white"
            aria-label="Fechar modal"
          >
            ×
          </button>

          {!isImageLoaded && (
            <div className="w-full flex items-center justify-center mt-20">
              <p className="text-gray-600 animate-pulse text-2xl font-bold">
                Carregando imagem...
              </p>
            </div>
          )}

          <Image
            src={photo.urls.full}
            alt={photo.alt_description || "Foto"}
            width={800}
            height={600}
            className={`rounded-xl max-h-[60vh] w-full object-contain mx-auto mb-4 transition-opacity duration-500 ${
              isImageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setIsImageLoaded(true)}
          />

          <h2 className="text-xl font-semibold">{photo.user.name}</h2>

          {photo.description && (
            <p className="mt-2 text-gray-700">{photo.description}</p>
          )}

          <a
            href={photo.user.links.html}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 hover:underline font-bold"
          >
            Ver perfil na Unsplash →
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
