import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8 border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left text-white/60 text-sm">
            <p>© {currentYear} Eslavath Aravind</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;