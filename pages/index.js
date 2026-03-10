import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Head>
        <title>Portfolio | Troh Melvyn</title>
        <meta name="description" content="Portfolio de Troh Melvyn, étudiant en BTS SIO SLAM à l'ENSITECH." />
      </Head>

      {/* Barre de navigation fixée en haut */}
      <header className="bg-white shadow-sm p-5 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="font-extrabold text-2xl text-blue-600 tracking-tight">Portfolio</span>
          {/* Remplace ton <nav> actuel par celui-ci */}
        <nav className="hidden md:flex space-x-8 font-semibold text-sm text-gray-600 items-center">
          <a href="#a-propos" className="hover:text-blue-600 transition">À propos</a>
          <a href="#bts-sio" className="hover:text-blue-600 transition">BTS SIO</a>
          <a href="#stage" className="hover:text-blue-600 transition">Stage</a>
          <a href="#competences" className="hover:text-blue-600 transition">Compétences</a>
          <Link href="/projets" className="hover:text-blue-600 transition">Réalisations</Link>
          <a href="#veille" className="hover:text-blue-600 transition">Veille Technologique</a>
        </nav>
        </div>
      </header>

      <main>
        {/* Section Héro (Accueil) */}
<section className="relative max-w-6xl mx-auto py-24 md:py-40 px-6 text-center flex flex-col items-center justify-center min-h-[85vh] overflow-hidden">
          
          {/* Effet de lumière en arrière-plan (Cercle flou) */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] -z-10"></div>

          {/* Petit Badge de Statut */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold mb-8 animate-pulse">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Disponible pour un stage / alternance
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-8 tracking-tighter leading-tight">
            Bonjour, je suis <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Troh Melvyn
            </span> 👋
          </h1>

          <p className="text-xl md:text-2xl text-gray-500 mb-12 font-medium max-w-2xl leading-relaxed">
            Étudiant en <span className="text-gray-900">BTS SIO option SLAM</span> à l'ENSITECH. 
            Passionné par le code et l'innovation technologique.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-5 w-full sm:w-auto">
            <a 
              href="#a-propos" 
              className="group relative bg-gray-900 text-white px-10 py-4 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-gray-200"
            >
              En savoir plus sur moi
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-400"></span>
            </a>
            
            <Link 
              href="/projets" 
              className="bg-white text-gray-900 border border-gray-200 px-10 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all shadow-sm flex items-center justify-center gap-2 group"
            >
              Voir mes projets
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>

            {/* Nouveau bouton CV discret */}
            <a 
              href="#" 
              className="flex items-center justify-center gap-2 px-6 py-4 border border-gray-300 rounded-xl font-bold text-gray-600 hover:bg-gray-100 transition shadow-sm"
            >
              📄 Mon CV
            </a>
          </div>

          {/* Petit indicateur de défilement */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </section>

  {/* Section À propos dynamisée */}
  <motion.section 
    id="a-propos" 
    initial={{ opacity: 0, y: 50 }} // Commence invisible et 50px plus bas
    whileInView={{ opacity: 1, y: 0 }} // Devient visible et remonte à sa place
    viewport={{ once: true, margin: "-100px" }} // Déclenche l'animation une seule fois
    transition={{ duration: 0.8, ease: "easeOut" }} // Animation fluide de 0.8 seconde
    className="bg-white py-24 border-t border-gray-100 scroll-mt-20"
  >
    <div className="max-w-3xl mx-auto px-6 text-center">
      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl font-bold text-gray-900 mb-8 uppercase tracking-wider text-sm text-blue-600"
      >
        À propos de moi
      </motion.h2>
      
      <div className="text-lg text-gray-600 leading-relaxed space-y-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Je m'appelle <strong>Troh Melvyn</strong> et j'ai 19 ans. Je suis actuellement étudiant en première année de <strong>BTS SIO</strong> (Services Informatiques aux Organisations), spécialité <strong>SLAM</strong> (Solutions Logicielles et Applications Métiers) à l'école <strong>ENSITECH</strong>.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Passionné par les nouvelles technologies et la programmation, mon objectif principal est de construire une carrière solide dans le domaine de l'ingénierie logicielle. J'aime apprendre, relever des défis techniques et concevoir des solutions innovantes.
        </motion.p>
      </div>
    </div>
  </motion.section>

        {/* Zones d'attente pour les prochaines sections */}
<section id="bts-sio" className="py-24 bg-gray-50 border-t border-gray-100 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6">
            
            {/* En-tête de la section avec texte en dégradé */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 inline-block pb-2">
                Qu'est-ce que le BTS SIO ?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Le Brevet de Technicien Supérieur aux Services Informatiques aux Organisations est un diplôme national de niveau Bac+2. Il prépare à la production et à la fourniture de services informatiques aux entreprises, en formation initiale ou en alternance.
              </p>
            </div>

            {/* Les deux options (Cartes interactives) */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              
              {/* Carte SISR */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300 shadow-sm">
                  <span className="text-2xl group-hover:text-white transition-colors duration-300">🌐</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Option A : SISR</h3>
                <h4 className="text-sm font-bold text-blue-500 uppercase tracking-wider mb-4">Infrastructures, Systèmes et Réseaux</h4>
                <p className="text-gray-600 leading-relaxed text-justify">
                  Forme des professionnels des réseaux et équipements informatiques. En sortant de cette option, vous êtes capable d'installer, de sécuriser, d'administrer le réseau d'une organisation et d'assurer son maintien en condition opérationnelle (MCO).
                </p>
              </div>

              {/* Carte SLAM (Mise en avant) */}
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-blue-100 relative group overflow-hidden">
                {/* Petit ruban pour ta spécialité */}
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg z-10 shadow-sm">
                  Ma Spécialité 🎯
                </div>
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300 shadow-sm">
                  <span className="text-2xl group-hover:text-white transition-colors duration-300">💻</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Option B : SLAM</h3>
                <h4 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-4">Solutions Logicielles et Applications Métiers</h4>
                <p className="text-gray-600 leading-relaxed text-justify">
                  Forme des spécialistes des logiciels. Cette option est destinée à la conception, le développement, l'intégration et la maintenance de programmes applicatifs. Elle inclut la rédaction de cahiers des charges et l'analyse des besoins.
                </p>
              </div>

            </div>

            {/* Profils d'entrée (Badges) */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-6">À qui s'adresse ce BTS ?</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 font-semibold hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-default shadow-sm">
                  🎓 Bac STMG (SIG)
                </span>
                <span className="px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 font-semibold hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-default shadow-sm">
                  🔌 Bac Pro SN (RISC)
                </span>
                <span className="px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 font-semibold hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-default shadow-sm">
                  ⚙️ Bac STI2D (SIN)
                </span>
                <span className="px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 font-semibold hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-default shadow-sm">
                  📚 Bac Général (Scientifique / Éco)
                </span>
              </div>
            </div>

          </div>
        </section>

<section id="stage" className="py-24 bg-white border-t border-gray-100 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-6">
            
            {/* En-tête de la section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 inline-block pb-2">
                Mes Expériences en Entreprise
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                J'ai eu l'opportunité de réaliser mes <span className="font-bold text-gray-900">deux stages</span> au sein de la même entreprise, <span className="font-bold text-blue-600">Caplogy</span>, ce qui m'a permis de suivre l'évolution de leurs outils.
              </p>
            </div>

            <div className="space-y-12">
              
              {/* STAGE 2 (Mis en premier car c'est le plus récent) */}
              <div className="bg-gray-50 rounded-2xl p-8 shadow-md border border-gray-200 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden transition-all hover:shadow-lg">
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg z-10 shadow-sm">
                  2ème Année
                </div>
                <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0 border border-gray-100 mt-2">
                  <span className="text-4xl">💼</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Développeur Full-Stack (Offres d'emploi)</h3>
                  <p className="text-blue-600 font-semibold mb-4">@ Caplogy • Décembre - Janvier</p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Pour mon deuxième stage, j'ai été chargé de développer la page de création d'offres d'emploi réservée aux administrateurs. J'ai conçu l'interface utilisateur sécurisée et géré la logique permettant d'enregistrer ces offres dans le système.
                  </p>
                  <div className="flex gap-2 flex-wrap mb-6">
                    <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Next.js</span>
                    <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">React</span>
                    <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">Django</span>
                  </div>
                  {/* Bouton vers ta page projets pour montrer les captures/code */}
                  <Link href="/projets" className="inline-flex items-center justify-center bg-white border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition shadow-sm text-sm group">
                    <span className="mr-2">🔒</span> Voir les captures et extraits de code
                  </Link>
                </div>
              </div>

              {/* STAGE 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden transition-all hover:shadow-md">
                <div className="absolute top-0 right-0 bg-gray-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg z-10 shadow-sm">
                  1ère Année
                </div>
                <div className="w-20 h-20 bg-gray-50 rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0 border border-gray-200 mt-2">
                  <span className="text-4xl">🏢</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Développeur Front-End & Audit SEO</h3>
                  <p className="text-gray-500 font-semibold mb-4">@ Caplogy • Juin - Août</p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Lors de mon premier stage, j'ai principalement travaillé sur le développement Front-End de la page de contact de l'entreprise. J'ai également réalisé un audit technique poussé pour optimiser le référencement naturel (SEO) et les temps de chargement.
                  </p>
                  <div className="flex gap-2 flex-wrap mb-6">
                    <span className="text-xs font-semibold bg-blue-50 text-blue-700 px-3 py-1 rounded-full">React</span>
                    <span className="text-xs font-semibold bg-orange-50 text-orange-700 px-3 py-1 rounded-full">Lighthouse</span>
                    <span className="text-xs font-semibold bg-orange-50 text-orange-700 px-3 py-1 rounded-full">Analytics</span>
                  </div>
                  {/* REMPLACE LE LIEN CI-DESSOUS PAR LE VRAI LIEN DE CAPLOGY */}
                  <a href="https://www.caplogy.com/contact" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-blue-50 border border-blue-200 text-blue-700 px-5 py-2.5 rounded-lg font-medium hover:bg-blue-100 transition shadow-sm text-sm">
                    <span className="mr-2">🌐</span> Visiter la page en ligne
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>


        <section className="max-w-6xl mx-auto py-24 px-6" id="competences">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Compétences & Outils</h2>
          
          {/* Grille Bento */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
            
            {/* Case 1 : Frontend (Grande case verticale) */}
            <div className="md:col-span-2 md:row-span-2 bg-blue-600 rounded-3xl p-8 text-white flex flex-col justify-between shadow-xl shadow-blue-100 group hover:scale-[1.02] transition-transform duration-300">
              <div>
                <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6 backdrop-blur-md">
                  <span className="text-2xl">⚛️</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Développement Front-End</h3>
                <p className="text-blue-100 leading-relaxed">
                  Expertise dans la création d'interfaces modernes et réactives avec <span className="font-bold text-white">Next.js</span> et <span className="font-bold text-white">React</span>. Utilisation intensive de Tailwind CSS pour des designs "mobile-first".
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-white/10 px-3 py-1 rounded-full text-xs border border-white/20">Tailwind CSS</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-xs border border-white/20">JavaScript ES6</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-xs border border-white/20">Chakra UI</span>
              </div>
            </div>

            {/* Case 2 : Backend (Case horizontale) */}
            <div className="md:col-span-2 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex items-center gap-6 hover:shadow-md transition-shadow">
              <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl">🐍</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Back-End & API</h3>
                <p className="text-gray-500 text-sm">Développement de serveurs robustes avec Python Django et architecture REST.</p>
              </div>
            </div>

            {/* Case 3 : C# (Petite case) */}
            <div className="bg-purple-50 rounded-3xl p-6 border border-purple-100 flex flex-col justify-center items-center text-center group hover:bg-purple-100 transition-colors">
              <span className="text-3xl mb-2 group-hover:rotate-12 transition-transform">🎯</span>
              <h3 className="font-bold text-purple-900 text-sm italic">C# / .NET</h3>
              <p className="text-[10px] text-purple-700 mt-1 uppercase font-bold tracking-widest">POO Avancée</p>
            </div>

            {/* Case 4 : Outils (Case avec effet Glassmorphism) */}
            <div className="md:col-span-1 bg-gray-900 rounded-3xl p-6 text-white flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute -right-4 -bottom-4 opacity-20 text-6xl rotate-12 group-hover:rotate-0 transition-transform duration-500">⚙️</div>
              <h3 className="text-lg font-bold mb-3">Workflow</h3>
              <ul className="text-xs text-gray-400 space-y-2">
                <li className="flex items-center gap-2"><span className="text-blue-400">●</span> Git & GitHub</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">●</span> Docker / VS Code</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">●</span> Agile (Scrum)</li>
              </ul>
            </div>

          </div>
        </section>


        {/* --- ZONE FINALE SOMBRE (Veille + Contact + Footer) --- */}
<div className="bg-gray-950 text-white transition-colors duration-500">
  
  {/* SECTION VEILLE RE-STYLISÉE */}
          <section id="veille" className="py-24 bg-transparent text-white scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6">
            
            {/* En-tête de la veille */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-6 inline-block pb-2">
                Veille Technologique
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Suivi de l'évolution de <span className="text-blue-400 font-bold">l'Intelligence Artificielle dans le secteur automobile</span> : des systèmes d'aide à la conduite jusqu'à l'autonomie complète.
              </p>
            </div>

            {/* Grille des thématiques de veille */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              
              {/* Axe 1 */}
              <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-colors group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform inline-block">🤖</div>
                <h3 className="text-xl font-bold mb-3">Conduite Autonome</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Analyse des algorithmes de Computer Vision et du Deep Learning permettant aux véhicules de percevoir leur environnement via des capteurs LiDAR et caméras.
                </p>
              </div>

              {/* Axe 2 */}
              <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-colors group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform inline-block">🛠️</div>
                <h3 className="text-xl font-bold mb-3">Maintenance Prédictive</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Utilisation du Machine Learning pour anticiper les pannes mécaniques avant qu'elles ne surviennent en analysant les données des capteurs en temps réel.
                </p>
              </div>

              {/* Axe 3 */}
              <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-indigo-500 transition-colors group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform inline-block">🧠</div>
                <h3 className="text-xl font-bold mb-3">Expérience Utilisateur</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  IA embarquée pour la reconnaissance vocale avancée, la détection de somnolence du conducteur et la personnalisation des trajets (Smart Cockpit).
                </p>
              </div>
            </div>

            {/* Méthodologie de veille */}
            <div className="bg-blue-600/10 border border-blue-500/30 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-blue-400">🔍</span> Ma méthodologie de veille
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Pour rester informé, j'utilise un système de collecte automatisé me permettant de suivre les dernières publications de l'industrie (Tesla, NVIDIA, Waymo) et les revues techniques spécialisées.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-gray-800 px-4 py-2 rounded-full text-xs font-mono border border-gray-700">Feedly (Flux RSS)</span>
                    <span className="bg-gray-800 px-4 py-2 rounded-full text-xs font-mono border border-gray-700">Google Alerts</span>
                    <span className="bg-gray-800 px-4 py-2 rounded-full text-xs font-mono border border-gray-700">X (Listes Tech)</span>
                    <span className="bg-gray-800 px-4 py-2 rounded-full text-xs font-mono border border-gray-700">Medium / Towards Data Science</span>
                  </div>
                </div>
                <div className="hidden md:block w-px h-32 bg-gray-700"></div>
                <div className="flex-shrink-0 text-center">
                  <p className="text-4xl font-black text-blue-500 mb-2">5</p>
                  <p className="text-xs uppercase tracking-widest text-gray-500">Niveaux d'autonomie<br/>étudiés</p>
                </div>
              </div>
            </div>
          </div>
        </section>

  {/* SECTION CONTACT (POUR FINIR PRO) */}
        <section id="contact" className="py-20 border-t border-gray-900">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">On travaille ensemble ?</h2>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
              Passionné par le développement et toujours prêt pour de nouveaux défis techniques. 
              <span className="block mt-2 text-blue-400 font-medium">
                Explorez mon code sur GitHub ou rejoignez-moi sur LinkedIn pour échanger sur mon parcours !
              </span>
            </p>
            
      <div className="flex flex-wrap justify-center gap-6">
        {/* Bouton Email */}
        <a 
          href="mailto:TON_EMAIL@exemple.com" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-transform hover:scale-105 shadow-lg shadow-blue-900/20"
        >
          Me contacter par mail
        </a>
        
        <div className="flex gap-4">
          {/* Lien LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/melvyn-troh-633439327/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center hover:border-blue-500 transition-colors text-xl"
          >
            in
          </a>
          {/* Lien GitHub */}
          <a 
            href="https://github.com/brradyy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center hover:border-blue-500 transition-colors text-xl"
          >
            git
          </a>
        </div>
      </div>
          </div>
        </section>

  {/* FOOTER HARMONISÉ */}
        <footer className="py-12 text-center border-t border-gray-900">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em] font-bold">
              © {new Date().getFullYear()} — TROH MELVYN — PORTFOLIO BTS SIO SLAM
            </p>
          </div>
        </footer>
      </div>
      </main>
    </div>
  );
}