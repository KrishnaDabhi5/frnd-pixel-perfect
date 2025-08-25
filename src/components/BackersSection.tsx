const BackersSection = () => {
  return (
    <section className="py-12 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Backed by
          </h2>
        </div>

        <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
          <div className="grayscale hover:grayscale-0 transition-all duration-300">
            <img
              src="https://frnd.app/static/media/krafton.png"
              alt="Krafton"
              className="h-12 md:h-16 object-contain"
              loading="lazy"
            />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all duration-300">
            <img
              src="https://frnd.app/static/media/lumikai.png"
              alt="Lumikai"
              className="h-12 md:h-16 object-contain"
              loading="lazy"
            />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all duration-300">
            <img
              src="https://frnd.app/static/media/3one4capital.png"
              alt="3one4 Capital"
              className="h-12 md:h-16 object-contain"
              loading="lazy"
            />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all duration-300">
            <img
              src="https://frnd.app/static/media/wavemaker.png"
              alt="Wavemaker"
              className="h-12 md:h-16 object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackersSection;