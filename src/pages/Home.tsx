import { Link } from 'react-router-dom';
import {
  Phone,
  Snowflake,
  Flame,
  Search,
  Wrench,
  ThermometerSun,
  Volume2,
  Wind,
  RefreshCw,
  TrendingUp,
  MessageSquare,
  Calendar,
  Award,
  Heart,
  Building2,
  ChevronRight,
  MapPin,
  Clock,
  Fan,
  ShieldCheck,
  Settings,
  Home as HomeIcon,
} from 'lucide-react';
import SEO from '@/components/SEO';
import JsonLd from '@/components/JsonLd';
import CTASection from '@/components/CTASection';
import {
  services,
  serviceAreas,
  commonProblems,
  processSteps,
  whyChooseUs,
  homeFaqs,
  businessInfo,
} from '@/data/site-data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Snowflake,
  Flame,
  Search,
  Wrench,
  ThermometerSun,
  Volume2,
  Wind,
  RefreshCw,
  TrendingUp,
  MessageSquare,
  Calendar,
  Award,
  Heart,
  Building2,
  Phone,
  Fan,
  ShieldCheck,
  Settings,
  Home: HomeIcon,
};

const heroImage =
  'https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop';
const comfortImage =
  'https://images.pexels.com/photos/7534560/pexels-photo-7534560.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop';

export default function Home() {
  return (
    <>
      <SEO
        title="Hipwell's Heating & Cooling LLC | HVAC Repair in Idaho Falls, ID"
        description="Repair-focused HVAC company serving Idaho Falls and eastern Idaho. Over 28 years of experience diagnosing and fixing heating and cooling problems. Call 208-552-7676."
        path="/"
      />

      {/* 1. Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="HVAC technician repairing an air conditioning unit" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-900/40" />
        </div>
        <div className="relative container-wide pt-28 pb-20">
          <div className="max-w-2xl animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-warm-500/20 border border-warm-400/30 px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-warm-400 animate-pulse" />
              <span className="text-sm font-medium text-warm-200">Serving Eastern Idaho</span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight text-balance">
              Heating & Cooling Solutions for Year-Round Comfort
            </h1>
            <p className="mt-6 text-lg md:text-xl text-navy-100 leading-relaxed max-w-xl">
              Repair-focused HVAC services for Idaho Falls and the surrounding community. Over 28 years
              of experience fixing the heating and cooling problems other companies can't.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="tel:2085527676" className="btn-primary text-lg px-8 py-4">
                <Phone className="w-5 h-5" /> Call 208-552-7676
              </a>
              <Link to="/services" className="btn-outline text-lg px-8 py-4">
                Explore HVAC Services <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-navy-200">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-warm-400" />
                <span className="text-sm">28+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-5 h-5 text-warm-400" />
                <span className="text-sm">Repair Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-warm-400" />
                <span className="text-sm">Residential & Commercial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Business Introduction */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-ice-50 px-4 py-1.5 mb-4">
                <span className="text-sm font-semibold text-ice-700">About Hipwell's</span>
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-900 mb-6 text-balance">
                A Repair-First HVAC Company Serving Eastern Idaho
              </h2>
              <div className="space-y-4 text-navy-700 leading-relaxed">
                <p>
                  Hipwell's Heating & Cooling LLC is based in Idaho Falls, Idaho, and serves homeowners
                  throughout the surrounding eastern Idaho community. We're not a company that pushes
                  replacement when a repair will do the job — we specialize in diagnostics and repairs,
                  and we take pride in fixing problems other companies haven't been able to resolve.
                </p>
                <p>
                  With over 28 years of hands-on experience, we approach every service call the same way:
                  listen carefully, diagnose thoroughly, explain clearly, and fix it right. Whether it's
                  a furnace that won't ignite, an AC that won't cool, or rooms that never seem to reach
                  the right temperature, we find the root cause instead of treating symptoms.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/about" className="btn-secondary">
                  Meet Hipwell's Heating & Cooling <ChevronRight className="w-4 h-4" />
                </Link>
                <a href="tel:2085527676" className="inline-flex items-center justify-center gap-2 text-navy-900 font-semibold hover:text-warm-600 transition-colors">
                  <Phone className="w-5 h-5" /> 208-552-7676
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/20">
                <img
                  src={comfortImage}
                  alt="Comfortable, well-maintained home interior — the result of proper HVAC care"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-warm-500 rounded-xl p-6 shadow-xl hidden md:block">
                <p className="text-4xl font-display font-bold text-white">28+</p>
                <p className="text-sm text-warm-100 font-medium mt-1">Years of Repair Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Services */}
      <section className="section-padding bg-navy-50">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-warm-50 px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-warm-700">Our Services</span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-900 text-balance">
              Complete HVAC Repair and Maintenance Services
            </h2>
            <p className="mt-4 text-lg text-navy-600">
              From air conditioning and heating to diagnostics and preventive maintenance, we cover
              the full range of residential HVAC needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((s) => {
              const Icon = iconMap[s.icon] || Wrench;
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-navy-900/5 hover:shadow-2xl hover:shadow-navy-900/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-ice-50 group-hover:bg-warm-50 transition-colors">
                        <Icon className="w-5 h-5 text-ice-600 group-hover:text-warm-600 transition-colors" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-navy-900 group-hover:text-warm-600 transition-colors">
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-sm text-navy-600 leading-relaxed">{s.short}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-warm-600 group-hover:text-warm-700">
                      Explore {s.title} <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary">
              View All Services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Cooling Services */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-ice-50 px-4 py-1.5 mb-4">
                <Snowflake className="w-4 h-4 text-ice-600" />
                <span className="text-sm font-semibold text-ice-700">Cooling Services</span>
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-900 mb-6 text-balance">
                Air Conditioning Repair You Can Rely On
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                When your AC stops cooling, makes unusual noises, or runs constantly without reaching
                the set temperature, you need a technician who can find the real problem. We diagnose
                and repair all types of residential air conditioning issues — from refrigerant problems
                and electrical faults to airflow issues and component failures.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Complete AC diagnostics and repair',
                  'Refrigerant leak detection and repair',
                  'Compressor, capacitor, and fan motor replacement',
                  'Evaporator and condenser coil issues',
                  'Ductwork and airflow problems',
                  'Seasonal AC maintenance and tune-ups',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-ice-100 flex items-center justify-center mt-0.5">
                      <Snowflake className="w-3 h-3 text-ice-600" />
                    </div>
                    <span className="text-navy-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services/air-conditioning-repair" className="btn-primary">
                  Explore AC Repair <ChevronRight className="w-4 h-4" />
                </Link>
                <Link to="/services/ac-maintenance" className="btn-secondary">
                  View AC Maintenance
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/20">
                <img
                  src="https://images.pexels.com/photos/7347538/pexels-photo-7347538.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop"
                  alt="Technician repairing an outdoor air conditioning unit"
                  className="w-full h-[450px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Heating Services */}
      <section className="section-padding bg-navy-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/20">
                <img
                  src="https://images.pexels.com/photos/20046689/pexels-photo-20046689.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop"
                  alt="Heat pump system providing heating for a home"
                  className="w-full h-[450px] object-cover"
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-warm-50 px-4 py-1.5 mb-4">
                <Flame className="w-4 h-4 text-warm-600" />
                <span className="text-sm font-semibold text-warm-700">Heating Services</span>
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-900 mb-6 text-balance">
                Heating Repair for Eastern Idaho Winters
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Eastern Idaho winters demand a heating system you can count on. When your furnace
                won't ignite, your heat pump freezes up, or some rooms never get warm, we perform
                thorough diagnostics to find the actual cause — then fix it right.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Furnace troubleshooting and repair',
                  'Heat pump diagnosis and repair',
                  'Pilot light and ignition system repair',
                  'Heat exchanger inspection',
                  'Thermostat troubleshooting and installation',
                  'Heating system replacement when it makes sense',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-warm-100 flex items-center justify-center mt-0.5">
                      <Flame className="w-3 h-3 text-warm-600" />
                    </div>
                    <span className="text-navy-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services/heating-repair" className="btn-primary">
                  View Heating Services <ChevronRight className="w-4 h-4" />
                </Link>
                <Link to="/services/furnace-troubleshooting" className="btn-secondary">
                  Furnace Troubleshooting
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Hipwell's */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-navy-700">Why Choose Us</span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-900 text-balance">
              Why Homeowners Call Hipwell's
            </h2>
            <p className="mt-4 text-lg text-navy-600">
              We focus on clear communication, careful troubleshooting, and practical repair solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => {
              const Icon = iconMap[item.icon] || Wrench;
              return (
                <div
                  key={item.title}
                  className="group p-8 rounded-2xl bg-navy-50 hover:bg-white hover:shadow-xl hover:shadow-navy-900/10 transition-all duration-300 border border-navy-100"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-warm-500 mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-navy-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-navy-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Common HVAC Problems */}
      <section className="section-padding bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-ice-500 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-warm-500 blur-3xl" />
        </div>
        <div className="relative container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-navy-800 px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-ice-300">Common Problems</span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white text-balance">
              HVAC Issues We Diagnose and Repair
            </h2>
            <p className="mt-4 text-lg text-navy-200">
              Recognize a problem? Call us — we'll find the root cause and fix it.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonProblems.map((p) => {
              const Icon = iconMap[p.icon] || Wrench;
              return (
                <div
                  key={p.title}
                  className="group p-8 rounded-2xl bg-navy-800/80 backdrop-blur-sm hover:bg-navy-700/80 transition-all duration-300 border border-navy-700"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-ice-500/20 mb-5 group-hover:bg-warm-500 transition-colors">
                    <Icon className="w-6 h-6 text-ice-300 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-3">{p.title}</h3>
                  <p className="text-sm text-navy-200 leading-relaxed">{p.description}</p>
                </div>
              );
            })}
            <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-warm-500/10 border-2 border-warm-500/30">
              <h3 className="font-display font-bold text-xl text-white mb-3 text-center">
                Have a different problem?
              </h3>
              <p className="text-sm text-navy-200 mb-6 text-center">
                We've seen it all. Call us and we'll help.
              </p>
              <a href="tel:2085527676" className="btn-primary">
                <Phone className="w-5 h-5" /> Call 208-552-7676
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. How the Service Process Works */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-ice-50 px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-ice-700">Simple Process</span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-900 text-balance">
              How Our Service Process Works
            </h2>
            <p className="mt-4 text-lg text-navy-600">
              Getting help is straightforward — call, discuss, and we'll arrange service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => {
              const Icon = iconMap[step.icon] || Phone;
              return (
                <div key={step.step} className="relative">
                  {idx < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-warm-300 to-transparent -translate-x-1/2" />
                  )}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-navy-50 border-4 border-white shadow-lg mb-6">
                      <Icon className="w-10 h-10 text-warm-500" />
                      <span className="absolute -top-2 -right-2 flex items-center justify-center w-8 h-8 rounded-full bg-warm-500 text-white text-sm font-bold">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-navy-900 mb-3">{step.title}</h3>
                    <p className="text-navy-600 leading-relaxed max-w-sm">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Service Areas */}
      <section className="section-padding bg-navy-50">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-warm-50 px-4 py-1.5 mb-4">
              <MapPin className="w-4 h-4 text-warm-600" />
              <span className="text-sm font-semibold text-warm-700">Service Areas</span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-900 text-balance">
              Serving Eastern Idaho
            </h2>
            <p className="mt-4 text-lg text-navy-600">
              Based in Idaho Falls, we serve homeowners throughout the surrounding community.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                to={`/service-areas/${area.slug}`}
                className="group flex items-center gap-3 p-4 rounded-xl bg-white hover:bg-warm-50 shadow-sm hover:shadow-md transition-all duration-300 border border-navy-100"
              >
                <MapPin className="w-5 h-5 text-warm-500 flex-shrink-0" />
                <span className="font-semibold text-navy-900 group-hover:text-warm-700 transition-colors">
                  {area.name}
                </span>
                <ChevronRight className="w-4 h-4 text-navy-300 ml-auto group-hover:text-warm-500 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/service-areas" className="btn-secondary">
              View All Service Areas <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FAQs */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-navy-700">FAQs</span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-900 text-balance">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
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
          <div className="text-center mt-10">
            <Link to="/faqs" className="btn-secondary">
              View All FAQs <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. Final CTA */}
      <CTASection />

      {/* 12. Contact and Map */}
      <section className="section-padding bg-navy-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-warm-50 px-4 py-1.5 mb-4">
                <span className="text-sm font-semibold text-warm-700">Get In Touch</span>
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-900 mb-6 text-balance">
                Contact Hipwell's Heating & Cooling
              </h2>
              <div className="space-y-6">
                <a
                  href="tel:2085527676"
                  className="flex items-center gap-4 p-5 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow border border-navy-100 group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-warm-500 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-navy-500 font-medium">Call Us</p>
                    <p className="text-lg font-semibold text-navy-900">208-552-7676</p>
                  </div>
                </a>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-md border border-navy-100">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-ice-100 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-ice-600" />
                  </div>
                  <div>
                    <p className="text-sm text-navy-500 font-medium">Address</p>
                    <p className="text-lg font-semibold text-navy-900">{businessInfo.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-md border border-navy-100">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-navy-100 flex-shrink-0">
                    <Clock className="w-6 h-6 text-navy-600" />
                  </div>
                  <div>
                    <p className="text-sm text-navy-500 font-medium">Hours</p>
                    <p className="text-lg font-semibold text-navy-900">{businessInfo.hours}</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/contact" className="btn-primary">
                  Send a Message <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/20 h-[450px]">
              <iframe
                title="Hipwell's Heating & Cooling location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.0!2d-112.0339!3d43.4666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x535459c8a6e44f%3A0x0!2s2260%20Calkins%20Ave%2C%20Idaho%20Falls%2C%20ID%2083402!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
