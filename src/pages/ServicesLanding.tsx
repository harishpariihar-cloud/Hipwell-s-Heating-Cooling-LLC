import { Link } from 'react-router-dom';
import { Phone, ChevronRight, Snowflake, Flame, Fan, Wrench, RefreshCw, Search, Thermometer, ShieldCheck, Settings, Home as HomeIcon } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { services } from '@/data/site-data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Snowflake, Flame, Fan, Wrench, RefreshCw, Search, Thermometer, ShieldCheck, Settings, Home: HomeIcon,
};

export default function ServicesLanding() {
  const heroImage =
    'https://images.pexels.com/photos/6471913/pexels-photo-6471913.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop';

  return (
    <>
      <SEO
        title="HVAC Services in Idaho Falls | Hipwell's Heating & Cooling"
        description="Complete HVAC repair and maintenance services for eastern Idaho: AC repair, heating repair, furnace troubleshooting, heat pump services, diagnostics, thermostat installation, and preventive maintenance."
        path="/services"
      />
      <PageHero
        title="HVAC Services for Eastern Idaho Homes"
        subtitle="Repair-focused heating and cooling services from a company that finds the root cause — not just the symptoms. Explore our full range of HVAC services below."
        image={heroImage}
        breadcrumb={{ label: 'Services' }}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-900 mb-4 text-balance">
              What We Do
            </h2>
            <p className="text-lg text-navy-600 leading-relaxed">
              Hipwell's specializes in diagnostics and repairs for residential and light commercial HVAC
              systems. We don't push replacement when a repair will do — we give you honest information
              so you can make the right decision for your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => {
              const Icon = iconMap[s.icon] || Wrench;
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg shadow-navy-900/5 hover:shadow-2xl hover:shadow-navy-900/10 transition-all duration-300 hover:-translate-y-1 border border-navy-100"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/90 backdrop-blur">
                        <Icon className="w-5 h-5 text-warm-600" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display font-bold text-xl text-navy-900 mb-3 group-hover:text-warm-600 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-sm text-navy-600 leading-relaxed flex-1">{s.short}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-warm-600 group-hover:text-warm-700">
                      Explore {s.title.replace(' and Replacement', '').replace(' Troubleshooting and Repair', '')}
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Not Sure Which Service You Need?"
        description="Call us at 208-552-7676. We'll listen to what's going on and help you figure out the right next step."
      />
    </>
  );
}
