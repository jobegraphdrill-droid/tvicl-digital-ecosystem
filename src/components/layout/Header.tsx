import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Search, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  {
    name: "Explore",
    items: [
      { name: "Interactive Home Builder", href: "#builder", icon: "🏠" },
      { name: "Live Construction Sites", href: "#live", icon: "📍" },
      { name: "Smart Home Playground", href: "#smart", icon: "🎮" },
      { name: "Materials Library", href: "#materials", icon: "🧱" },
      { name: "Project Locations", href: "#locations", icon: "🗺️" },
    ],
  },
  {
    name: "Build",
    items: [
      { name: "Project Matchmaker", href: "#matchmaker", icon: "🎯" },
      { name: "Ask TVICL AI", href: "#ai", icon: "💬" },
      { name: "Cost Calculator", href: "#calculator", icon: "📋" },
      { name: "Quality Guarantee", href: "#quality", icon: "✅" },
      { name: "Book Consultation", href: "#book", icon: "📅" },
    ],
  },
  {
    name: "Learn",
    items: [
      { name: "Construction Academy", href: "#academy", icon: "📚" },
      { name: "Video Library", href: "#videos", icon: "🎬" },
      { name: "Blog & Insights", href: "#blog", icon: "📰" },
      { name: "Case Studies", href: "#cases", icon: "📖" },
    ],
  },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "/about" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gold-gradient flex items-center justify-center font-display font-bold text-secondary-foreground text-lg shadow-lg group-hover:shadow-secondary/40 transition-shadow duration-300">
              T
              <div className="absolute inset-0 rounded-xl bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              TVICL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.items && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.items ? (
                  <button
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200",
                      activeDropdown === item.name && "text-foreground"
                    )}
                  >
                    {item.name}
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        activeDropdown === item.name && "rotate-180"
                      )}
                    />
                  </button>
                ) : (
                  <Link
                    to={item.href!}
                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown */}
                {item.items && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in-down">
                    <div className="glass-strong rounded-xl p-2 min-w-[240px] shadow-xl">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 group"
                        >
                          <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                            {subItem.icon}
                          </span>
                          <span>{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="gold" size="default">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div className="glass-strong rounded-2xl p-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.items ? (
                    <div className="space-y-1">
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.name ? null : item.name
                          )
                        }
                        className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-foreground rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        {item.name}
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            activeDropdown === item.name && "rotate-180"
                          )}
                        />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="pl-4 space-y-1 animate-fade-in">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/30 transition-colors"
                            >
                              <span>{subItem.icon}</span>
                              <span>{subItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href!}
                      className="flex items-center px-4 py-3 text-sm font-medium text-foreground rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border/50">
                <Button variant="gold" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
