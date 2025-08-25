import videoCallIcon from "@/assets/video-call-icon.png";
import friendshipIcon from "@/assets/friendship-icon.png";
import giftingIcon from "@/assets/gifting-icon.png";
import moderationIcon from "@/assets/moderation-icon.png";
import aiAvatarIcon from "@/assets/ai-avatar-icon.png";

const FeaturesSection = () => {
  const features = [
    {
      icon: videoCallIcon,
      title: "Sexy Video Calls in 2.00₹"
    },
    {
      icon: friendshipIcon,
      title: "FRND-ship via Matchmaker on Audio Streaming"
    },
    {
      icon: giftingIcon,
      title: "Virtual Gifting driven Monetisation"
    },
    {
      icon: moderationIcon,
      title: "Moderated / Non-sleazy Community"
    },
    {
      icon: aiAvatarIcon,
      title: "No pictures Only AI avatars"
    }
  ];

  return (
    <section className="py-12 px-4 bg-background">
      <div className="container max-w-4xl mx-auto">
        <div className="space-y-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 p-2 flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        {/* Feature Image */}
        <div className="mt-12 text-center">
          <img
            src="https://melodious-sawine-2b391d.netlify.app/frnd.app/index.htmlstatic/media/features.c55f6918.png"
            alt="App Features"
            className="mx-auto max-w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;