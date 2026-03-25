import '@/styles/globals.css'
import InteractiveGrid from '../components/InteractiveGrid' // <-- On importe le nouveau composant

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* La grille interactive affichée sur tout le site */}
      <InteractiveGrid />
      
      <div className="relative z-10">
        <Component {...pageProps} />
      </div>
    </>
  )
}