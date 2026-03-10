import "@/styles/globals.css";

export default function App({ Component, pageProps, router }) {
  return (
    // La clé (key) force React à rejouer l'animation quand l'URL change
    <div key={router.route} className="animate-page">
      <Component {...pageProps} />
    </div>
  );
}