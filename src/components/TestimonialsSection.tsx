import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Hope",
      avatar: "https://frnd.app/static/media/user1.85644ba7.png",
      rating: 5,
      content: "APP ki Journey bohut achi thi, Pyar ho gya ish app se. busy life me thora sa waqt yaha bita kar maja aa jata hai,💝itne ache dost dene k liye🤗 Tq"
    },
    {
      name: "Rj Vijaya",
      avatar: "https://frnd.app/static/media/user2.54d14981.png",
      rating: 5,
      content: "I think to be a part of FRND app is the one of the best decision of my life. i was struggling a lot and in the main covid time. I believe people should come play with us on FRND"
    },
    {
      name: "RJ Anju..😍",
      avatar: "https://frnd.app/static/media/user3.3b67c2a6.png",
      rating: 5,
      content: "I really love this application 😊 I got good friends from this app 🙂Yahan Logon se baten karna bahut Achcha lagta hai. Fabulous app"
    }
  ];

  return (
    <section className="py-12 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Our users love us
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                {testimonial.content}
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{testimonial.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;