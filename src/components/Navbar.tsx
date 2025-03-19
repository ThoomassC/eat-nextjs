"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">Tomaclette</Link>
        </div>
        <div className="flex gap-4">
          <Link
            href="/"
            className={`${
              pathname === "/" ? "text-yellow-400" : "text-white"
            } hover:text-yellow-400`}
          >
            Accueil
          </Link>
          <Link
            href="/recipes"
            className={`${
              pathname === "/recipes" ? "text-yellow-400" : "text-white"
            } hover:text-yellow-400`}
          >
            Recettes
          </Link>
          <Link
            href="/login"
            className={`${
              pathname === "/login" ? "text-yellow-400" : "text-white"
            } hover:text-yellow-400`}
          >
            Login
          </Link>
          <Link
            href="/register"
            className={`${
              pathname === "/register" ? "text-yellow-400" : "text-white"
            } hover:text-yellow-400`}
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
