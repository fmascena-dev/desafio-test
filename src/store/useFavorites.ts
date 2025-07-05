import { create } from "zustand";
import { Photo } from "@/types/photo";
import { useEffect } from "react";

interface State {
  favorites: Photo[];
  toggleFavorite: (photo: Photo) => void;
  loadFavorites: () => void;
}

export const useFavorites = create<State>((set, get) => ({
  favorites: [],
  loadFavorites: () => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("favorites");
      if (stored) {
        set({ favorites: JSON.parse(stored) });
      }
    }
  },
  toggleFavorite: (photo: Photo) => {
    const { favorites } = get();
    const exists = favorites.some((p) => p.id === photo.id);
    const newFavorites = exists
      ? favorites.filter((p) => p.id !== photo.id)
      : [...favorites, photo];
    set({ favorites: newFavorites });
    if (typeof window !== "undefined") {
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }
  },
}));

// Hook para carregar favoritos no client
export function useFavoritesInit() {
  const { loadFavorites } = useFavorites();
  useEffect(() => {
    loadFavorites();
  }, []);
}
