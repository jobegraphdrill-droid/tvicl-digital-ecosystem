import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  ArrowRight, 
  Shield, 
  Heart, 
  Users, 
  Award,
  MapPin,
  Calendar,
  Building2,
  CheckCircle
} from "lucide-react";

const milestones = [
  { year: "2014", title: "Founded", description: "Started with a vision to revolutionize Nigerian construction" },
  { year: "2016", title: "First Major Project", description: "Completed 50-unit residential estate in Lagos" },
  { year: "2018", title: "Expansion", description: "Opened offices in Abuja and Owerri" },
  { year: "2020", title: "Smart Integration", description: "Launched smart home technology division" },
  { year: "2022", title: "Innovation Leader", description: "Introduced live construction dashboard" },
  { year: "2024", title: "Digital Future", description: "Launched AI-powered construction platform" },
];

const team = [
  {
    name: "Rtn/Amb. Tosin Elizabeth",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format",
    bio: "Visionary leader with 15+ years in construction and real estate development.",
  },
  {
    name: "Engr. Onur Vurgun",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format",
    bio: "International construction expert from Turkey with expertise in smart buildings.",
  },
  {
    name: "Arch. Orhan Bartu",
    role: "Chief Architect",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format",
    bio: "Award-winning architect specializing in sustainable and modern designs.",
  },
  {
    name: "Mrs. Adaeze Okonkwo",
    role: "Operations Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format",
    bio: "Expert in project management with a track record of on-time delivery.",
  },
];

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Zero compromise on worker and site safety. We maintain the highest international standards.",
    stats: "0 major incidents",
  },
  {
    icon: CheckCircle,
    title: "Quality Obsession",
    description: "Our 147-point inspection checklist ensures every project meets excellence standards.",
    stats: "147-point checklist",
  },
  {
    icon: Heart,
    title: "Client Focus",
    description: "Your vision drives everything we do. We listen, adapt, and deliver beyond expectations.",
    stats: "98% satisfaction",
  },
  {
    icon: Users,
    title: "Local Empowerment",
    description: "We prioritize Nigerian talent and suppliers, building communities while building homes.",
    stats: "500+ jobs created",
  },
];

const certifications = [
  "CAC Registered",
  "COREN Certified",
  "ISO 9001:2015",
  "LEED Accredited",
  "NIA Member",
  "NIESV Certified",
];

const About = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  
  const observeSection = (id: string) => (element: HTMLElement | null) => {
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, [id]: true }));
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(element);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-gradient" />
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px]" />
          </div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 mb-6 animate-fade-in">
                <span className="text-sm text-muted-foreground font-medium">
                  Our Story
                </span>
              </div>
              
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 animate-fade-in-up">
                Building Nigeria's Future,
                <br />
                <span className="text-gradient-gold">One Vision at a Time</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in-up delay-100">
                From humble beginnings to becoming Nigeria's most innovative 
                construction company, our journey is driven by a simple belief: 
                everyone deserves a quality-built space they can call home.
              </p>
              
              <div className="flex flex-wrap gap-4 animate-fade-in-up delay-200">
                <Button variant="gold" size="lg">
                  Watch Our Story
                </Button>
                <Button variant="gold-outline" size="lg">
                  Meet the Team
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section 
          ref={observeSection("timeline")}
          className="section-padding bg-card relative overflow-hidden"
        >
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className={cn(
                "font-display font-bold text-3xl md:text-4xl text-foreground mb-4 opacity-0",
                isVisible["timeline"] && "animate-fade-in-up"
              )}>
                Our Journey
              </h2>
              <p className={cn(
                "text-lg text-muted-foreground max-w-2xl mx-auto opacity-0",
                isVisible["timeline"] && "animate-fade-in-up"
              )} style={{ animationDelay: "0.1s" }}>
                A decade of growth, innovation, and commitment to excellence
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/50 hidden md:block" />
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={cn(
                      "grid md:grid-cols-2 gap-8 items-center opacity-0",
                      isVisible["timeline"] && "animate-fade-in-up",
                      index % 2 === 1 && "md:direction-rtl"
                    )}
                    style={{ animationDelay: `${0.1 * index + 0.2}s` }}
                  >
                    <div className={cn(
                      "text-center md:text-right",
                      index % 2 === 1 && "md:text-left md:order-2"
                    )}>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary font-display font-bold text-lg mb-3">
                        <Calendar className="w-4 h-4" />
                        {milestone.year}
                      </div>
                      <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                    <div className={cn(
                      "hidden md:flex justify-center",
                      index % 2 === 1 && "md:order-1"
                    )}>
                      <div className="w-4 h-4 rounded-full bg-secondary border-4 border-background" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section 
          ref={observeSection("team")}
          className="section-padding bg-background"
        >
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className={cn(
                "font-display font-bold text-3xl md:text-4xl text-foreground mb-4 opacity-0",
                isVisible["team"] && "animate-fade-in-up"
              )}>
                Leadership Team
              </h2>
              <p className={cn(
                "text-lg text-muted-foreground max-w-2xl mx-auto opacity-0",
                isVisible["team"] && "animate-fade-in-up"
              )} style={{ animationDelay: "0.1s" }}>
                The visionaries driving TVICL's mission forward
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className={cn(
                    "group glass rounded-2xl overflow-hidden card-hover opacity-0",
                    isVisible["team"] && "animate-fade-in-up"
                  )}
                  style={{ animationDelay: `${0.1 * index + 0.2}s` }}
                >
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  </div>
                  <div className="p-6 -mt-12 relative">
                    <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-secondary font-medium text-sm mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section 
          ref={observeSection("values")}
          className="section-padding bg-card"
        >
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className={cn(
                "font-display font-bold text-3xl md:text-4xl text-foreground mb-4 opacity-0",
                isVisible["values"] && "animate-fade-in-up"
              )}>
                Our Values in Action
              </h2>
              <p className={cn(
                "text-lg text-muted-foreground max-w-2xl mx-auto opacity-0",
                isVisible["values"] && "animate-fade-in-up"
              )} style={{ animationDelay: "0.1s" }}>
                Not just words on a wall - these principles guide every decision we make
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={cn(
                    "glass rounded-2xl p-8 card-hover opacity-0",
                    isVisible["values"] && "animate-fade-in-up"
                  )}
                  style={{ animationDelay: `${0.1 * index + 0.2}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {value.description}
                      </p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                        {value.stats}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section 
          ref={observeSection("certs")}
          className="section-padding bg-background"
        >
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className={cn(
                "font-display font-bold text-3xl md:text-4xl text-foreground mb-4 opacity-0",
                isVisible["certs"] && "animate-fade-in-up"
              )}>
                Certifications & Recognition
              </h2>
            </div>

            <div className={cn(
              "flex flex-wrap justify-center gap-4 opacity-0",
              isVisible["certs"] && "animate-fade-in"
            )} style={{ animationDelay: "0.2s" }}>
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="px-6 py-3 rounded-full glass border border-secondary/30 text-foreground font-medium"
                >
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-secondary" />
                    {cert}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-card">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                Ready to Work With Us?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's build something extraordinary together. 
                Reach out to our team today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="gold" size="lg" className="gap-2">
                  <span>Contact Us</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="gold-outline" size="lg" className="gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>Visit Our Office</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
