import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Eye, Clock, MapPin } from "lucide-react";

const liveProjects = [
  {
    id: 1,
    name: "Lagos Luxury Villa",
    location: "Lekki, Lagos",
    progress: 67,
    phase: "Interior Finishing",
    viewers: 24,
    lastUpdate: "2 mins ago",
    thumbnail: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format",
  },
  {
    id: 2,
    name: "Abuja Corporate Tower",
    location: "Maitama, Abuja",
    progress: 34,
    phase: "Structural Work",
    viewers: 18,
    lastUpdate: "5 mins ago",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format",
  },
  {
    id: 3,
    name: "Owerri Smart Estate",
    location: "New Owerri",
    progress: 89,
    phase: "Final Touches",
    viewers: 12,
    lastUpdate: "8 mins ago",
    thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format",
  },
];

export const LiveProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
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

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6 opacity-0",
                isVisible && "animate-fade-in"
              )}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              <span className="text-sm text-accent font-medium">
                3 Projects Building Today
              </span>
            </div>

            {/* Heading */}
            <h2
              className={cn(
                "font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 opacity-0",
                isVisible && "animate-fade-in-up"
              )}
              style={{ animationDelay: "0.1s" }}
            >
              Watch Dreams
              <br />
              <span className="text-gradient-teal">Come Alive</span>
            </h2>

            {/* Description */}
            <p
              className={cn(
                "text-lg text-muted-foreground mb-8 opacity-0",
                isVisible && "animate-fade-in-up"
              )}
              style={{ animationDelay: "0.2s" }}
            >
              Our live construction dashboard gives you unprecedented access 
              to watch your project progress in real-time. 24/7 cameras, 
              instant updates, and complete transparency.
            </p>

            {/* Features List */}
            <div
              className={cn(
                "space-y-4 mb-8 opacity-0",
                isVisible && "animate-fade-in-up"
              )}
              style={{ animationDelay: "0.3s" }}
            >
              {[
                "Real-time camera feeds from construction sites",
                "Daily progress photos and video updates",
                "Milestone notifications sent to your phone",
                "Compare with timeline to track schedule",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              variant="teal"
              size="lg"
              className={cn(
                "group opacity-0",
                isVisible && "animate-fade-in-up"
              )}
              style={{ animationDelay: "0.4s" }}
            >
              <span>View All Live Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right - Live Project Cards */}
          <div
            className={cn(
              "space-y-4 opacity-0",
              isVisible && "animate-fade-in-right"
            )}
            style={{ animationDelay: "0.3s" }}
          >
            {liveProjects.map((project, index) => (
              <div
                key={project.id}
                className={cn(
                  "group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500",
                  activeProject === index
                    ? "ring-2 ring-accent shadow-lg shadow-accent/20"
                    : "hover:ring-1 hover:ring-border"
                )}
                onClick={() => setActiveProject(index)}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-6 flex items-center gap-6">
                  {/* Play Button */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-accent/20 backdrop-blur-xl flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                      <Play className="w-6 h-6 text-accent fill-accent" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-red-300 animate-ping" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-grow">
                    <h3 className="font-display font-semibold text-lg text-foreground mb-1 group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {project.viewers} watching
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">{project.phase}</span>
                        <span className="text-accent font-medium">{project.progress}%</span>
                      </div>
                      <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-teal-gradient rounded-full transition-all duration-1000"
                          style={{ width: isVisible ? `${project.progress}%` : "0%" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Time */}
                  <div className="hidden sm:flex flex-col items-end text-sm">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      Updated
                    </span>
                    <span className="text-foreground font-medium">
                      {project.lastUpdate}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
