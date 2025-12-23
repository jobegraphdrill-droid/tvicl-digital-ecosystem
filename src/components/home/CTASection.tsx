import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";

export const CTASection = () => {
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
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-secondary/10 rounded-full blur-[200px]" />
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
            Ready to Build
            <br />
            <span className="text-gradient-gold">Your Dream?</span>
          </h2>
          <p
            className={cn(
              "text-lg text-muted-foreground max-w-2xl mx-auto opacity-0",
              isVisible && "animate-fade-in-up"
            )}
            style={{ animationDelay: "0.1s" }}
          >
            Take the first step towards your vision. Whether you're ready to 
            start or just exploring, we're here to help.
          </p>
        </div>

        {/* Two Paths */}
        <div
          className={cn(
            "grid md:grid-cols-2 gap-6 max-w-4xl mx-auto opacity-0",
            isVisible && "animate-fade-in-up"
          )}
          style={{ animationDelay: "0.2s" }}
        >
          {/* Path 1 - Quiz */}
          <div className="group glass rounded-3xl p-8 text-center card-hover border border-secondary/20 hover:border-secondary/50 transition-colors">
            <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/30 transition-colors">
              <Sparkles className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-display font-bold text-2xl text-foreground mb-3">
              Take the Quiz
            </h3>
            <p className="text-muted-foreground mb-6">
              Find your perfect build in just 2 minutes. Our smart quiz matches 
              your vision with our expertise.
            </p>
            <ul className="text-sm text-muted-foreground mb-8 space-y-2">
              <li>✓ Personalized recommendations</li>
              <li>✓ Instant cost estimates</li>
              <li>✓ Smart home suggestions</li>
            </ul>
            <Button variant="gold" size="lg" className="w-full group/btn">
              <span>Start Quiz</span>
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Path 2 - Meeting */}
          <div className="group glass rounded-3xl p-8 text-center card-hover border border-accent/20 hover:border-accent/50 transition-colors">
            <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/30 transition-colors">
              <Calendar className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-display font-bold text-2xl text-foreground mb-3">
              Book a Meeting
            </h3>
            <p className="text-muted-foreground mb-6">
              Speak directly with our expert team. Get answers to all your 
              questions in a personalized session.
            </p>
            <ul className="text-sm text-muted-foreground mb-8 space-y-2">
              <li>✓ One-on-one consultation</li>
              <li>✓ Site visit scheduling</li>
              <li>✓ Detailed project planning</li>
            </ul>
            <Button variant="bronze" size="lg" className="w-full group/btn">
              <span>Schedule Now</span>
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Trust Badge */}
        <div
          className={cn(
            "text-center mt-12 opacity-0",
            isVisible && "animate-fade-in"
          )}
          style={{ animationDelay: "0.4s" }}
        >
          <p className="text-sm text-muted-foreground">
            Join <span className="text-secondary font-semibold">200+ satisfied clients</span> who 
            trusted TVICL with their dreams
          </p>
        </div>
      </div>
    </section>
  );
};
