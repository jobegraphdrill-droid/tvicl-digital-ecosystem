import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Maximize2, Play } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Oceanview Luxury Residence",
    location: "Lekki Phase 1, Lagos",
    type: "Residential",
    size: "850 sqm",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&auto=format",
    description: "A stunning 6-bedroom smart home with ocean views, featuring automated climate control, security systems, and integrated entertainment.",
  },
  {
    id: 2,
    title: "Emerald Corporate Tower",
    location: "Central Business District, Abuja",
    type: "Commercial",
    size: "12,000 sqm",
    year: "2023",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format",
    description: "A 15-story commercial building with LEED certification, featuring sustainable design and cutting-edge workspace technology.",
  },
  {
    id: 3,
    title: "Palm Gardens Estate",
    location: "New Owerri, Imo",
    type: "Mixed-Use",
    size: "5,000 sqm",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&auto=format",
    description: "An exclusive gated community featuring 24 luxury townhouses with shared amenities including a clubhouse and swimming pool.",
  },
  {
    id: 4,
    title: "Unity Shopping Mall",
    location: "Ikeja, Lagos",
    type: "Retail",
    size: "18,000 sqm",
    year: "2023",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1200&auto=format",
    description: "A modern retail destination with over 100 stores, cinema complex, food court, and underground parking for 500 vehicles.",
  },
];

export const FeaturedProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const activeProject = projects[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-background relative overflow-hidden"
    >
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2
              className={cn(
                "font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 opacity-0",
                isVisible && "animate-fade-in-up"
              )}
            >
              Masterpieces That
              <br />
              <span className="text-gradient-gold">Define Excellence</span>
            </h2>
            <p
              className={cn(
                "text-lg text-muted-foreground max-w-xl opacity-0",
                isVisible && "animate-fade-in-up"
              )}
              style={{ animationDelay: "0.1s" }}
            >
              Explore our portfolio of landmark projects across Nigeria. 
              Each one a testament to innovation, quality, and client satisfaction.
            </p>
          </div>

          {/* Navigation */}
          <div
            className={cn(
              "flex items-center gap-3 opacity-0",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "0.2s" }}
          >
            <Button
              variant="glass"
              size="icon"
              onClick={prevProject}
              className="rounded-full"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <span className="text-sm text-muted-foreground font-medium">
              {activeIndex + 1} / {projects.length}
            </span>
            <Button
              variant="glass"
              size="icon"
              onClick={nextProject}
              className="rounded-full"
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Main Project Display */}
        <div
          className={cn(
            "grid lg:grid-cols-2 gap-8 opacity-0",
            isVisible && "animate-fade-in-up"
          )}
          style={{ animationDelay: "0.3s" }}
        >
          {/* Image */}
          <div className="relative group rounded-3xl overflow-hidden aspect-[4/3]">
            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            
            {/* Overlay Actions */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button variant="glass" size="lg" className="gap-2">
                <Play className="w-5 h-5 fill-current" />
                3D Tour
              </Button>
              <Button variant="glass" size="icon" className="rounded-full">
                <Maximize2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Type Badge */}
            <div className="absolute top-4 left-4 px-4 py-2 rounded-full glass">
              <span className="text-sm font-medium text-foreground">
                {activeProject.type}
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2">
              {activeProject.title}
            </h3>
            <p className="text-secondary font-medium mb-4">
              {activeProject.location}
            </p>
            <p className="text-muted-foreground mb-6">
              {activeProject.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-display font-bold text-secondary">
                  {activeProject.size}
                </div>
                <div className="text-sm text-muted-foreground">Total Area</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-display font-bold text-secondary">
                  {activeProject.year}
                </div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-display font-bold text-secondary">
                  147
                </div>
                <div className="text-sm text-muted-foreground">Quality Points</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button variant="gold" size="lg" className="gap-2">
                View Case Study
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="gold-outline" size="lg">
                Before/After
              </Button>
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div
          className={cn(
            "flex gap-4 mt-8 overflow-x-auto pb-4 opacity-0",
            isVisible && "animate-fade-in"
          )}
          style={{ animationDelay: "0.5s" }}
        >
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "flex-shrink-0 w-32 h-24 rounded-xl overflow-hidden border-2 transition-all duration-300",
                activeIndex === index
                  ? "border-secondary ring-2 ring-secondary/30"
                  : "border-transparent opacity-60 hover:opacity-100"
              )}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
