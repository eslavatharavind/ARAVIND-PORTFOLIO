import { Github, Linkedin, Mail, Eye, Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-20 lg:pt-0">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary-light/10 to-primary-glow/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-glow/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up opacity-0">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-primary-glow via-white to-primary-glow bg-[length:200%_auto] bg-clip-text text-transparent animate-text-shimmer">
                  Eslavath Aravind
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 font-medium animate-fade-in-up [animation-delay:200ms] opacity-0">
                AI Full Stack Developer /AI/ML Engineer & CSE Student
              </p>
              <p className="text-lg text-white/80 max-w-2xl mx-auto animate-fade-in-up [animation-delay:400ms] opacity-0">
                Passionate about developing intelligent systems, web applications, and AI-driven solutions.
                B.Tech graduate from Bharat Institute of Engineering and Technology.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:600ms] opacity-0">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-medium transition-all hover:scale-105"
                asChild
              >
                <a href="/ARAVIND_ESLAVATH_RESUME.pdf" target="_blank" rel="noopener noreferrer">
                  <Eye className="mr-2 h-5 w-5" />
                  View Full Resume
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-medium transition-all hover:scale-105"
                asChild
              >
                <a href="/ARAVIND_ESLAVATH_RESUME.pdf" download="ARAVIND_ESLAVATH_RESUME.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center animate-fade-in-up [animation-delay:800ms] opacity-0">
              <a href="https://github.com/eslavatharavind" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-white hover:text-primary-glow hover:bg-white/10 transition-all hover:scale-110">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/aravind-eslavath-9aa64a30a" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-white hover:text-primary-glow hover:bg-white/10 transition-all hover:scale-110">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:aravindeslavath04@gmail.com">
                <Button variant="ghost" size="sm" className="text-white hover:text-primary-glow hover:bg-white/10 transition-all hover:scale-110">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center animate-fade-in-up [animation-delay:400ms] opacity-0">
            <div className="relative group">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-strong bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/20 transition-transform duration-500 group-hover:scale-[1.02] group-hover:rotate-1">
                <img
                  src="/chinnu/image.jpg"
                  alt="Eslavath Aravind"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-glow/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/20 rounded-full blur-lg animate-pulse [animation-delay:1s]"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('about')}
            className="text-white/70 hover:text-white transition-colors duration-300 flex flex-col items-center gap-2 group"
          >
            <span className="text-sm">Scroll Down</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;