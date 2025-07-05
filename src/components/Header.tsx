"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { TypingAnimation } from "./magicui/typing-animation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Lobster } from "next/font/google";

const lobster = Lobster({ weight: "400", subsets: ["latin"] });

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const logged = localStorage.getItem("auth");
    setIsLoggedIn(!!logged);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    router.push("/login");
  };

  return (
    <header className="flex flex-col justify-between items-center mb-6 md:flex-row lg:flex-row">
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
      <nav className="flex items-center gap-4 text-sm font-medium px-2 space-x-8">
        <Link
          href="/feed"
          className={`relative group transition-colors duration-300 ${
            pathname === "/feed"
              ? "text-[#f09433]"
              : "text-gray-200 hover:text-[#dc2743]"
          }`}
        >
          FEED
          <span
            className={`absolute -bottom-0.5 left-0 h-0.5 bg-[#bc1888] transition-all duration-300 ${
              pathname === "/feed" ? "w-full" : "w-0 group-hover:w-full"
            }`}
          ></span>
        </Link>

        <Link
          href="/favorites"
          className={`relative group transition-colors duration-300 ${
            pathname === "/favorites"
              ? "text-[#f09433]"
              : "text-gray-200 hover:text-[#dc2743]"
          }`}
        >
          FAVORITOS
          <span
            className={`absolute -bottom-0.5 left-0 h-0.5 bg-[#bc1888] transition-all duration-300 ${
              pathname === "/favorites" ? "w-full" : "w-0 group-hover:w-full"
            }`}
          ></span>
        </Link>

        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="relative group text-gray-200 hover:text-[#dc2743] transition-colors duration-300 cursor-pointer"
          >
            SAIR
            <span
              className={`absolute -bottom-0.5 left-0 h-0.5 bg-[#bc1888] transition-all duration-300 w-0 group-hover:w-full`}
            ></span>
          </button>
        )}
      </nav>
    </header>
  );
}
