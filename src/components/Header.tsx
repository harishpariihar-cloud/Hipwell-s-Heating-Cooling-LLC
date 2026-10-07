import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown, Wrench } from 'lucide-react';
import { services, serviceAreas, businessInfo } from '@/data/site-data';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-warm-500' : 'text-navy-100 hover:text-white'
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block py-2 text-base font-medium transition-colors ${
      isActive ? 'text-warm-500' : 'text-navy-700 hover:text-warm-500'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-md shadow-xl shadow-navy-950/30'
          : 'bg-navy-900'
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-warm-500 transition-transform group-hover:scale-105">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-white text-lg">Hipwell's</span>
              <span className="text-[10px] text-ice-300 font-medium tracking-wider uppercase">
                Heating & Cooling
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-navy-100 hover:text-white transition-colors">
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                  <div className="w-80 rounded-xl bg-white shadow-2xl shadow-navy-950/20 border border-navy-100 overflow-hidden">
                    <Link
                      to="/services"
                      className="block px-5 py-3 text-sm font-semibold text-navy-900 bg-navy-50 hover:bg-navy-100 transition-colors border-b border-navy-100"
                    >
                      All Services
                    </Link>
                    <div className="max-h-96 overflow-y-auto py-1">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          className="block px-5 py-2.5 text-sm text-navy-700 hover:text-warm-600 hover:bg-warm-50 transition-colors"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Service Areas Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAreasOpen(true)}
              onMouseLeave={() => setAreasOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-navy-100 hover:text-white transition-colors">
                Service Areas
                <ChevronDown className={`w-4 h-4 transition-transform ${areasOpen ? 'rotate-180' : ''}`} />
              </button>
              {areasOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                  <div className="w-64 rounded-xl bg-white shadow-2xl shadow-navy-950/20 border border-navy-100 overflow-hidden">
                    <Link
                      to="/service-areas"
                      className="block px-5 py-3 text-sm font-semibold text-navy-900 bg-navy-50 hover:bg-navy-100 transition-colors border-b border-navy-100"
                    >
                      All Service Areas
                    </Link>
                    <div className="py-1">
                      {serviceAreas.map((a) => (
                        <Link
                          key={a.slug}
                          to={`/service-areas/${a.slug}`}
                          className="block px-5 py-2.5 text-sm text-navy-700 hover:text-warm-600 hover:bg-warm-50 transition-colors"
                        >
                          {a.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/faqs" className={navLinkClass}>
              FAQs
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          {/* Desktop Call CTA */}
          <a
            href={businessInfo.phoneLink}
            className="hidden lg:inline-flex items-center gap-2 rounded-lg bg-warm-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-warm-500/30 transition-all hover:bg-warm-600 hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4" />
            {businessInfo.phone}
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-navy-100 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="container-wide py-4 space-y-1">
            <NavLink to="/" className={mobileNavLinkClass} end>
              Home
            </NavLink>

            <div className="py-2">
              <button
                className="flex items-center justify-between w-full py-2 text-base font-medium text-navy-700"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  <Link to="/services" className="block py-2 text-sm font-semibold text-warm-600">
                    All Services
                  </Link>
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="block py-2 text-sm text-navy-600 hover:text-warm-600"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="py-2">
              <button
                className="flex items-center justify-between w-full py-2 text-base font-medium text-navy-700"
                onClick={() => setAreasOpen(!areasOpen)}
              >
                Service Areas
                <ChevronDown className={`w-4 h-4 transition-transform ${areasOpen ? 'rotate-180' : ''}`} />
              </button>
              {areasOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  <Link to="/service-areas" className="block py-2 text-sm font-semibold text-warm-600">
                    All Service Areas
                  </Link>
                  {serviceAreas.map((a) => (
                    <Link
                      key={a.slug}
                      to={`/service-areas/${a.slug}`}
                      className="block py-2 text-sm text-navy-600 hover:text-warm-600"
                    >
                      {a.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/about" className={mobileNavLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/faqs" className={mobileNavLinkClass}>
              FAQs
            </NavLink>
            <NavLink to="/contact" className={mobileNavLinkClass}>
              Contact
            </NavLink>

            <a
              href={businessInfo.phoneLink}
              className="flex items-center justify-center gap-2 mt-4 w-full rounded-lg bg-warm-500 px-5 py-3.5 text-base font-semibold text-white shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call {businessInfo.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
