import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Lightbulb, 
  Thermometer, 
  Music, 
  DoorOpen, 
  Shield, 
  Tv,
  Users,
  Zap
} from "lucide-react";

const controls = [
  { id: "lights", icon: Lightbulb, label: "Lights", active: true },
  { id: "ac", icon: Thermometer, label: "Climate", active: false },
  { id: "music", icon: Music, label: "Music", active: true },
  { id: "doors", icon: DoorOpen, label: "Doors", active: false },
  { id: "security", icon: Shield, label: "Security", active: true },
  { id: "tv", icon: Tv, label: "Media", active: false },
];

export const SmartHomeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeControls, setActiveControls] = useState<Set<string>>(
    new Set(controls.filter((c) => c.active).map((c) => c.id))
  );
  const [viewers, setViewers] = useState(12);
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

  // Simulate viewer count changes
  useEffect(() => {
    const interval = setInterval(() => {
      setViewers((prev) => prev + Math.floor(Math.random() * 3) - 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleControl = (id: string) => {
    const newControls = new Set(activeControls);
    if (newControls.has(id)) {
      newControls.delete(id);
    } else {
      newControls.add(id);
    }
    setActiveControls(newControls);
  };

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-card relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-6 opacity-0",
              isVisible && "animate-fade-in"
            )}
          >
            <Zap className="w-4 h-4 text-secondary" />
            <span className="text-sm text-secondary font-medium">
              Interactive Demo
            </span>
          </div>

          <h2
            className={cn(
              "font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 opacity-0",
              isVisible && "animate-fade-in-up"
            )}
            style={{ animationDelay: "0.1s" }}
          >
            Control a Real
            <br />
            <span className="text-gradient-gold">TVICL Smart Home</span>
          </h2>

          <p
            className={cn(
              "text-lg text-muted-foreground max-w-2xl mx-auto opacity-0",
              isVisible && "animate-fade-in-up"
            )}
            style={{ animationDelay: "0.2s" }}
          >
            Experience our smart home technology firsthand. 
            Toggle the controls below and watch the demo home respond in real-time.
          </p>
        </div>

        {/* Main Demo Area */}
        <div
          className={cn(
            "grid lg:grid-cols-5 gap-8 opacity-0",
            isVisible && "animate-fade-in-up"
          )}
          style={{ animationDelay: "0.3s" }}
        >
          {/* Video Feed */}
          <div className="lg:col-span-3 relative rounded-3xl overflow-hidden glass">
            {/* Simulated Video Feed */}
            <div className="aspect-video relative bg-gradient-to-br from-muted to-background">
              {/* Room Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full max-w-lg">
                  {/* Room Outline */}
                  <div className="aspect-[4/3] border-2 border-dashed border-muted-foreground/30 rounded-xl p-8 relative">
                    {/* Room Elements */}
                    <div className="absolute inset-4 flex flex-col justify-between">
                      {/* Top Row - Lights */}
                      <div className="flex justify-around">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className={cn(
                              "w-8 h-8 rounded-full transition-all duration-500",
                              activeControls.has("lights")
                                ? "bg-secondary shadow-lg shadow-secondary/50"
                                : "bg-muted"
                            )}
                          />
                        ))}
                      </div>

                      {/* Middle - TV & AC */}
                      <div className="flex justify-between items-center">
                        <div
                          className={cn(
                            "w-20 h-14 rounded-lg transition-all duration-500",
                            activeControls.has("tv")
                              ? "bg-accent/50 border-2 border-accent"
                              : "bg-muted border-2 border-transparent"
                          )}
                        />
                        <div
                          className={cn(
                            "w-16 h-8 rounded transition-all duration-500 flex items-center justify-center",
                            activeControls.has("ac")
                              ? "bg-accent/50"
                              : "bg-muted"
                          )}
                        >
                          {activeControls.has("ac") && (
                            <span className="text-xs text-foreground">24°C</span>
                          )}
                        </div>
                      </div>

                      {/* Bottom - Door */}
                      <div className="flex justify-center">
                        <div
                          className={cn(
                            "w-12 h-16 rounded-t-lg border-2 transition-all duration-500",
                            activeControls.has("doors")
                              ? "border-green-500 bg-green-500/20"
                              : "border-red-500 bg-red-500/20"
                          )}
                        />
                      </div>
                    </div>

                    {/* Security Indicator */}
                    <div
                      className={cn(
                        "absolute top-2 right-2 w-3 h-3 rounded-full transition-all duration-500",
                        activeControls.has("security")
                          ? "bg-green-500 animate-pulse"
                          : "bg-red-500"
                      )}
                    />

                    {/* Music Waves */}
                    {activeControls.has("music") && (
                      <div className="absolute bottom-2 left-2 flex gap-1">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="w-1 bg-secondary rounded-full animate-pulse"
                            style={{
                              height: `${8 + Math.random() * 16}px`,
                              animationDelay: `${i * 0.1}s`,
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Overlay Info */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <span className="text-sm text-foreground font-medium glass px-3 py-1 rounded-full">
                  LIVE Demo Home
                </span>
              </div>

              <div className="absolute top-4 right-4 flex items-center gap-2 glass px-3 py-1 rounded-full">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-foreground font-medium">
                  {viewers} watching
                </span>
              </div>
            </div>
          </div>

          {/* Control Panel */}
          <div className="lg:col-span-2 space-y-4">
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                Control Panel
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Tap any control to toggle it on/off and see the demo home respond.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {controls.map((control) => (
                  <button
                    key={control.id}
                    onClick={() => toggleControl(control.id)}
                    className={cn(
                      "flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-300",
                      activeControls.has(control.id)
                        ? "bg-secondary/20 border-secondary text-secondary glow-gold"
                        : "bg-muted/30 border-border/50 text-muted-foreground hover:bg-muted/50"
                    )}
                  >
                    <control.icon
                      className={cn(
                        "w-6 h-6 transition-colors",
                        activeControls.has(control.id) && "text-secondary"
                      )}
                    />
                    <span className="text-sm font-medium">{control.label}</span>
                    <div
                      className={cn(
                        "w-8 h-4 rounded-full relative transition-colors",
                        activeControls.has(control.id)
                          ? "bg-secondary"
                          : "bg-muted"
                      )}
                    >
                      <div
                        className={cn(
                          "absolute top-0.5 w-3 h-3 rounded-full bg-foreground transition-all",
                          activeControls.has(control.id)
                            ? "left-4"
                            : "left-0.5"
                        )}
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">Active Controls</span>
                <span className="font-display font-semibold text-secondary">
                  {activeControls.size}/{controls.length}
                </span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gold-gradient transition-all duration-500"
                  style={{
                    width: `${(activeControls.size / controls.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            <Button variant="gold" className="w-full" size="lg">
              Get Smart Home Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
