import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

// Tes projets avec des extraits de code intégrés !
const projets = [
  { 
    id: 1, 
    titre: "Gestion d'offres d'emploi", 
    technos: ["Next.js", "React"], 
    description: "Développement d'une plateforme web pour la création et consultation d'annonces.", 
    competences: ["Mode Projet", "Service Informatique"], 
    contexte: "Stage chez Caplogy",
    lien: "https://github.com/brradyy", // Met le vrai lien ici
    language: "jsx",
    snippet: `export default function JobOffer({ title, company }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-blue-600">{title}</h2>
      <p className="text-gray-500">{company}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Postuler
      </button>
    </div>
  );
}`
  },
  { 
    id: 2, 
    titre: "Cryptographie Vigenère", 
    technos: ["C#", ".NET", "POO"], 
    description: "Conception d'un algorithme de chiffrement symétrique basé sur le chiffre de Vigenère.", 
    competences: ["Patrimoine Informatique", "Développement"], 
    contexte: "Projet Académique",
    lien: "https://github.com/brradyy",
    language: "csharp",
    snippet: `public class VigenereCipher {
    public string Encrypt(string text, string key) {
        string result = "";
        int keyIndex = 0;
        foreach (char c in text) {
            if (char.IsLetter(c)) {
                char offset = char.IsUpper(c) ? 'A' : 'a';
                int keyChar = char.ToUpper(key[keyIndex % key.Length]) - 'A';
                result += (char)(((c - offset + keyChar) % 26) + offset);
                keyIndex++;
            } else {
                result += c;
            }
        }
        return result;
    }
}`
  },
  { 
    id: 3, 
    titre: "Backend Page Contact", 
    technos: ["Django", "Python", "SQL"], 
    description: "Développement du backend d'un module de contact, création de l'API REST.", 
    competences: ["Développement", "Incidents & Assistance"], 
    contexte: "Stage chez Caplogy",
    lien: "https://www.caplogy.com",
    language: "python",
    snippet: `from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import ContactSerializer

class ContactAPIView(APIView):
    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save() # Sauvegarde en base SQL
            return Response({"message": "Email envoyé !"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)`
  },
  { 
    id: 4, 
    titre: "Présence en ligne & SEO", 
    technos: ["Lighthouse", "Analytics"], 
    description: "Audit technique et optimisation des performances web (temps de chargement, SEO).", 
    competences: ["Présence en ligne", "Développement pro"], 
    contexte: "Stage chez Caplogy",
    lien: "https://www.caplogy.com",
    language: "json",
    snippet: `{
  "lighthouse-audit": {
    "performance": 0.98,
    "accessibility": 1.00,
    "best-practices": 0.95,
    "seo": 1.00
  },
  "optimizations": [
    "Lazy loading des images",
    "Minification des CSS/JS",
    "Mise en cache du navigateur configurée"
  ]
}`
  },
  { 
    id: 5, 
    titre: "Workflow Git & GitHub", 
    technos: ["Git", "GitHub"], 
    description: "Mise en place d'un système de gestion de versions pour le travail collaboratif.", 
    competences: ["Patrimoine Informatique", "Mode Projet"], 
    contexte: "Projet Transverse",
    lien: "https://github.com/brradyy",
    language: "bash",
    snippet: `git init
git add .
git commit -m "feat: initialisation du projet portfolio et versionning"
git branch -M main
git remote add origin https://github.com/brradyy/portfolio-bts.git
git push -u origin main`
  }
];

export default function Projets() {
  // État pour savoir quel projet est actuellement ouvert dans la modale
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    // Mode sombre général
    <div className="min-h-screen bg-gray-950 text-gray-300 font-sans selection:bg-blue-500/30">
      <Head>
        <title>Mes Réalisations | Troh Melvyn</title>
        <meta name="description" content="Portfolio des projets et réalisations de Troh Melvyn" />
      </Head>

      {/* Barre de navigation sombre */}
      <header className="bg-gray-950/80 backdrop-blur-md shadow-sm border-b border-gray-800 p-5 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="font-extrabold text-2xl text-blue-500 tracking-tight">Portfolio</span>
          <nav className="font-semibold text-sm text-gray-400">
            <Link href="/" className="hover:text-blue-400 transition flex items-center gap-2">
              <span>←</span> Retour à l'accueil
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-16 px-6 relative z-10">
        
        {/* En-tête de la page animé */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-6 inline-block pb-2">
            Mes Réalisations & Projets
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Voici l'ensemble des projets techniques réalisés lors de mes stages et de mon cursus. 
            Ils démontrent ma capacité à concevoir, développer et sécuriser des applications.
          </p>
        </motion.div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projets.map((projet, index) => (
            <motion.div 
              key={projet.id} 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-gray-900/50 rounded-2xl shadow-lg border border-gray-800 flex flex-col overflow-hidden group hover:border-gray-600 transition-all"
            >
              
              <div className="p-8 flex flex-col flex-grow relative">
                {/* Badge Contexte */}
                <div className="absolute top-6 right-6 bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-bold px-3 py-1 rounded-full">
                  {projet.contexte}
                </div>

                <h2 className="text-2xl font-bold text-white mb-3 mt-4">
                  {projet.titre}
                </h2>
                <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed">
                  {projet.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {projet.technos.map((tech, i) => (
                      <span key={i} className="bg-gray-800 text-gray-300 text-xs font-semibold px-3 py-1.5 rounded-md border border-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Compétences E6 */}
                <div className="mb-8">
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Compétences BTS SIO validées</h3>
                  <div className="flex flex-wrap gap-2">
                    {projet.competences.map((comp, i) => (
                      <span key={i} className="bg-gray-950 text-gray-500 text-xs font-semibold px-2 py-1 rounded border border-gray-800">
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

{/* Boutons d'action */}
                <div className="mt-auto grid grid-cols-2 gap-4">
                  {/* Le bouton "Voir le projet" utilise la variable projet.lien */}
                  <a 
                    href={projet.lien} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full bg-gray-800 text-gray-300 font-semibold py-3 rounded-lg border border-gray-700 hover:border-blue-500 hover:text-white transition-all text-sm flex items-center justify-center gap-2"
                  >
                    <span>🌐</span> Voir le projet
                  </a>
                  
                  {/* Le bouton "Voir le code" déclenche la modale */}
                  <button 
                    onClick={() => setSelectedProject(projet)}
                    className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-500 transition-all text-sm flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(37,99,235,0.2)]"
                  >
                    <span>💻</span> Voir le code
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* LA MODALE (FENÊTRE DE CODE) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)} // Ferme la modale si on clique à côté
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()} // Empêche la fermeture si on clique SUR la fenêtre
              className="bg-[#1e1e1e] w-full max-w-3xl rounded-xl shadow-2xl border border-gray-700 overflow-hidden"
            >
              {/* En-tête de la fenêtre (Façon MacOS) */}
              <div className="bg-[#2d2d2d] px-4 py-3 flex items-center justify-between border-b border-black">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-gray-400 text-xs font-mono">
                  {selectedProject.titre.replace(/\s+/g, '')}.{selectedProject.language === 'python' ? 'py' : selectedProject.language === 'csharp' ? 'cs' : 'js'}
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white text-sm"
                >
                  ✕
                </button>
              </div>

              {/* Contenu du code avec Coloration Syntaxique */}
              <div className="p-4 overflow-x-auto max-h-[60vh] text-sm custom-scrollbar">
                <SyntaxHighlighter 
                  language={selectedProject.language} 
                  style={vscDarkPlus}
                  customStyle={{ background: 'transparent', padding: 0, margin: 0 }}
                >
                  {selectedProject.snippet}
                </SyntaxHighlighter>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}