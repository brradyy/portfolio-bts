import Head from 'next/head';
import Link from 'next/link';

const projets = [
  { id: 1, titre: "Gestion d'offres d'emploi", technos: ["Next.js", "React", "Chakra UI"], description: "Développement d'une plateforme web pour la consultation d'annonces.", competences: ["2.1", "2.3", "2.5"], contexte: "Stage chez Caplogy" },
  { id: 2, titre: "Cryptographie Vigenère", technos: ["C#", ".NET", "POO"], description: "Conception d'un algorithme de chiffrement symétrique.", competences: ["2.1", "2.3", "2.5"], contexte: "Projet Académique" },
  { id: 3, titre: "Workflow Git & GitHub", technos: ["Git", "GitHub"], description: "Mise en place d'un système de gestion de versions.", competences: ["2.4"], contexte: "Projet Support" },
  { id: 4, titre: "Backend Page Contact", technos: ["Django", "Python", "SQL"], description: "Développement du backend d'un module de contact.", competences: ["2.1", "2.2", "2.3"], contexte: "Stage chez Caplogy" },
  { id: 5, titre: "Présence en ligne & SEO", technos: ["Lighthouse", "Analytics"], description: "Audit technique et optimisation des performances web.", competences: ["2.5", "2.6"], contexte: "Stage chez Caplogy" }
];

export default function Projets() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Head>
        <title>Mes Réalisations | Troh Melvyn</title>
        <meta name="description" content="Portfolio des projets et réalisations de Troh Melvyn" />
      </Head>

      {/* Barre de navigation */}
      <header className="bg-white shadow-sm p-5 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="font-extrabold text-2xl text-blue-600 tracking-tight">Melvyn.</span>
          <nav className="font-semibold text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition flex items-center gap-2">
              <span>←</span> Retour à l'accueil
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-16 px-6">
        
        {/* En-tête de la page */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 inline-block pb-2">
            Mes Réalisations & Projets
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Voici l'ensemble des projets techniques réalisés lors de mes stages chez Caplogy et de mon cursus académique. Ils démontrent ma capacité à concevoir, développer et sécuriser des applications.
          </p>
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projets.map((projet) => (
            <div key={projet.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col overflow-hidden group">
              
              {/* Emplacement pour la capture d'écran */}
              <div className="h-48 bg-gray-200 relative overflow-hidden flex items-center justify-center border-b border-gray-100 group-hover:bg-blue-50 transition-colors duration-300">
                {/* Plus tard, tu remplaceras ce texte par une vraie balise <img src="..." /> */}
                <span className="text-gray-400 font-medium flex flex-col items-center">
                  <span className="text-3xl mb-2">📸</span>
                  Capture d'écran à venir
                </span>
                
                {/* Badge Contexte (Stage ou Académique) */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  {projet.contexte}
                </div>
              </div>

              {/* Contenu de la carte */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {projet.titre}
                </h2>
                <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">
                  {projet.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {projet.technos.map((tech, index) => (
                      <span key={index} className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-md border border-blue-100">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Compétences E6 */}
                <div className="mb-6">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Compétences validées</h3>
                  <div className="flex flex-wrap gap-2">
                    {projet.competences.map((comp, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-1 rounded">
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bouton d'action */}
                <button className="mt-auto w-full bg-white text-gray-700 font-semibold py-2.5 rounded-lg border border-gray-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all shadow-sm text-sm">
                  Voir les détails du projet
                </button>
              </div>

            </div>
          ))}
        </div>
      </main>
    </div>
  );
}