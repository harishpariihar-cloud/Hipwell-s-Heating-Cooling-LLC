import { Link } from 'react-router-dom';
import { MapPin, ChevronRight, Phone } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { serviceAreas, businessInfo } from '@/data/site-data';

export default function ServiceAreasLanding() {
  const heroImage =
    'https://images.pexels.com/photos/5463577/pexels-photo-5463577.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop';

  return (
    <>
      <SEO
        title="HVAC Service Areas in Eastern Idaho | Hipwell's Heating & Cooling"
        description="Hipwell's Heating & Cooling serves Idaho Falls, Rexburg, Ammon, Shelley, Blackfoot, Rigby, and Ucon with repair-focused HVAC services. See if we cover your area."
        path="/service-areas"
      />
      <PageHero
        title="HVAC Service Areas in Eastern Idaho"
        subtitle="Based in Idaho Falls, we serve homeowners throughout the surrounding eastern Idaho community. Find your city below to learn about the HVAC services available in your area."
        image={heroImage}
        breadcrumb={{ label: 'Service Areas' }}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-warm-50 px-4 py-1.5 mb-4">
              <MapPin className="w-4 h-4 text-warm-600" />
              <span className="text-sm font-semibold text-warm-700">Our Coverage Area</span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-900 mb-4 text-balance">
              Communities We Serve
            </h2>
            <p className="text-lg text-navy-600 leading-relaxed">
              We're based at {businessInfo.address} and serve the surrounding eastern Idaho community.
              Not sure if we cover your area? Call us at {businessInfo.phone}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                to={`/service-areas/${area.slug}`}
                className="group p-8 rounded-2xl bg-navy-50 hover:bg-white hover:shadow-xl hover:shadow-navy-900/10 transition-all duration-300 border border-navy-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-warm-500 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-navy-900 group-hover:text-warm-600 transition-colors">
                      {area.name}
                    </h3>
                    <p className="text-xs text-navy-500 font-medium">{area.primaryService}</p>
                  </div>
                </div>
                <p className="text-sm text-navy-600 leading-relaxed line-clamp-3">{area.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-warm-600 group-hover:text-warm-700">
                  View {area.name} Services <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-14 rounded-2xl bg-navy-900 p-8 md:p-12 text-center">
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              Don't See Your City?
            </h3>
            <p className="text-navy-200 max-w-xl mx-auto mb-6">
              We may still be able to help. Give us a call and we'll let you know if we serve your area.
            </p>
            <a href="tel:2085527676" className="btn-primary">
              <Phone className="w-5 h-5" /> Call {businessInfo.phone}
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
