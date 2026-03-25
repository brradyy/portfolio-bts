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
    lien: "https://www.caplogy.com/joboffers", // Met le vrai lien ici
    language: "jsx",
    snippet: `"use client";

import { useState, useEffect } from "react";
import {
  Box, Container, Heading, Text, Button, Flex, Grid, Table, Thead, Tbody,
  Tr, Th, Td, Badge, Modal, ModalOverlay, ModalContent, ModalHeader,
  ModalBody, ModalCloseButton, Input, Select, Textarea, FormControl,
  FormLabel, Checkbox, HStack, VStack, IconButton, useDisclosure, useToast
} from "@chakra-ui/react";
import { AddIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";

import { apiGet, apiPost, apiDelete, API_BASE, getAuthHeaders } from "@/lib/show_jobs";

export default function AdminJobsPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    location: "",
    type: "",
    experience: "",
    description: "",
    salary: "",
    published: true,
    modalite: ""
  });

  const categories = ["Développement", "Design", "Management", "Data", "Marketing"];
  const contractTypes = ["CDI", "CDD", "Stage", "Thèse Doctorat", "Freelance"];
  const modalite = ["Présentiel", "Distanciel", "Hybride"];
  const localisation = ["Paris", "Lyon", "Aix-en-Provence", "Vélizy-Villacoublay","Maroc","Liban"];

  // ✅ Normalisation API → Frontend
  const normalizeJobFromApi = (job) => {
    const requirements = Array.isArray(job.requirements) ? job.requirements : [];
    return {
      id: job.id,
      title: job.title,
      category: job.jobType || "",
      location: job.location,
      type: job.typeContract || job.type || "",
      modalite: job.workModels || "",
      experience: requirements.length ? requirements.join(", ") : (job.experience || ""),
      description: job.description,
      salary: job.salary ? String(job.salary) : "",
      published: job.is_active ?? false,
    };
  };

  // ✅ Normalisation Frontend → API
  const normalizeJobForApi = (formData) => {
    const requirements = String(formData.experience || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    return {
      title: formData.title,
      jobType: formData.category,
      location: formData.location,
      typeContract: formData.type,
      workModels: formData.modalite,
      requirements,
      description: formData.description,
      salary: formData.salary ? parseFloat(formData.salary) : null,
      is_active: formData.published,
    };
  };

  // Charger les offres depuis l'API Django
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await apiGet("/joboffre/?include_inactive=1");
        const jobsList = Array.isArray(data) ? data : (data.results || []);
        setJobs(jobsList.map(normalizeJobFromApi));
      } catch (err) {
        console.error(err);
        toast({
          title: "Erreur",
          description: "Impossible de charger les offres",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    };
    fetchJobs();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const openModal = (job = null) => {
    if (job) {
      setEditingJob(job);
      setFormData({
        title: job.title,
        category: job.category,
        location: job.location,
        type: job.type,
        experience: job.experience,
        description: job.description,
        salary: job.salary,
        published: job.published,
        modalite: job.modalite
      });
    } else {
      setEditingJob(null);
      setFormData({
        title: "",
        category: "",
        location: "",
        type: "",
        experience: "",
        description: "",
        salary: "",
        published: true,
        modalite: ""
      });
    }
    onOpen();
  };

  const closeModal = () => {
    onClose();
    setEditingJob(null);
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.location || !formData.experience || !formData.description) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const payload = normalizeJobForApi(formData);

      if (editingJob) {
        const res = await fetch(, {
          method: "PUT",
          headers: { "Content-Type": "application/json", ...getAuthHeaders() },
          body: JSON.stringify(payload),
        });
        const updated = await res.json();

        setJobs(jobs.map(job => job.id === updated.id ? normalizeJobFromApi(updated) : job));

        toast({
          title: "Offre mise à jour",
          description: "L'offre a été mise à jour avec succès",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        const created = await apiPost("/joboffre/", payload);
        setJobs([...jobs, normalizeJobFromApi(created)]);

        toast({
          title: "Offre créée",
          description: "La nouvelle offre a été créée avec succès",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }

      closeModal();
    } catch (err) {
      toast({
        title: "Erreur",
        description: err.message || "Erreur lors de la sauvegarde",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };`
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
    snippet: `using System;
using System.Collections.Generic;
using System.Text;

namespace Hash
{
    internal class Vigenere
    {
        private char[,] grille;   // Tableau 2D représentant la grille de Vigenère (26 x 26)
        private string cle;       // Clé utilisée pour le chiffrement/déchiffrement
        private string message;   // Message clair ou crypté

        // --- Constructeur par défaut ---
        public Vigenere()
        {
            InitialiserGrille();  // Génère la grille de Vigenère
            this.cle = "";        // Initialise la clé à vide
            this.message = "";    // Initialise le message à vide
        }

        // --- Constructeur avec clé ---
        public Vigenere(string cle)
        {
            this.cle = cle.ToUpper(); // Stocke la clé en majuscules
            InitialiserGrille();      // Crée la grille
        }

        // --- Constructeur avec clé + message ---
        public Vigenere(string cle, string message)
        {
            this.cle = cle.ToUpper();        // Convertit la clé en majuscules
            this.message = message.ToUpper(); // Convertit le message en majuscules
            InitialiserGrille();
        }

        // --- Accesseur (getter/setter) pour la clé ---
        public string Cle
        {
            get { return cle; }               // Retourne la clé
            set { cle = value.ToUpper(); }    // Modifie la clé en la passant en majuscules
        }

        // --- Accesseur pour le message ---
        public string Message
        {
            get { return message; }
            set { message = value.ToUpper(); }
        }

        // --- Création de la grille de Vigenère ---

        private string alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

        public void InitialiserGrille()
        {
            int taille = alphabet.Length;         // Taille de l’alphabet (36 caractères)
            grille = new char[taille, taille];     // Création du tableau 36 x 36

            for (int i = 0; i < taille; i++)       // Pour chaque ligne
            {
                for (int j = 0; j < taille; j++)   // Pour chaque colonne
                {
                    grille[i, j] = alphabet[(i + j) % taille];
                    // Remplit la cellule avec la lettre correspondante :
                    // Décalage de i lignes + j colonnes modulo 36
                }
            }
        }

        // --- Affichage de la grille ---
        public void AfficherGrille()
        {
            for (int i = 0; i < grille.GetLength(0); i++)        // Parcourt les lignes
            {
                for (int j = 0; j < grille.GetLength(1); j++)    // Parcourt les colonnes
                {
                    Console.Write(grille[i, j] + " ");           // Affiche chaque lettre
                }
                Console.WriteLine();                              // Retour à la ligne après chaque ligne de la grille
            }
        }

        // --- Chiffrement d’un message ---
        public string DonnerMessageCrypte()
        {
            if (string.IsNullOrEmpty(message) || string.IsNullOrEmpty(cle))
                return "Message ou clé non définis.";            // Vérifie que tout est bien défini

            string messageCrypte = "";                           // Chaîne résultante
            int j = 0;                                            // Indice pour parcourir la clé

            for (int i = 0; i < message.Length; i++)              // Parcourt le message
            {
                char c = message[i];                              // Caractère actuel

                if (alphabet.Contains(c))                         // permet de voir si c est dans l'alphabet
                {
                    char cleChar = cle[j % cle.Length];          // Récupère la lettre courante de la clé (avec répétition)
                    int ligne = alphabet.IndexOf(cleChar);                   // Ligne dans la grille = lettre de la clé
                    int colonne = alphabet.IndexOf(c);             // index de la colonne = lettre du message clair

                    messageCrypte += grille[ligne, colonne];      // Ajoute la lettre cryptée
                    j++;                                          // Avance dans la clé
                }
                else
                {
                    messageCrypte += c;                           // Garde les espaces et caractères spéciaux
                }
            }

            return messageCrypte;
        }

        // --- Déchiffrement d’un message ---
        public string DonnerMessageClair()
        {
            if (string.IsNullOrEmpty(message) || string.IsNullOrEmpty(cle))
                return "Message ou clé non définis.";

            string messageClair = "";    // Résultat déchiffré
            int j = 0;                   // Indice de la clé

            for (int i = 0; i < message.Length; i++) // Pour chaque caractère du message crypté
            {
                char c = message[i];

                if (alphabet.Contains(c))             // Si c est dans alphabet
                {
                    char cleChar = cle[j % cle.Length];   // Lettre correspondante de la clé
                    int ligne = alphabet.IndexOf(cleChar);            // index de la ligne de la grille correspondant à la clé

                    // Recherche de la colonne où se trouve la lettre cryptée
                    int colonne = 0;
                    int taille = alphabet.Length;
                    for (int k = 0; k < taille; k++)
                    {
                        if (grille[ligne, k] == c)
                        {
                            colonne = k;           // Lettre trouvée → colonne du message clair
                            break;
                        }
                    }

                    messageClair += alphabet[colonne]; // Ajoute la lettre décryptée
                    j++;
                }
                else
                {
                    messageClair += c;    // Conserve les caractères non alphabétiques
                }
            }

            return messageClair;
        }
    }
}
`
  },
  { 
    id: 3, 
    titre: "Frontend Page Contact", 
    technos: ["Django", "Python", "SQL"], 
    description: "Développement du frontend d'un module de contact, création de l'interface utilisateur.", 
    competences: ["Développement", "Design UI/UX"], 
    contexte: "Stage chez Caplogy",
    lien: "https://www.caplogy.com/contact",
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
    lien: "https://github.com/brradyy/Projetwinformweb",
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