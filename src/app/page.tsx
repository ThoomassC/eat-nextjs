import CardInformation from "@/components/CardInformation";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-8">
      {/* Image en arrière-plan */}
      <div
        style={{
          height: "33vh",
          backgroundImage: "url('/logo.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Contenu principal */}
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        {/* Card pour les informations pratiques */}
        <CardInformation
          title="Informations"
          content={
            <>
              <p>
                <strong>Adresse :</strong> 123 Rue du gros, 75000 Mont-Cul,
                France
              </p>
              <p>
                <strong>Téléphone :</strong> +33 1 23 45 67 89
              </p>
              <h3
                className="text-xl font-semibold mt-4 mb-2"
                style={{ color: "#8B4513" }}
              >
                Horaires d&apos;ouverture :
              </h3>
              <ul className="list-disc list-inside">
                <li>Lundi - Vendredi : 12h00 - 14h30, 19h00 - 22h30</li>
                <li>Samedi : 12h00 - 15h00, 19h00 - 23h00</li>
                <li>Dimanche : Fermé</li>
              </ul>
            </>
          }
        />

        {/* Card pour la présentation du restaurant */}
        <CardInformation
          title="À propos de Tomaclette"
          content={
            <>
              <p>
                Bienvenue chez <strong>Tomaclette</strong>, le paradis des
                amateurs de fromage fondu et de charcuterie ! Situé au cœur des
                montagnes, notre restaurant vous propose une expérience
                culinaire unique, inspirée des traditions savoyardes.
              </p>
              <p className="mt-4">
                Venez déguster nos plats emblématiques dans une ambiance
                chaleureuse et conviviale, où le bois des chalets rencontre la
                douceur du fromage fondu.
              </p>
            </>
          }
        />
      </div>
    </div>
  );
}
