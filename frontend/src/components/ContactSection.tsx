import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary-light/20 to-primary-glow/10"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-glow/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center space-y-12">

          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-white/30 mx-auto rounded-full"></div>
          </div>

          {/* Contact Details Row */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm md:text-base">
            <a href="mailto:aravindeslavath04@gmail.com" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <Mail className="h-5 w-5 text-white" />
              <span className="text-white">aravindeslavath04@gmail.com</span>
            </a>
            <a href="tel:9347268583" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <Phone className="h-5 w-5 text-white" />
              <span className="text-white">+91 9347268583</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-white" />
              <span className="text-white">Hyderabad, Telangana</span>
            </div>
          </div>

          {/* Social Links Row */}
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="https://www.linkedin.com/in/aravind-eslavath-9aa64a30a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white/80 transition-colors"
            >
              <div className="bg-primary-glow p-1 rounded">
                <Linkedin className="h-4 w-4 text-white" />
              </div>
              <span className="font-medium text-white">Eslavath Aravind</span>
            </a>
            <a
              href="https://github.com/eslavatharavind"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white/80 transition-colors"
            >
              <Github className="h-6 w-6 text-white" />
              <span className="font-medium text-white">eslavatharavind</span>
            </a>
          </div>

          {/* Thank You Message */}
          <div className="text-center space-y-2 mt-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-wide">Thank You!</h2>
            <p className="text-lg font-medium text-white/90">Contact for more details</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
