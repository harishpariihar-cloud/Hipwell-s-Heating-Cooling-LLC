import { Link } from 'react-router-dom';
import { Phone, Wrench, Search, MessageSquare, Award, Building2, Heart, ChevronRight, MapPin, Clock, Check } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { businessInfo } from '@/data/site-data';

export default function About() {
  const heroImage =
    'https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop';

  const values = [
    {
      icon: Search,
      title: 'Root-Cause Diagnostics',
      description:
        'We test systematically to find the actual cause of your HVAC problem — not just the symptom. When we make a repair, it addresses the real issue.',
    },
    {
      icon: MessageSquare,
      title: 'Clear Communication',
      description:
        'We explain what we found, what needs to be done, and why. You\u2019ll understand your system and your options before any work begins.',
    },
    {
      icon: Wrench,
      title: 'Practical Repairs',
      description:
        'We\u2019re a repair-focused company. We don\u2019t push replacement when a repair will do the job. We give you honest information so you can decide.',
    },
    {
      icon: Heart,
      title: 'Honest Assessments',
      description:
        'If a repair makes sense, we tell you. If replacement is the better investment, we tell you that too. No pressure, no upselling.',
    },
  ];

  return (
    <>
      <SEO
        title="About Hipwell's Heating & Cooling LLC | Idaho Falls HVAC Repair"
        description="Learn about Hipwell's Heating & Cooling LLC — a repair-focused HVAC company in Idaho Falls, Idaho with over 28 years of experience diagnosing and fixing heating and cooling problems."
        path="/about"
      />

      <PageHero
        title="About Hipwell's Heating & Cooling LLC"
        subtitle="A repair-focused HVAC company based in Idaho Falls, Idaho — dedicated to finding the root cause of your heating and cooling problems and fixing them right."
        image={heroImage}
        breadcrumb={{ label: 'About Us' }}
      />

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-ice-50 px-4 py-1.5 mb-4">
                <span className="text-sm font-semibold text-ice-700">Our Story</span>
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-900 mb-6 text-balance">
                "I Can Fix What the Other Companies Can't"
              </h2>
              <div className="space-y-4 text-navy-700 leading-relaxed">
                <p>
                  Hipwell's Heating & Cooling LLC is based in Idaho Falls, Idaho, and serves homeowners
                  throughout the eastern Idaho community. The company was built on a simple principle:
                  diagnose thoroughly, communicate clearly, and fix the real problem.
                </p>
                <p>
                  With over 28 years of hands-on HVAC repair experience, we specialize in the repairs
                  other companies can\u2019t or won\u2019t do. Rooms that never heat or cool right, systems
                  that have been serviced repeatedly without improvement, problems that seem to come and
                  go — these are the challenges we take on.
                </p>
                <p>
                  We\u2019re not a company that defaults to replacement. When a repair is the right call,
                  we make it. When replacement makes sense, we tell you honestly and help you make an
                  informed decision. Either way, you\u2019ll understand what\u2019s wrong with your system
                  and what your options are.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/20">
                <img
                  src="https://images.pexels.com/photos/6471914/pexels-photo-6471914.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop"
                  alt="HVAC technician performing maintenance on an outdoor unit"
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-warm-500 rounded-xl p-6 shadow-xl hidden md:block">
                <p className="text-4xl font-display font-bold text-white">28+</p>
                <p className="text-sm text-warm-100 font-medium mt-1">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-navy-50">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-900 text-balance">
              What We Stand For
            </h2>
            <p className="mt-4 text-lg text-navy-600">
              The principles that guide every service call we make.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex gap-5 p-8 rounded-2xl bg-white border border-navy-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-warm-500">
                    <v.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-navy-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-navy-600 leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Work On */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-900 mb-6 text-balance">
                What We Work On
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                We work on most residential and light commercial HVAC systems, including:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Central air conditioners',
                  'Gas and electric furnaces',
                  'Heat pumps (heating and cooling)',
                  'Thermostats and controls',
                  'Ductwork and airflow issues',
                  'Indoor air quality components',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-lg bg-navy-50">
                    <Check className="w-5 h-5 text-warm-500 flex-shrink-0" />
                    <span className="text-sm text-navy-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-900 mb-6 text-balance">
                Our Service Area
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Based in Idaho Falls, we serve homeowners throughout the eastern Idaho community:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {['Idaho Falls', 'Rexburg', 'Ammon', 'Shelley', 'Blackfoot', 'Rigby', 'Ucon'].map((city) => (
                  <Link
                    key={city}
                    to={`/service-areas/${city.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center gap-2 p-3 rounded-lg bg-navy-50 hover:bg-warm-50 transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-warm-500" />
                    <span className="text-sm text-navy-700 font-medium">{city}</span>
                  </Link>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm text-navy-600 mb-2">
                <MapPin className="w-4 h-4 text-warm-500" />
                {businessInfo.address}
              </div>
              <div className="flex items-center gap-2 text-sm text-navy-600">
                <Clock className="w-4 h-4 text-warm-500" />
                {businessInfo.hours}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-navy-900">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '28+', label: 'Years of Experience', icon: Award },
              { value: '7', label: 'Areas Served', icon: MapPin },
              { value: '10', label: 'Service Categories', icon: Wrench },
              { value: '100%', label: 'Repair-Focused', icon: Heart },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-warm-500/20 mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-warm-400" />
                </div>
                <p className="font-display font-bold text-3xl md:text-4xl text-white">{stat.value}</p>
                <p className="text-sm text-navy-200 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Talk About Your HVAC Problem?"
        description="Call Hipwell's Heating & Cooling today. We'll listen, ask the right questions, and help you get your system running the way it should."
      />
    </>
  );
}
