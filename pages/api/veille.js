import Parser from 'rss-parser';

export default async function handler(req, res) {
  const parser = new Parser();
  
  try {
    // On interroge Google News avec les mots clés "Intelligence Artificielle Automobile"
    const feed = await parser.parseURL('https://news.google.com/rss/search?q=Intelligence+Artificielle+Automobile&hl=fr&gl=FR&ceid=FR:fr');

    // On nettoie les données pour ne garder que les 3 articles les plus récents
    const articles = feed.items.slice(0, 3).map(item => ({
      title: item.title,
      link: item.link,
      // On formate la date pour qu'elle soit jolie
      date: new Date(item.pubDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
      source: item.creator || "Tech News"
    }));

    // On renvoie ces articles à notre Front-End
    res.status(200).json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la récupération des articles' });
  }
}