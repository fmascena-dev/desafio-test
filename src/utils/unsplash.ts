const API_URL = "https://api.unsplash.com";
const ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY!;

export async function fetchPhotos(query?: string) {
  const url = query
    ? `${API_URL}/search/photos?query=${query}&per_page=12&client_id=${ACCESS_KEY}`
    : `${API_URL}/photos/random?count=12&client_id=${ACCESS_KEY}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Erro ao buscar imagens");

  const data = await res.json();
  return query ? data.results : data;
}
