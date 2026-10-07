import { Link } from 'react-router-dom';
import { Phone, Home, ChevronRight } from 'lucide-react';
import SEO from '@/components/SEO';
import { businessInfo } from '@/data/site-data';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | Hipwell's Heating & Cooling"
        description="The page you're looking for doesn't exist. Please visit our homepage or call us at 208-552-7676."
        path="/404"
      />
      <section className="min-h-screen flex items-center justify-center bg-navy-50 pt-20">
        <div className="container-wide text-center">
          <div className="max-w-lg mx-auto">
            <p className="font-display font-bold text-8xl md:text-9xl text-warm-500">404</p>
            <h1 className="font-display font-bold text-2xl md:text-3xl text-navy-900 mt-4 mb-3">
              Page Not Found
            </h1>
            <p className="text-navy-600 mb-8">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="btn-primary">
                <Home className="w-5 h-5" /> Back to Home
              </Link>
              <a href={businessInfo.phoneLink} className="btn-secondary">
                <Phone className="w-5 h-5" /> Call {businessInfo.phone}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link to="/services" className="text-sm font-semibold text-warm-600 hover:text-warm-700 transition-colors inline-flex items-center gap-1">
                Services <ChevronRight className="w-3 h-3" />
              </Link>
              <Link to="/service-areas" className="text-sm font-semibold text-warm-600 hover:text-warm-700 transition-colors inline-flex items-center gap-1">
                Service Areas <ChevronRight className="w-3 h-3" />
              </Link>
              <Link to="/contact" className="text-sm font-semibold text-warm-600 hover:text-warm-700 transition-colors inline-flex items-center gap-1">
                Contact <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
