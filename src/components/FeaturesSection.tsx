import videoCallIcon from "@/assets/video-call-icon.png";
import friendshipIcon from "@/assets/friendship-icon.png";
import giftingIcon from "@/assets/gifting-icon.png";
import moderationIcon from "@/assets/moderation-icon.png";
import aiAvatarIcon from "@/assets/ai-avatar-icon.png";

const FeaturesSection = () => {
  const features = [
    {
      icon: videoCallIcon,
      title: "Sexy Video Calls in 2.00₹",
      description: "Connect with people through affordable video calls starting at just ₹2"
    },
    {
      icon: friendshipIcon,
      title: "FRND-ship via Matchmaker on Audio Streaming",
      description: "Find meaningful connections through our intelligent audio-based matchmaking system"
    },
    {
      icon: giftingIcon,
      title: "Virtual Gifting driven Monetisation",
      description: "Express yourself and support creators through our virtual gifting platform"
    },
    {
      icon: moderationIcon,
      title: "Moderated / Non-sleazy Community",
      description: "Enjoy a safe, respectful community with active moderation and community guidelines"
    },
    {
      icon: aiAvatarIcon,
      title: "No pictures Only AI avatars",
      description: "Maintain privacy while connecting through AI-generated avatars instead of real photos"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background via-app-gray to-app-pink-light">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose FRND?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover amazing features that make FRND the perfect platform for meaningful connections
          </p>
        </div>

        <div className="grid gap-8 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 rounded-2xl bg-card shadow-lg hover:shadow-xl transition-all duration-300 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-primary/10 p-4 flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;