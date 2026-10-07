import { Link } from 'react-router-dom';
import { Phone, ChevronRight, Home } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  breadcrumb: { label: string; path?: string };
}

export default function PageHero({ title, subtitle, image, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-950/80" />
      </div>
      <div className="relative container-wide">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-navy-200 mb-6">
          <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" /> Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-navy-300" />
          {breadcrumb.path ? (
            <Link to={breadcrumb.path} className="hover:text-white transition-colors">
              {breadcrumb.label}
            </Link>
          ) : (
            <span className="text-white">{breadcrumb.label}</span>
          )}
        </nav>

        <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white max-w-3xl text-balance leading-tight">
          {title}
        </h1>
        <p className="mt-5 text-lg text-navy-100 max-w-2xl leading-relaxed">{subtitle}</p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a href="tel:2085527676" className="btn-primary">
            <Phone className="w-5 h-5" /> Call 208-552-7676
          </a>
          <Link to="/contact" className="btn-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
