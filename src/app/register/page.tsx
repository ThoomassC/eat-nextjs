"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post("/api/auth/register", { email, password, name });
      alert("Inscription réussie !");
      router.push("/recipes");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Une erreur est survenue.");
      } else {
        setError("Une erreur est survenue.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className="w-full max-w-md p-8 rounded-lg shadow-lg"
        style={{
          backgroundColor: "#F5F5DC",
          border: "2px solid #8B4513",
        }}
      >
        <h1
          className="text-2xl font-bold text-center mb-6"
          style={{
            fontFamily: "'Cinzel', serif",
          }}
        >
          Inscription
        </h1>
        {error && (
          <p className="text-center mb-4" style={{ color: "#8B0000" }}>
            {error}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium"
              style={{ color: "#8B4513" }}
            >
              Nom
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded focus:outline-none focus:ring focus:ring-yellow-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium"
              style={{ color: "#8B4513" }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded focus:outline-none focus:ring focus:ring-yellow-300"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium"
              style={{ color: "#8B4513" }}
            >
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded focus:outline-none focus:ring focus:ring-yellow-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 rounded"
            style={{
              backgroundColor: "#FFD700", // Jaune Fromage
              color: "#8B4513", // Brun Montagne & Bois
              fontWeight: "bold",
            }}
          >
            S&apos;inscrire
          </button>
        </form>
        <p className="mt-4 text-sm text-center" style={{ color: "#8B4513" }}>
          Déjà un compte ?{" "}
          <a
            href="/login"
            className="hover:underline"
            style={{ color: "#8B0000" }}
          >
            Connectez-vous
          </a>
        </p>
      </div>
    </div>
  );
}
