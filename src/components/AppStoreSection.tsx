import { Star, Download, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const AppStoreSection = () => {
  return (
    <section className="py-8 px-4 bg-background">
      <div className="container max-w-4xl mx-auto">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* App Icon */}
            <div className="flex-shrink-0">
              <img
                src="https://i.ibb.co/whC9JDTv/Untitled-design-4.png"
                alt="FRND App Icon"
                className="w-20 h-20 md:w-24 md:h-24 rounded-2xl shadow-lg"
              />
            </div>

            {/* App Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Live Sexy Chat - XnXX
              </h1>
              <p className="text-lg font-semibold text-primary mb-4">
                2.00₹ Me Video Calls
              </p>
              
              {/* Rating and Stats */}
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mb-6">
                <div className="text-center">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-2xl font-bold">4.4</span>
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  </div>
                  <p className="text-sm text-muted-foreground">143K reviews</p>
                </div>

                <div className="text-center">
                  <div className="flex items-center gap-1 mb-1">
                    <Users className="w-5 h-5 text-muted-foreground" />
                    <span className="text-xl font-bold">10M+</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Downloads</p>
                </div>

                <div className="text-center">
                  <div className="flex items-center gap-1 mb-1">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <span className="text-xl font-bold">12+</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Rated for 12+</p>
                </div>
              </div>

              {/* Download Button */}
              <Button 
                size="lg" 
                className="w-full md:w-auto px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full shadow-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                DOWNLOAD NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppStoreSection;