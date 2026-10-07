import { useParams, Link, Navigate } from 'react-router-dom';
import { Phone, ChevronRight, MapPin, Check } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { serviceAreas, services, businessInfo } from '@/data/site-data';

export default function ServiceAreaDetail() {
  const { slug } = useParams();
  const area = serviceAreas.find((a) => a.slug === slug);

  if (!area) return <Navigate to="/service-areas" replace />;

  const relatedService = services.find((s) => s.title === area.primaryService);
  const otherAreas = serviceAreas.filter((a) => a.slug !== slug).slice(0, 4);
  const heroImage =
    'https://images.pexels.com/photos/20046693/pexels-photo-20046693.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop';

  return (
    <>
      <SEO
        title={`HVAC Services in ${area.name}, ID | Hipwell's Heating & Cooling`}
        description={`Hipwell's Heating & Cooling provides ${area.primaryService.toLowerCase()} and other HVAC repair services in ${area.name}, Idaho. Call 208-552-7676 to schedule service.`}
        path={`/service-areas/${area.slug}`}
      />

      <PageHero
        title={`HVAC Services in ${area.name}, Idaho`}
        subtitle={`Hipwell's Heating & Cooling serves ${area.name} homeowners with ${area.primaryService.toLowerCase()} and other HVAC repair services.`}
        image={heroImage}
        breadcrumb={{ label: area.name, path: '/service-areas' }}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-navy-900 mb-5">
                  HVAC Service in {area.name}
                </h2>
                <p className="text-navy-700 leading-relaxed text-lg">{area.description}</p>
              </div>

              {relatedService && (
                <div className="rounded-2xl bg-navy-50 p-8 border border-navy-100">
                  <h3 className="font-display font-bold text-xl text-navy-900 mb-3">
                    Our {relatedService.title} Service
                  </h3>
                  <p className="text-navy-600 leading-relaxed mb-5">{relatedService.short}</p>
                  <Link
                    to={`/services/${relatedService.slug}`}
                    className="inline-flex items-center gap-2 font-semibold text-warm-600 hover:text-warm-700 transition-colors"
                  >
                    Learn about our {relatedService.title} services
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              )}

              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-navy-900 mb-5">
                  Why {area.name} Residents Choose Hipwell's
                </h2>
                <div className="space-y-4">
                  {[
                    'Over 28 years of HVAC repair experience',
                    'Repair-focused — we fix what others can\u2019t',
                    'Root-cause diagnostics, not symptom patching',
                    'Clear, honest communication about your system',
                    'Residential and light commercial expertise',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-warm-500 flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-navy-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-navy-900 p-8 text-center">
                <h3 className="font-display font-bold text-xl text-white mb-3">
                  Need HVAC Repair in {area.name}?
                </h3>
                <p className="text-navy-200 mb-5">Call us today — we'll help you get your system running right.</p>
                <a href="tel:2085527676" className="btn-primary">
                  <Phone className="w-5 h-5" /> Call {businessInfo.phone}
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="sticky top-24 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 p-8 shadow-xl">
                <h3 className="font-display font-bold text-xl text-white mb-2">Serving {area.name}</h3>
                <p className="text-navy-200 text-sm mb-6">
                  Based in Idaho Falls, serving {area.name} and the surrounding community.
                </p>
                <a href="tel:2085527676" className="btn-primary w-full">
                  <Phone className="w-5 h-5" /> {businessInfo.phone}
                </a>
                <div className="mt-6 pt-6 border-t border-navy-700 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-navy-200">
                    <MapPin className="w-4 h-4 text-warm-400" />
                    {businessInfo.address}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-navy-50 p-6 border border-navy-100">
                <h3 className="font-display font-bold text-lg text-navy-900 mb-4">Other Service Areas</h3>
                <div className="space-y-3">
                  {otherAreas.map((a) => (
                    <Link
                      key={a.slug}
                      to={`/service-areas/${a.slug}`}
                      className="flex items-center justify-between gap-2 text-sm font-medium text-navy-700 hover:text-warm-600 transition-colors group"
                    >
                      {a.name}
                      <ChevronRight className="w-4 h-4 text-navy-300 group-hover:text-warm-500 group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
