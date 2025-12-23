import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Droplets,
  Sun,
  CloudRain,
  Thermometer,
  Palette,
  Sofa,
  Wind,
  Lock,
  Users,
  Zap
} from "lucide-react";

const controls = [
  { id: "irrigation", icon: Droplets, label: "Automated Irrigation", startTime: 7, endTime: 13 },
  { id: "blinds", icon: Sun, label: "Open Blinds", startTime: 20, endTime: 36 },
  { id: "rain", icon: CloudRain, label: "Detect Rain Close Windows", startTime: 46, endTime: 55 },
  { id: "climate-blinds", icon: Thermometer, label: "Intelligence Blinds Control", startTime: 55, endTime: 62 },
  { id: "color", icon: Palette, label: "Intelligence Color Adjustment", startTime: 64, endTime: 88 },
  { id: "scene", icon: Sofa, label: "Color & Scene Adjustment", startTime: 88, endTime: 90 },
  { id: "hvac", icon: Wind, label: "Air-conditioning & Heat", startTime: 90, endTime: 92 },
  { id: "lock", icon: Lock, label: "Smart Lock & Motion Sensor", startTime: 98, endTime: 104 },
];

export const SmartHomeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeControl, setActiveControl] = useState<string | null>(null);
  const [viewers, setViewers] = useState(12);
  const sectionRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YT.Player | null>(null);
  const [playerReady, setPlayerReady] = useState(false);

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

  // Load YouTube IFrame API
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      initializePlayer();
      return;
    }

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    (window as any).onYouTubeIframeAPIReady = () => {
      initializePlayer();
    };

    return () => {
      (window as any).onYouTubeIframeAPIReady = null;
    };
  }, []);

  const initializePlayer = () => {
    if (playerRef.current) return;
    
    playerRef.current = new window.YT.Player("youtube-player", {
      height: "100%",
      width: "100%",
      videoId: "dftKArsWaCs",
      playerVars: {
        autoplay: 0,
        controls: 1,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
      },
      events: {
        onReady: () => {
          setPlayerReady(true);
        },
      },
    });
  };

  // Simulate viewer count changes
  useEffect(() => {
    const interval = setInterval(() => {
      setViewers((prev) => prev + Math.floor(Math.random() * 3) - 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const playSegment = (controlId: string, startTime: number) => {
    setActiveControl(controlId);
    if (playerRef.current && playerReady) {
      playerRef.current.seekTo(startTime, true);
      playerRef.current.playVideo();
    }
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
            Click any control below to see that feature in action.
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
            {/* YouTube Video */}
            <div className="aspect-video relative bg-gradient-to-br from-muted to-background">
              <div id="youtube-player" className="absolute inset-0 w-full h-full" />

              {/* Overlay Info */}
              <div className="absolute top-4 left-4 flex items-center gap-2 z-10 pointer-events-none">
                <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <span className="text-sm text-foreground font-medium glass px-3 py-1 rounded-full">
                  LIVE Demo Home
                </span>
              </div>

              <div className="absolute top-4 right-4 flex items-center gap-2 glass px-3 py-1 rounded-full z-10 pointer-events-none">
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
                Tap any control to see that smart home feature in action.
              </p>

              <div className="grid grid-cols-1 gap-3 max-h-[400px] overflow-y-auto pr-2">
                {controls.map((control) => (
                  <button
                    key={control.id}
                    onClick={() => playSegment(control.id, control.startTime)}
                    className={cn(
                      "flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 text-left",
                      activeControl === control.id
                        ? "bg-secondary/20 border-secondary text-secondary glow-gold"
                        : "bg-muted/30 border-border/50 text-muted-foreground hover:bg-muted/50"
                    )}
                  >
                    <control.icon
                      className={cn(
                        "w-6 h-6 flex-shrink-0 transition-colors",
                        activeControl === control.id && "text-secondary"
                      )}
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-medium block truncate">
                        {control.label}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {control.startTime}s - {control.endTime}s
                      </span>
                    </div>
                    <div
                      className={cn(
                        "w-3 h-3 rounded-full transition-colors flex-shrink-0",
                        activeControl === control.id
                          ? "bg-secondary animate-pulse"
                          : "bg-muted"
                      )}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">Smart Features</span>
                <span className="font-display font-semibold text-secondary">
                  {controls.length} Available
                </span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gold-gradient transition-all duration-500"
                  style={{
                    width: activeControl ? "100%" : "0%",
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
