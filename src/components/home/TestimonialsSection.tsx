import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Star, Play, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Chief Adebayo Ogundimu",
    role: "Homeowner, Lagos",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format",
    quote: "TVICL transformed our vision into reality. The smart home features have completely changed how we live. The quality is exceptional.",
    project: "Luxury Villa, Lekki",
    rating: 5,
    hasVideo: true,
  },
  {
    id: 2,
    name: "Mrs. Chioma Eze",
    role: "Business Owner, Abuja",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&auto=format",
    quote: "The live construction dashboard gave me peace of mind. I watched every milestone from my office. Truly innovative approach.",
    project: "Corporate Office, Maitama",
    rating: 5,
    hasVideo: true,
  },
  {
    id: 3,
    name: "Engr. Oluwaseun Bakare",
    role: "Property Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format",
    quote: "As a fellow engineer, I'm impressed by their attention to detail. The 147-point quality checklist is not just marketing - it's real.",
    project: "Estate Development, Owerri",
    rating: 5,
    hasVideo: false,
  },
  {
    id: 4,
    name: "Dr. Amina Mohammed",
    role: "Healthcare Executive",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format",
    quote: "From the AI cost estimator to the final handover, TVICL exceeded expectations. Our hospital wing was delivered ahead of schedule.",
    project: "Medical Center, Lagos",
    rating: 5,
    hasVideo: true,
  },
];

export const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className={cn(
              "font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 opacity-0",
              isVisible && "animate-fade-in-up"
            )}
          >
            Why Clients
            <br />
            <span className="text-gradient-gold">Choose TVICL</span>
          </h2>
          <p
            className={cn(
              "text-lg text-muted-foreground max-w-2xl mx-auto opacity-0",
              isVisible && "animate-fade-in-up"
            )}
            style={{ animationDelay: "0.1s" }}
          >
            Don't just take our word for it. Hear from the families and 
            businesses who trusted us with their dreams.
          </p>

          {/* Rating Summary */}
          <div
            className={cn(
              "inline-flex items-center gap-3 mt-6 px-6 py-3 rounded-full glass opacity-0",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-5 h-5 text-secondary fill-secondary"
                />
              ))}
            </div>
            <span className="font-display font-bold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">from 200+ reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                "group glass rounded-2xl p-6 card-hover opacity-0",
                isVisible && "animate-fade-in-up"
              )}
              style={{ animationDelay: `${0.1 * index + 0.3}s` }}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-secondary/30 mb-4" />

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {testimonial.hasVideo && (
                      <button className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-3 h-3 text-secondary-foreground fill-current" />
                      </button>
                    )}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Project Tag */}
                <div className="hidden sm:block px-3 py-1 rounded-full bg-muted/50 text-xs text-muted-foreground">
                  {testimonial.project}
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mt-4 pt-4 border-t border-border/30">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-secondary fill-secondary"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
