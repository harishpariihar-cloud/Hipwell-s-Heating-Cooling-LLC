import { useParams, Link, Navigate } from 'react-router-dom';
import { Phone, ChevronRight, Check, MapPin } from 'lucide-react';
import SEO from '@/components/SEO';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { services, businessInfo } from '@/data/site-data';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const relatedServices = services.filter((s) => s.slug !== slug).slice(0, 4);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <SEO
        title={`${service.title} | Hipwell's Heating & Cooling Idaho Falls`}
        description={service.short}
        path={`/services/${service.slug}`}
        image={service.image}
      />
      <JsonLd data={faqJsonLd} />

      <PageHero
        title={service.title}
        subtitle={service.short}
        image={service.image}
        breadcrumb={{ label: service.title, path: '/services' }}
      />

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Content Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-navy-900 mb-5">
                  About Our {service.title} Services
                </h2>
                <p className="text-navy-700 leading-relaxed text-lg">{service.description}</p>
              </div>

              {/* Symptoms */}
              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-navy-900 mb-5">
                  Signs You May Need {service.title}
                </h2>
                <div className="rounded-2xl bg-navy-50 p-6 md:p-8 border border-navy-100">
                  <ul className="space-y-4">
                    {service.symptoms.map((symptom, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-warm-500 flex items-center justify-center mt-0.5">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-navy-700">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-navy-900 mb-5">
                  How Our {service.title} Process Works
                </h2>
                <div className="space-y-4">
                  {service.process.map((step, i) => (
                    <div
                      key={i}
                      className="flex gap-5 p-5 rounded-xl bg-white border border-navy-100 shadow-sm"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-warm-500 text-white font-bold">
                        {i + 1}
                      </div>
                      <p className="text-navy-700 leading-relaxed pt-1.5">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inline CTA */}
              <div className="rounded-2xl bg-navy-900 p-8 text-center">
                <h3 className="font-display font-bold text-xl text-white mb-3">
                  Experiencing any of these issues?
                </h3>
                <p className="text-navy-200 mb-5">Call us now — we'll diagnose the real problem and fix it right.</p>
                <a href="tel:2085527676" className="btn-primary">
                  <Phone className="w-5 h-5" /> Call {businessInfo.phone}
                </a>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-navy-900 mb-5">
                  {service.title} FAQs
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq) => (
                    <details
                      key={faq.q}
                      className="group rounded-xl bg-navy-50 hover:bg-navy-100/70 transition-colors border border-navy-100 overflow-hidden"
                    >
                      <summary className="flex items-center justify-between gap-4 cursor-pointer p-5 font-semibold text-navy-900 list-none">
                        {faq.q}
                        <ChevronRight className="w-5 h-5 flex-shrink-0 text-warm-500 transition-transform group-open:rotate-90" />
                      </summary>
                      <div className="px-5 pb-5 text-navy-600 leading-relaxed">{faq.a}</div>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Call Card */}
              <div className="sticky top-24 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 p-8 shadow-xl">
                <h3 className="font-display font-bold text-xl text-white mb-2">Call to Schedule</h3>
                <p className="text-navy-200 text-sm mb-6">
                  Talk to us about your {service.title.toLowerCase()} needs. We'll arrange a service visit at a time that works for you.
                </p>
                <a href="tel:2085527676" className="btn-primary w-full">
                  <Phone className="w-5 h-5" /> {businessInfo.phone}
                </a>
                <div className="mt-6 pt-6 border-t border-navy-700 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-navy-200">
                    <MapPin className="w-4 h-4 text-warm-400" />
                    {businessInfo.address}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-navy-200">
                    <Check className="w-4 h-4 text-warm-400" />
                    {businessInfo.hours}
                  </div>
                </div>
              </div>

              {/* Related Services */}
              <div className="rounded-2xl bg-navy-50 p-6 border border-navy-100">
                <h3 className="font-display font-bold text-lg text-navy-900 mb-4">Related Services</h3>
                <div className="space-y-3">
                  {relatedServices.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="flex items-center justify-between gap-2 text-sm font-medium text-navy-700 hover:text-warm-600 transition-colors group"
                    >
                      {s.title}
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
