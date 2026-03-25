import { useEffect, useState } from 'react';

export default function InteractiveGrid() {
  // On place la souris hors de l'écran au démarrage
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    // z-50 pour passer par-dessus tes sections, pointer-events-none pour ne pas bloquer les clics
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      
      {/* 1. Grille de base (Points gris très discrets visibles partout) */}
      <div 
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #9ca3af 1px, transparent 1px)',
          backgroundSize: '24px 24px' // Espace entre chaque point
        }}
      />

      {/* 2. Grille illuminée (Points bleus/verts qui se révèlent) */}
      <div 
        className="absolute inset-0 opacity-80"
        style={{
          // Les points colorés (comme dans ton image)
          backgroundImage: 'radial-gradient(circle at center, #06b6d4 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
          // LE SECRET : Le masque qui cache tout sauf un cercle de 250px autour de la souris
          WebkitMaskImage: `radial-gradient(250px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
          maskImage: `radial-gradient(250px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
        }}
      />
    </div>
  );
}