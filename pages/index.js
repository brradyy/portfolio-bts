import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import BentoCard from '../components/BentoCard';
import ExperienceCard from '../components/ExperienceCard';

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
        <Section className="relative max-w-6xl mx-auto py-24 md:py-40 px-6 text-center flex flex-col items-center justify-center min-h-[85vh] overflow-hidden">
          
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

          {/* Bouton CV mis à jour */}
          <a 
            href="/template__ensup (1).pdf" 
            target="_blank" 
            rel="noopener noreferrer"
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
        </Section>

        {/* Section À propos */}
        <Section id="a-propos" className="bg-white py-24 border-t border-gray-100 scroll-mt-20">
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
        </Section>

        {/* Section BTS SIO */}
        <Section id="bts-sio" className="py-24 bg-gray-50 border-t border-gray-100 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6">
            
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 inline-block pb-2">
                Qu'est-ce que le BTS SIO ?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Le Brevet de Technicien Supérieur aux Services Informatiques aux Organisations est un diplôme national de niveau Bac+2. Il prépare à la production et à la fourniture de services informatiques aux entreprises, en formation initiale ou en alternance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              
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

              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-blue-100 relative group overflow-hidden">
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
        </Section>

{/* Section Stage */}
<Section id="stage" className="py-24 bg-white border-t border-gray-100 scroll-mt-20">
  <div className="max-w-5xl mx-auto px-6">
    
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 inline-block pb-2">
        Mes Expériences en Entreprise
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        J'ai eu l'opportunité de réaliser mes <span className="font-bold text-gray-900">deux stages</span> au sein de la même entreprise, <span className="font-bold text-blue-600">Caplogy</span>, ce qui m'a permis de suivre l'évolution de leurs outils.
      </p>
    </div>

    <div className="space-y-12">
      
      {/* STAGE 2 */}
      <ExperienceCard annee="2ème Année" icon="💼" isHighlighted={true} delay={0}>
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
        <Link href="/projets" className="inline-flex items-center justify-center bg-white border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition shadow-sm text-sm group">
          <span className="mr-2">🔒</span> Voir les captures et extraits de code
        </Link>
      </ExperienceCard>

      {/* STAGE 1 */}
      <ExperienceCard annee="1ère Année" icon="🏢" isHighlighted={false} delay={0.2}>
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
        <a href="https://www.caplogy.com/contact" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-blue-50 border border-blue-200 text-blue-700 px-5 py-2.5 rounded-lg font-medium hover:bg-blue-100 transition shadow-sm text-sm">
          <span className="mr-2">🌐</span> Visiter la page en ligne
        </a>
      </ExperienceCard>

    </div>
  </div>
</Section>

        {/* Section Compétences (avec les composants BentoCard) */}
        {/* Section Compétences & Réalisations (Version Compacte) */}
        <Section id="competences" className="max-w-6xl mx-auto py-24 px-6 scroll-mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Compétences & Réalisations
          </h2>
          
          {/* Hauteur réduite à 480px au lieu de 600px */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[480px]">
            
            {/* Case 1 : Frontend */}
            <BentoCard isLarge className="bg-blue-600 text-white flex flex-col justify-between shadow-blue-100 group !p-6">
              <div>
                <div className="bg-white/20 w-10 h-10 rounded-xl flex items-center justify-center mb-4 backdrop-blur-md">
                  <span className="text-xl">⚛️</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Développement Front-End</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Création d'interfaces modernes, sécurisées et réactives (Mobile-First).
                </p>
                <div className="mt-4 bg-blue-700/50 p-3 rounded-xl border border-blue-500/30">
                  <p className="text-xs font-semibold text-blue-50 mb-1 flex items-center gap-2">
                    <span>💡</span> Mises en pratique :
                  </p>
                  <ul className="text-xs text-blue-200 space-y-1 list-disc list-inside">
                    <li>Interface offres d'emploi Caplogy (Next.js).</li>
                    <li>Refonte de page de contact (Chakra UI).</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-white/10 px-2 py-1 rounded-full text-[10px] border border-white/20">React & Next.js</span>
                <span className="bg-white/10 px-2 py-1 rounded-full text-[10px] border border-white/20">Tailwind CSS</span>
                <span className="bg-white/10 px-2 py-1 rounded-full text-[10px] border border-white/20">Chakra UI</span>
              </div>
            </BentoCard>

            {/* Case 2 : Backend */}
            <BentoCard className="md:col-span-2 bg-white border border-gray-100 shadow-sm flex flex-col justify-center gap-3 !p-6">
              <div className="flex items-center gap-4">
                <div className="bg-green-50 w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">🐍</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Back-End & Base de Données</h3>
                  <p className="text-gray-500 text-xs mt-1">Serveurs et architecture REST (Python, Django, SQL).</p>
                </div>
              </div>
              <div className="border-t border-gray-100 mt-1 pt-3">
                <p className="text-xs text-gray-600 leading-relaxed">
                  <strong>🎯 Application :</strong> Développement de l'API backend et de la base de données pour le module de contact chez Caplogy.
                </p>
              </div>
            </BentoCard>

            {/* Case 3 : C# (Vigenère) */}
            <BentoCard className="bg-purple-50 !p-5 border border-purple-100 flex flex-col justify-center items-center text-center group">
              <motion.span 
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl mb-2"
              >
                🔐
              </motion.span>
              <h3 className="font-bold text-purple-900 text-xs italic mb-1">C# / .NET</h3>
              <p className="text-[10px] text-purple-800 leading-tight">
                POO pour un algorithme <strong>Vigenère</strong>.
              </p>
            </BentoCard>

            {/* Case 4 : Outils & SEO */}
            <BentoCard className="md:col-span-1 bg-gray-900 !p-5 text-white flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute -right-4 -bottom-4 opacity-20 text-5xl rotate-12 group-hover:rotate-0 transition-transform duration-500">⚙️</div>
              <h3 className="text-base font-bold mb-2">Workflow & Audit</h3>
              <p className="text-[10px] text-gray-400 mb-3 leading-relaxed">
                Versionning et optimisation web.
              </p>
              <ul className="text-[10px] text-gray-300 space-y-1.5 mt-auto z-10">
                <li className="flex items-center gap-2"><span className="text-blue-400">●</span> Git & GitHub</li>
                <li className="flex items-center gap-2"><span className="text-orange-400">●</span> Lighthouse</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">●</span> Méthode Agile</li>
              </ul>
            </BentoCard>

          </div>
        </Section>

        {/* --- ZONE FINALE SOMBRE (Veille + Contact + Footer) --- */}
        <div className="bg-gray-950 text-white transition-colors duration-500">
          
          {/* SECTION VEILLE RE-STYLISÉE */}
          <Section id="veille" className="py-24 bg-transparent text-white scroll-mt-20">
            <div className="max-w-6xl mx-auto px-6">
              
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-6 inline-block pb-2">
                  Veille Technologique
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  Suivi de l'évolution de <span className="text-blue-400 font-bold">l'Intelligence Artificielle dans le secteur automobile</span> : des systèmes d'aide à la conduite jusqu'à l'autonomie complète.
                </p>
              </div>

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
          </Section>

          {/* SECTION CONTACT */}
          <Section id="contact" className="py-20 border-t border-gray-900">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold mb-6">On travaille ensemble ?</h2>
              <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
                Passionné par le développement et toujours prêt pour de nouveaux défis techniques. 
                <span className="block mt-2 text-blue-400 font-medium">
                  Explorez mon code sur GitHub ou rejoignez-moi sur LinkedIn pour échanger sur mon parcours !
                </span>
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href="mailto:TON_EMAIL@exemple.com" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-transform hover:scale-105 shadow-lg shadow-blue-900/20"
                >
                  Me contacter par mail
                </a>
                
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/in/melvyn-troh-633439327/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center hover:border-blue-500 transition-colors text-xl"
                  >
                    in
                  </a>
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
          </Section>

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