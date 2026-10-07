import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Wrench, ChevronRight } from 'lucide-react';
import { businessInfo, services, serviceAreas } from '@/data/site-data';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-100">
      {/* CTA Bar */}
      <div className="bg-warm-500">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-lg font-semibold text-white text-center sm:text-left">
            Need HVAC repair in eastern Idaho? We're ready to help.
          </p>
          <a
            href={businessInfo.phoneLink}
            className="inline-flex items-center gap-2 rounded-lg bg-navy-900 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-navy-800 hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5" />
            Call {businessInfo.phone}
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-warm-500">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-white text-lg">Hipwell's</span>
                <span className="text-[10px] text-ice-300 font-medium tracking-wider uppercase">
                  Heating & Cooling
                </span>
              </div>
            </Link>
            <p className="text-sm text-navy-200 leading-relaxed">
              Repair-focused HVAC services for eastern Idaho. Over 28 years of experience
              diagnosing and fixing heating and cooling problems.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-sm text-navy-200 hover:text-warm-400 transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-sm font-semibold text-warm-400 hover:text-warm-300 transition-colors inline-flex items-center gap-1"
                >
                  All Services <ChevronRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-display font-bold text-white mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.slice(0, 5).map((a) => (
                <li key={a.slug}>
                  <Link
                    to={`/service-areas/${a.slug}`}
                    className="text-sm text-navy-200 hover:text-warm-400 transition-colors"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/service-areas"
                  className="text-sm font-semibold text-warm-400 hover:text-warm-300 transition-colors inline-flex items-center gap-1"
                >
                  All Areas <ChevronRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={businessInfo.phoneLink}
                  className="flex items-center gap-2 text-sm text-navy-200 hover:text-warm-400 transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0 text-warm-400" />
                  {businessInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-navy-200">
                <MapPin className="w-4 h-4 flex-shrink-0 text-warm-400 mt-0.5" />
                {businessInfo.address}
              </li>
              <li className="flex items-start gap-2 text-sm text-navy-200">
                <Clock className="w-4 h-4 flex-shrink-0 text-warm-400 mt-0.5" />
                {businessInfo.hours}
              </li>
            </ul>
            <div className="mt-4 flex gap-4">
              <Link to="/contact" className="text-sm font-semibold text-warm-400 hover:text-warm-300 transition-colors">
                Contact Form
              </Link>
              <Link to="/about" className="text-sm font-semibold text-warm-400 hover:text-warm-300 transition-colors">
                About Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-navy-300">
            © {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/faqs" className="text-sm text-navy-300 hover:text-warm-400 transition-colors">
              FAQs
            </Link>
            <Link to="/contact" className="text-sm text-navy-300 hover:text-warm-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
