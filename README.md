# 📸 Mini Instagram

Rede Social de Fotos desenvolvida em Next.js 15 + Tailwind CSS 4 + TypeScript, consumindo a API do [Unsplash](https://unsplash.com/).

## 🚀 Funcionalidades

- Feed com 12 fotos aleatórias
- Busca por categoria (nature, city, animals…)
- Modal com detalhes da imagem
- Favoritar e listar imagens favoritas (localStorage)
- UI responsiva com design limpo

## 🧪 Tecnologias

- Next.js 15.3.5
- React 19
- TypeScript
- Tailwind CSS 4
- Zustand (gerenciamento de favoritos)
- API da Unsplash

## 🛠️ Instalação

```bash
git clone https://github.com/seu-usuario/mini-instagram.git
cd mini-instagram
npm install
cp .env.local.example .env.local
# adicione sua chave da Unsplash
npm run dev
🌲 Estrutura de pastas
bash
Copiar
Editar
app/              # Páginas e layout
components/       # Componentes reutilizáveis
store/            # Zustand (favoritos)
types/            # Tipos TS
utils/            # Funções auxiliares
📌 Decisões
Zustand + localStorage para persistência leve e fácil

App Router + Tailwind moderno e responsivo

Componentização simples e clara

Modal acessível e sem dependências extras