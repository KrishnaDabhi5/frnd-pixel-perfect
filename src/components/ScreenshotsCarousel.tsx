import { useState } from "react";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScreenshotsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const screenshots = [
    "https://play-lh.googleusercontent.com/0L5aqd2hxUq5gyssh9sMHcywOwOOTJFFWnSf5_mcS_VKoFUS2wm_WMGCTj-o9n8lAw=w1052-h592-rw",
    "https://play-lh.googleusercontent.com/WQw9QBY90Y9jOgNSNoFAK7pH9T5SkYNCflhwFyIElJdfG6eEYJ6qx8OtEfn2xmoE9Vk=w1052-h592-rw",
    "https://play-lh.googleusercontent.com/2YiTHYVwB8iQ2YUneWZI7V8xM5EZLtiSWYQ2Dl2BtnOx_qbWI2qGDopgqcdM34eGOFY=w1052-h592-rw"
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="py-12 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="relative">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {screenshots.map((screenshot, index) => (
                <div key={index} className="w-full flex-shrink-0 relative group">
                  <img
                    src={screenshot}
                    alt={`App Screenshot ${index + 1}`}
                    className="w-full h-auto max-h-[400px] md:max-h-[500px] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm" className="bg-white/90 hover:bg-white text-black">
                      <Expand className="w-4 h-4 mr-2" />
                      View Full
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-0 shadow-lg"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-0 shadow-lg"
            disabled={currentIndex === screenshots.length - 1}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-primary shadow-lg scale-110" 
                    : "bg-muted hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsCarousel;