const BackersSection = () => {
  const backers = [
    {
      name: "Krafton",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Krafton_logo.svg/1200px-Krafton_logo.svg.png",
      description: "Leading gaming company"
    },
    {
      name: "Venture Partner",
      logo: "https://via.placeholder.com/200x80/E53E3E/FFFFFF?text=VP",
      description: "Investment firm"
    },
    {
      name: "Tech Accelerator",
      logo: "https://via.placeholder.com/200x80/E53E3E/FFFFFF?text=TA",
      description: "Technology accelerator"
    },
    {
      name: "Angel Investor",
      logo: "https://via.placeholder.com/200x80/E53E3E/FFFFFF?text=AI",
      description: "Angel investment network"
    }
  ];

  return (
    <section className="py-16 px-4 bg-app-gray">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Backed by
          </h2>
          <p className="text-muted-foreground">
            Trusted by leading investors and industry partners
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {backers.map((backer, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-lg hover:bg-background/50 transition-colors duration-300"
            >
              <div className="w-full h-16 flex items-center justify-center mb-3 bg-white rounded-lg shadow-sm p-3">
                <img
                  src={backer.logo}
                  alt={backer.name}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-center text-muted-foreground font-medium">
                {backer.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BackersSection;