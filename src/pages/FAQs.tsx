import { Link } from 'react-router-dom';
import { ChevronRight, Phone } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { homeFaqs, services, businessInfo } from '@/data/site-data';

export default function FAQs() {
  const heroImage =
    'https://images.pexels.com/photos/32588555/pexels-photo-32588555.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop';

  const allFaqs = [
    ...homeFaqs,
    ...services.flatMap((s) =>
      s.faqs.map((f) => ({ q: f.q, a: f.a, service: s.title, slug: s.slug }))
    ),
  ];

  return (
    <>
      <SEO
        title="HVAC FAQs | Hipwell's Heating & Cooling Idaho Falls"
        description="Frequently asked questions about HVAC repair, maintenance, and services from Hipwell's Heating & Cooling LLC in Idaho Falls, Idaho."
        path="/faqs"
      />

      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common HVAC questions. Don't see your question? Call us at 208-552-7676 — we're happy to help."
        image={heroImage}
        breadcrumb={{ label: 'FAQs' }}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            {/* General FAQs */}
            <div className="mb-12">
              <h2 className="font-display font-bold text-2xl text-navy-900 mb-6">General Questions</h2>
              <div className="space-y-4">
                {homeFaqs.map((faq) => (
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

            {/* Service-Specific FAQs */}
            <div>
              <h2 className="font-display font-bold text-2xl text-navy-900 mb-6">Service-Specific Questions</h2>
              <div className="space-y-8">
                {services.map((service) => (
                  <div key={service.slug}>
                    <h3 className="font-display font-bold text-lg text-warm-600 mb-3">
                      {service.title}
                    </h3>
                    <div className="space-y-3">
                      {service.faqs.map((faq) => (
                        <details
                          key={faq.q}
                          className="group rounded-xl bg-navy-50 hover:bg-navy-100/70 transition-colors border border-navy-100 overflow-hidden"
                        >
                          <summary className="flex items-center justify-between gap-4 cursor-pointer p-4 font-medium text-navy-900 list-none text-sm">
                            {faq.q}
                            <ChevronRight className="w-4 h-4 flex-shrink-0 text-warm-500 transition-transform group-open:rotate-90" />
                          </summary>
                          <div className="px-4 pb-4 text-sm text-navy-600 leading-relaxed">{faq.a}</div>
                        </details>
                      ))}
                    </div>
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-warm-600 hover:text-warm-700 transition-colors"
                    >
                      Learn more about {service.title}
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Still have questions */}
          <div className="max-w-3xl mx-auto mt-14 rounded-2xl bg-navy-900 p-8 md:p-12 text-center">
            <h3 className="font-display font-bold text-2xl text-white mb-3">
              Still Have Questions?
            </h3>
            <p className="text-navy-200 mb-6 max-w-xl mx-auto">
              We're happy to answer any questions about your HVAC system. Give us a call — no pressure, just honest answers.
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
