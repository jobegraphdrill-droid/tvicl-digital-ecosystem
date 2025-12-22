import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Building2, 
  Clock, 
  MapPin, 
  Star, 
  Headphones, 
  Award 
} from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: 200,
    suffix: "+",
    label: "Projects Completed",
    description: "Across residential, commercial & industrial",
  },
  {
    icon: Clock,
    value: 10,
    suffix: "",
    label: "Years of Excellence",
    description: "Building trust since 2014",
  },
  {
    icon: MapPin,
    value: 5,
    suffix: "",
    label: "Cities Nationwide",
    description: "Lagos, Abuja, Owerri & more",
  },
  {
    icon: Star,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Based on 200+ reviews",
  },
  {
    icon: Headphones,
    value: 24,
    suffix: "/7",
    label: "Support Available",
    description: "Always here when you need us",
  },
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Industry Awards",
    description: "Recognized for excellence",
  },
];

const AnimatedCounter = ({ 
  value, 
  suffix, 
  isVisible 
}: { 
  value: number; 
  suffix: string; 
  isVisible: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span className="font-display font-bold text-4xl md:text-5xl text-secondary tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

export const TrustIndicators = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-card relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--secondary)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-secondary/5 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={cn(
              "font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 opacity-0",
              isVisible && "animate-fade-in-up"
            )}
          >
            Trusted by
            <span className="text-gradient-gold"> Thousands</span>
          </h2>
          <p
            className={cn(
              "text-lg text-muted-foreground max-w-2xl mx-auto opacity-0",
              isVisible && "animate-fade-in-up"
            )}
            style={{ animationDelay: "0.2s" }}
          >
            Numbers that speak to our commitment to excellence in every project
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "text-center p-6 rounded-2xl glass group hover:bg-muted/30 transition-colors duration-300 opacity-0",
                isVisible && "animate-fade-in-up"
              )}
              style={{ animationDelay: `${0.1 * index + 0.3}s` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary/10 mb-4 group-hover:bg-secondary/20 transition-colors">
                <stat.icon className="w-7 h-7 text-secondary" />
              </div>

              {/* Value */}
              <div className="mb-2">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                />
              </div>

              {/* Label */}
              <h3 className="font-display font-semibold text-foreground mb-1">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Live Ticker */}
        <div
          className={cn(
            "mt-12 flex items-center justify-center gap-3 opacity-0",
            isVisible && "animate-fade-in"
          )}
          style={{ animationDelay: "1s" }}
        >
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <p className="text-sm text-muted-foreground">
            <span className="text-foreground font-medium">Latest update:</span>{" "}
            Lagos Villa - Foundation Complete • 2 hours ago
          </p>
        </div>
      </div>
    </section>
  );
};
