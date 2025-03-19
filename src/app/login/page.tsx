"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("/api/auth/login", { email, password });
      const { token } = response.data;
      localStorage.setItem("token", token);

      alert("Connexion réussie !");
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
          Connexion
        </h1>
        {error && (
          <p className="text-center mb-4" style={{ color: "#8B0000" }}>
            {error}
          </p>
        )}
        <form onSubmit={handleSubmit}>
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
            Se connecter
          </button>
        </form>
        <p className="mt-4 text-sm text-center" style={{ color: "#8B4513" }}>
          Pas encore de compte ?{" "}
          <a
            href="/register"
            className="hover:underline"
            style={{ color: "#8B0000" }}
          >
            Inscrivez-vous
          </a>
        </p>
      </div>
    </div>
  );
}
