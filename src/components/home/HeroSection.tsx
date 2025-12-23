import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const rotatingImages = [
  {
    url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    label: "Luxury Exterior",
    type: "exterior"
  },
  {
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    label: "Modern Interior",
    type: "interior"
  },
  {
    url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    label: "Contemporary Villa",
    type: "exterior"
  },
  {
    url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    label: "Elegant Living Room",
    type: "interior"
  },
  {
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    label: "Premium Estate",
    type: "exterior"
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    label: "Smart Kitchen",
    type: "interior"
  },
];

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % rotatingImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient"
    >
      {/* Rotating Background Images */}
      <div className="absolute inset-0 overflow-hidden">
        {rotatingImages.map((image, index) => (
          <div
            key={image.url}
            className={cn(
              "absolute inset-0 transition-all duration-1000 ease-in-out",
              index === currentImageIndex 
                ? "opacity-20 scale-100" 
                : "opacity-0 scale-110"
            )}
            style={{
              backgroundImage: `url(${image.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--secondary)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--secondary)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating Orbs */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[100px] animate-float"
          style={{
            top: "20%",
            left: "10%",
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full bg-accent/5 blur-[80px] animate-float"
          style={{
            top: "50%",
            right: "10%",
            animationDelay: "1s",
            transform: `translate(${-mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full bg-secondary/10 blur-[60px]"
          style={{
            bottom: "10%",
            left: "30%",
            transform: `translate(${mousePosition.x * 15}px, ${-mousePosition.y * 15}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />

        {/* Geometric Shapes */}
        <div 
          className="absolute top-1/4 right-1/4 w-32 h-32 border border-secondary/20 rounded-xl animate-rotate-slow"
          style={{ animationDuration: "25s" }}
        />
        <div 
          className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-accent/20 rounded-full animate-rotate-slow"
          style={{ animationDuration: "20s", animationDirection: "reverse" }}
        />
      </div>

      {/* Rotating 360 Image Showcase - Left Side */}
      <div 
        className={cn(
          "absolute left-4 md:left-8 lg:left-16 top-1/2 -translate-y-1/2 hidden md:block opacity-0",
          isVisible && "animate-fade-in-left"
        )}
        style={{ animationDelay: "1.4s" }}
      >
        <div className="relative w-48 lg:w-64 h-48 lg:h-64">
          {/* Rotating ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-secondary/30 animate-rotate-slow" />
          
          {/* Image container */}
          <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-secondary/50 shadow-lg shadow-secondary/20">
            {rotatingImages.filter(img => img.type === "exterior").map((image, index) => (
              <div
                key={image.url}
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000",
                  rotatingImages[currentImageIndex].url === image.url
                    ? "opacity-100"
                    : "opacity-0"
                )}
                style={{
                  backgroundImage: `url(${image.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            ))}
            {/* Fallback if current isn't exterior */}
            {rotatingImages[currentImageIndex].type !== "exterior" && (
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${rotatingImages.find(img => img.type === "exterior")?.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            )}
          </div>
          
          {/* Label */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Exterior</span>
          </div>
        </div>
      </div>

      {/* Rotating 360 Image Showcase - Right Side */}
      <div 
        className={cn(
          "absolute right-4 md:right-8 lg:right-16 top-1/2 -translate-y-1/2 hidden md:block opacity-0",
          isVisible && "animate-fade-in-right"
        )}
        style={{ animationDelay: "1.6s" }}
      >
        <div className="relative w-48 lg:w-64 h-48 lg:h-64">
          {/* Rotating ring - reverse direction */}
          <div 
            className="absolute inset-0 rounded-full border-2 border-dashed border-accent/30 animate-rotate-slow"
            style={{ animationDirection: "reverse" }}
          />
          
          {/* Image container */}
          <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-accent/50 shadow-lg shadow-accent/20">
            {rotatingImages.filter(img => img.type === "interior").map((image, index) => (
              <div
                key={image.url}
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000",
                  rotatingImages[currentImageIndex].url === image.url
                    ? "opacity-100"
                    : "opacity-0"
                )}
                style={{
                  backgroundImage: `url(${image.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            ))}
            {/* Fallback if current isn't interior */}
            {rotatingImages[currentImageIndex].type !== "interior" && (
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${rotatingImages.find(img => img.type === "interior")?.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            )}
          </div>
          
          {/* Label */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Interior</span>
          </div>
        </div>
      </div>

      {/* Image Indicator Dots */}
      <div 
        className={cn(
          "absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-0",
          isVisible && "animate-fade-in"
        )}
        style={{ animationDelay: "1.8s" }}
      >
        {rotatingImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentImageIndex 
                ? "bg-secondary w-6" 
                : "bg-muted-foreground/50 hover:bg-muted-foreground"
            )}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-10 text-center">
        {/* Badge */}
        <div
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 mb-8 opacity-0",
            isVisible && "animate-fade-in"
          )}
          style={{ animationDelay: "0.2s" }}
        >
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span className="text-sm text-muted-foreground font-medium">
            Nigeria's #1 Smart Construction Company
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className={cn(
            "font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-6 opacity-0",
            isVisible && "animate-fade-in-up"
          )}
          style={{ animationDelay: "0.4s" }}
        >
          <span className="text-foreground">Building Nigeria's Future,</span>
          <br />
          <span className="text-gradient-gold">One Innovation</span>
          <span className="text-foreground"> at a Time</span>
        </h1>

        {/* Subtitle */}
        <p
          className={cn(
            "text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0",
            isVisible && "animate-fade-in-up"
          )}
          style={{ animationDelay: "0.6s" }}
        >
          Experience the future of construction with live project tracking, 
          smart home integration, and AI-powered solutions. 
          Transform your vision into reality.
        </p>

        {/* CTA Buttons */}
        <div
          className={cn(
            "flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0",
            isVisible && "animate-fade-in-up"
          )}
          style={{ animationDelay: "0.8s" }}
        >
          <Button variant="hero" size="xl" className="group">
            <span>Design Your Home</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="hero-secondary" size="xl" className="group">
            <Play className="w-5 h-5" />
            <span>Explore Smart Homes</span>
          </Button>
        </div>

        {/* Stats Row */}
        <div
          className={cn(
            "flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-0",
            isVisible && "animate-fade-in-up"
          )}
          style={{ animationDelay: "1s" }}
        >
          {[
            { value: "200+", label: "Projects Completed" },
            { value: "10", label: "Years of Excellence" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "5", label: "Cities Nationwide" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-3xl md:text-4xl text-secondary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className={cn(
          "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-secondary transition-colors opacity-0",
          isVisible && "animate-fade-in"
        )}
        style={{ animationDelay: "1.2s" }}
      >
        <span className="text-sm font-medium">Scroll to explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
