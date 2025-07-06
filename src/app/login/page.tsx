"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Lobster } from "next/font/google";

const lobster = Lobster({ weight: "400", subsets: ["latin"] });

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setErro("Digite um email válido");
      return;
    }

    if (senha.length < 6) {
      setErro("A senha deve ter pelo menos 6 caracteres");
      return;
    }

    localStorage.setItem("auth", "true");
    router.push("/feed");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <h1
              className={`${lobster.className} text-2xl font-bold text-[#00ffd5] h-20`}
            >
              <TypingAnimation
                className={cn(
                  "text-4xl font-bold leading-[5rem] tracking-[-0.02em]",
                  "bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888]",
                  "bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient"
                )}
              >
                InstaPocket
              </TypingAnimation>
            </h1>
      <form
        onSubmit={handleLogin}
        className="bg-gray-900 p-8 rounded shadow-md w-full max-w-md"
      >
        <h2
          className={cn(
            "text-4xl text-center font-bold leading-[5rem] tracking-[-0.02em]",
            "bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888]",
            "bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient"
          )}
        >
          LOGIN
        </h2>

        {erro && <p className="text-red-500 mb-4 text-sm">{erro}</p>}

        <label className="block mb-2 text-sm font-medium">Email:</label>
        <input
          type="email"
          className="w-full px-3 py-2 mb-4 rounded bg-gray-800 border border-gray-600"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seunome@exemplo.com"
        />

        <label className="block mb-2 text-sm font-medium">Senha:</label>
        <input
          type="password"
          className="w-full px-3 py-2 mb-6 rounded bg-gray-800 border border-gray-600"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Mínimo 6 caracteres"
        />

        <button
          type="submit"
          className="w-full py-2 rounded text-white font-semibold transition duration-300 cursor-pointer 
             bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] 
             bg-[length:200%_200%] animate-gradient"
        >
          Entrar
        </button>
      </form>
    </main>
  );
}
