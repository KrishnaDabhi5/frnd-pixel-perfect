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
    <section className="py-12 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Media Coverages
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Article Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Article Content */}
              <div className="p-4">
                <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-2 leading-tight">
                  {article.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaCoverageSection;