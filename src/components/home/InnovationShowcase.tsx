import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const innovations = [
  {
    id: 1,
    icon: "🏗️",
    title: "Interactive Home Builder",
    description: "Design your dream home in 60 seconds with our AI-powered builder",
    color: "secondary",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    id: 2,
    icon: "📍",
    title: "Live Construction Sites",
    description: "Watch your project being built in real-time with 24/7 cameras",
    color: "accent",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    id: 3,
    icon: "🎮",
    title: "Smart Home Playground",
    description: "Control a real smart home from anywhere in the world",
    color: "secondary",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    id: 4,
    icon: "✅",
    title: "Quality Guarantee",
    description: "147-point inspection checklist for every single project",
    color: "accent",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    id: 5,
    icon: "🧱",
    title: "Materials Library",
    description: "Browse premium materials with AR visualization",
    color: "secondary",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    id: 6,
    icon: "💬",
    title: "AI Construction Expert",
    description: "Get instant answers from our trained AI assistant",
    color: "accent",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    id: 7,
    icon: "🎯",
    title: "Project Matchmaker",
    description: "Find your perfect build with our smart quiz",
    color: "secondary",
    gradient: "from-secondary/20 to-secondary/5",
  },
];

export const InnovationShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [exploredCount, setExploredCount] = useState(0);
  const [exploredIds, setExploredIds] = useState<Set<number>>(new Set());
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

  const handleCardHover = (id: number) => {
    setHoveredId(id);
    if (!exploredIds.has(id)) {
      setExploredIds(new Set([...exploredIds, id]));
      setExploredCount((prev) => Math.min(prev + 1, innovations.length));
    }
  };

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 mb-6 opacity-0",
              isVisible && "animate-fade-in"
            )}
          >
            <span className="text-sm text-muted-foreground font-medium">
              Digital Revolution
            </span>
          </div>

          <h2
            className={cn(
              "font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 opacity-0",
              isVisible && "animate-fade-in-up"
            )}
            style={{ animationDelay: "0.2s" }}
          >
            Experience TVICL's
            <br />
            <span className="text-gradient-gold">7 Innovations</span>
          </h2>

          <p
            className={cn(
              "text-lg text-muted-foreground max-w-2xl mx-auto opacity-0",
              isVisible && "animate-fade-in-up"
            )}
            style={{ animationDelay: "0.3s" }}
          >
            Each innovation is a window into the future of construction. 
            Click to explore and experience them live.
          </p>

          {/* Progress Tracker */}
          <div
            className={cn(
              "mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass opacity-0",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex gap-1">
              {innovations.map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors duration-300",
                    i < exploredCount ? "bg-secondary" : "bg-muted"
                  )}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-2">
              {exploredCount}/{innovations.length} explored
            </span>
          </div>
        </div>

        {/* Innovation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {innovations.map((innovation, index) => (
            <div
              key={innovation.id}
              className={cn(
                "group relative rounded-2xl p-6 glass cursor-pointer card-hover opacity-0",
                isVisible && "animate-fade-in-up",
                hoveredId === innovation.id && "border-secondary/50"
              )}
              style={{ animationDelay: `${0.1 * index + 0.5}s` }}
              onMouseEnter={() => handleCardHover(innovation.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Gradient Background */}
              <div
                className={cn(
                  "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  innovation.gradient
                )}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {innovation.icon}
                </div>

                {/* Title */}
                <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {innovation.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4">
                  {innovation.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sm font-medium text-secondary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Try it live</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Explored Badge */}
              {exploredIds.has(innovation.id) && (
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-secondary animate-pulse" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={cn(
            "text-center mt-12 opacity-0",
            isVisible && "animate-fade-in"
          )}
          style={{ animationDelay: "1s" }}
        >
          <p className="text-muted-foreground mb-4">
            {exploredCount === innovations.length
              ? "🎉 You've explored all innovations!"
              : "Hover over each card to discover more"}
          </p>
        </div>
      </div>
    </section>
  );
};
