import { useEffect, useRef } from 'react';

export default function MouseGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      
      if (glowRef.current) {
        glowRef.current.animate({
          left: `${clientX}px`,
          top: `${clientY}px`
        }, { duration: 2500, fill: "forwards" }); 
      }
    };

    window.addEventListener("pointermove", handleMouseMove);
    return () => window.removeEventListener("pointermove", handleMouseMove);
  }, []);

  return (
    <div 
      ref={glowRef}
      // On le passe en z-50 pour qu'il soit au-dessus de tout
      className="pointer-events-none fixed z-50 w-[500px] h-[500px] rounded-full bg-blue-300/20 blur-[100px] -translate-x-1/2 -translate-y-1/2 mix-blend-multiply"
      style={{
        left: '50%',
        top: '50%',
      }}
    />
  );
}