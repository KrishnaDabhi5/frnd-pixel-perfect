import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MediaCoverageSection = () => {
  const articles = [
    {
      title: "BGMI creator Krafton leads $6.5 million funding round in FRND app",
      image: "https://img.etimg.com/thumb/msid-88377512,width-650,imgsize-7584,,resizemode-4,quality-100/frnd.jpg",
      source: "Economic Times",
      excerpt: "Krafton, the company behind BGMI, has led a $6.5 million funding round in the social networking app FRND.",
      url: "#"
    },
    {
      title: "PUBG-Maker KRAFTON Invests $6.5 Mn In Gamified friend making app FRND",
      image: "https://d1jns1sy0m2jd7.cloudfront.net/frnd_media/post_media/krafton_news_4x.webp",
      source: "Inc42",
      excerpt: "The audio-first social networking platform FRND has raised $6.5 million in funding from Krafton.",
      url: "#"
    },
    {
      title: "Battlegrounds Mobile India maker Krafton leads $6.5-million funding in audio friend making app FRND",
      image: "https://images.moneycontrol.com/static-mcnews/2021/07/dating-app-love-algorithm-alexander-sinn-KgLtFCgfC28-unsplash-770x433.jpg?impolicy=website&width=770&height=431",
      source: "Moneycontrol",
      excerpt: "FRND, an audio-first friend-making app, has secured $6.5 million in funding led by Krafton.",
      url: "#"
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Media Coverages
          </h2>
          <p className="text-lg text-muted-foreground">
            See what the media is saying about FRND's journey and success
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              {/* Article Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Article Content */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                    {article.source}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-foreground mb-3 line-clamp-3 leading-tight">
                  {article.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80">
                  Read more
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaCoverageSection;