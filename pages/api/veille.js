import Parser from 'rss-parser';

export default async function handler(req, res) {
  const parser = new Parser({
    customFields: {
      item: [['source', 'sourceName']], // Permet de récupérer proprement le nom du média (Ex: L'Usine Nouvelle, Frandroid...)
    }
  });
  
  try {
    // URL encodée pour chercher : "IA" AND ("automobile" OR "voiture autonome")
    const searchUrl = 'https://news.google.com/rss/search?q=IA+%22automobile%22+OR+%22voiture+autonome%22&hl=fr&gl=FR&ceid=FR:fr';
    
    const feed = await parser.parseURL(searchUrl);

    // On récupère les 3 articles les plus récents
    const articles = feed.items.slice(0, 3).map(item => {
      // Nettoyage du titre : Google News ajoute souvent " - Nom du média" à la fin du titre
      const cleanTitle = item.title.split(' - ')[0];
      
      return {
        title: cleanTitle,
        link: item.link,
        // Formatage de la date en français
        date: new Date(item.pubDate).toLocaleDateString('fr-FR', { 
          day: 'numeric', 
          month: 'long', 
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        // Si la source custom n'est pas trouvée, on cherche dans item.source, sinon "Actualité Automobile"
        source: item.sourceName || (item.source ? item.source._ : "Actualité Automobile")
      };
    });

    // Configuration des headers pour éviter le cache et garantir du contenu en temps réel le jour de l'examen
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.status(200).json(articles);
    
  } catch (error) {
    console.error("Erreur script veille :", error);
    res.status(500).json({ error: 'Impossible de charger les actualités en temps réel.' });
  }
}