import { Link } from 'react-router-dom';
import { Phone, ChevronRight } from 'lucide-react';

interface CTAProps {
  title?: string;
  description?: string;
}

export default function CTASection({
  title = 'Ready to Fix Your HVAC Problem?',
  description = "Call Hipwell's Heating & Cooling today. We'll listen to what's going on, discuss the issue, and arrange a service visit at a time that works for you.",
}: CTAProps) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-navy-900">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-warm-500 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-ice-500 blur-3xl" />
      </div>
      <div className="relative container-wide text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white max-w-2xl mx-auto text-balance">
          {title}
        </h2>
        <p className="mt-5 text-lg text-navy-100 max-w-2xl mx-auto leading-relaxed">{description}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:2085527676" className="btn-primary">
            <Phone className="w-5 h-5" /> Call 208-552-7676
          </a>
          <Link to="/contact" className="btn-outline">
            Send a Message <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
