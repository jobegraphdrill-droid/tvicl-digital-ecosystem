import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";

const sampleQuestions = [
  {
    question: "How much to build a 4-bedroom house in Lagos?",
    answer: "Based on current material costs and our standard finishes, a 4-bedroom home in Lagos typically ranges from ₦65-95M. This includes foundation, structure, roofing, and basic interior finishes. Would you like a detailed breakdown?",
  },
  {
    question: "What smart home features do you offer?",
    answer: "We offer 3 smart home packages: Essential (lighting & security), Premium (+ climate & entertainment), and Ultimate (full automation). All come with voice control and mobile app access. Which would you like to explore?",
  },
  {
    question: "How long does construction take?",
    answer: "Typical timelines: 3-bedroom (6-8 months), 4-bedroom (8-10 months), 5+ bedrooms (10-14 months). These can be accelerated with premium scheduling. Want me to create a custom timeline for your project?",
  },
];

export const AIAssistantSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeConversation, setActiveConversation] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
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

  useEffect(() => {
    if (!isVisible) return;

    const cycleConversations = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setActiveConversation((prev) => (prev + 1) % sampleQuestions.length);
        setIsTyping(false);
      }, 1500);
    }, 5000);

    return () => clearInterval(cycleConversations);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-card relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Info */}
          <div>
            <div
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6 opacity-0",
                isVisible && "animate-fade-in"
              )}
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent font-medium">
                AI-Powered Assistant
              </span>
            </div>

            <h2
              className={cn(
                "font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 opacity-0",
                isVisible && "animate-fade-in-up"
              )}
              style={{ animationDelay: "0.1s" }}
            >
              Questions?
              <br />
              <span className="text-gradient-bronze">Ask Our AI Expert</span>
            </h2>

            <p
              className={cn(
                "text-lg text-muted-foreground mb-8 opacity-0",
                isVisible && "animate-fade-in-up"
              )}
              style={{ animationDelay: "0.2s" }}
            >
              Our AI construction expert is trained on years of building 
              experience, material costs, and Nigerian construction codes. 
              Get instant, accurate answers 24/7.
            </p>

            {/* Features */}
            <div
              className={cn(
                "space-y-4 mb-8 opacity-0",
                isVisible && "animate-fade-in-up"
              )}
              style={{ animationDelay: "0.3s" }}
            >
              {[
                "Instant cost estimates based on current material prices",
                "Smart home package recommendations",
                "Construction timeline calculations",
                "Building code and regulation guidance",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              variant="bronze"
              size="lg"
              className={cn(
                "group opacity-0",
                isVisible && "animate-fade-in-up"
              )}
              style={{ animationDelay: "0.4s" }}
            >
              <MessageCircle className="w-5 h-5" />
              <span>Start Conversation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right - Chat Demo */}
          <div
            className={cn(
              "opacity-0",
              isVisible && "animate-fade-in-right"
            )}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="glass rounded-3xl p-6 relative">
              {/* Chat Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-border/50 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">
                    TVICL AI
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-muted-foreground">Online now</span>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4 min-h-[280px]">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="max-w-[80%] bg-secondary text-secondary-foreground rounded-2xl rounded-br-sm px-4 py-3">
                    <p className="text-sm">
                      {sampleQuestions[activeConversation].question}
                    </p>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex justify-start">
                  <div className="max-w-[80%] bg-muted/50 rounded-2xl rounded-bl-sm px-4 py-3">
                    {isTyping ? (
                      <div className="flex gap-1 py-2">
                        <span className="w-2 h-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-2 h-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-2 h-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        {sampleQuestions[activeConversation].answer}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Quick Questions */}
              <div className="pt-4 border-t border-border/50">
                <p className="text-xs text-muted-foreground mb-3">
                  Try asking:
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Cost estimate", "Timeline", "Smart home", "Materials"].map((q) => (
                    <button
                      key={q}
                      className="px-3 py-1.5 rounded-full bg-muted/50 text-xs text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="mt-4 flex gap-2">
                <input
                  type="text"
                  placeholder="Type your question..."
                  className="flex-grow px-4 py-3 rounded-xl bg-background border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors"
                />
                <Button variant="bronze" size="icon" className="rounded-xl flex-shrink-0">
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
