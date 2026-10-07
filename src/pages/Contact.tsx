import { useState, FormEvent } from 'react';
import { Phone, MapPin, Clock, Mail, CheckCircle, AlertCircle, Send } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import { businessInfo, services } from '@/data/site-data';
import { supabase } from '@/lib/supabase';

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

const initialForm: FormState = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) newErrors.name = 'Please enter your name';
    if (!form.phone.trim()) newErrors.phone = 'Please enter your phone number';
    else if (form.phone.trim().length < 10) newErrors.phone = 'Please enter a valid phone number';
    if (!form.email.trim()) newErrors.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Please enter a valid email address';
    if (!form.service) newErrors.service = 'Please select a service';
    if (!form.message.trim()) newErrors.message = 'Please tell us about your issue';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      const { error } = await supabase.from('contact_submissions').insert({
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        service_needed: form.service,
        message: form.message.trim(),
      });

      if (error) throw error;

      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
    }
  };

  const inputClass = (field: keyof FormState) =>
    `w-full rounded-lg border px-4 py-3 text-navy-900 placeholder-navy-400 transition-colors focus:outline-none focus:ring-2 focus:ring-warm-500/20 focus:border-warm-500 ${
      errors[field] ? 'border-red-400 bg-red-50' : 'border-navy-200 bg-white'
    }`;

  const heroImage =
    'https://images.pexels.com/photos/5463587/pexels-photo-5463587.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop';

  return (
    <>
      <SEO
        title="Contact Hipwell's Heating & Cooling | Idaho Falls HVAC Repair"
        description="Contact Hipwell's Heating & Cooling LLC for HVAC repair in Idaho Falls and eastern Idaho. Call 208-552-7676 or send us a message through our contact form."
        path="/contact"
      />

      <PageHero
        title="Contact Hipwell's Heating & Cooling"
        subtitle="Need HVAC repair in eastern Idaho? Call us or send a message — we'll get back to you and help get your heating or cooling system running right."
        image={heroImage}
        breadcrumb={{ label: 'Contact' }}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-navy-900 mb-2">
                  Get In Touch
                </h2>
                <p className="text-navy-600 leading-relaxed">
                  The fastest way to get help is to call us directly. We'll listen to what's going on
                  and schedule a service visit.
                </p>
              </div>

              <a
                href="tel:2085527676"
                className="block p-6 rounded-2xl bg-navy-900 hover:bg-navy-800 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-warm-500 group-hover:scale-110 transition-transform">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-navy-200">Call Us</p>
                    <p className="text-xl font-bold text-white">{businessInfo.phone}</p>
                  </div>
                </div>
              </a>

              <div className="p-6 rounded-2xl bg-navy-50 border border-navy-100">
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-ice-100 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-ice-600" />
                  </div>
                  <div>
                    <p className="text-sm text-navy-500 font-medium">Address</p>
                    <p className="text-lg font-semibold text-navy-900">{businessInfo.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-warm-100 flex-shrink-0">
                    <Clock className="w-6 h-6 text-warm-600" />
                  </div>
                  <div>
                    <p className="text-sm text-navy-500 font-medium">Hours</p>
                    <p className="text-lg font-semibold text-navy-900">{businessInfo.hours}</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-[300px]">
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

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl bg-navy-50 p-6 md:p-10 border border-navy-100">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-navy-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-navy-600 mb-6">
                  Fill out the form below and we'll get back to you. For urgent issues, please call.
                </p>

                {status === 'success' ? (
                  <div className="rounded-xl bg-green-50 border border-green-200 p-8 text-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-navy-900 mb-2">Message Sent</h3>
                    <p className="text-navy-600 mb-6">
                      Thank you for reaching out. We'll contact you soon. For urgent matters, please call
                      us at {businessInfo.phone}.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="btn-secondary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-navy-900 mb-1.5">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          className={inputClass('name')}
                          placeholder="Your full name"
                          aria-required="true"
                          aria-invalid={!!errors.name}
                        />
                        {errors.name && <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-navy-900 mb-1.5">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className={inputClass('phone')}
                          placeholder="(208) 555-1234"
                          aria-required="true"
                          aria-invalid={!!errors.phone}
                        />
                        {errors.phone && <p className="mt-1.5 text-sm text-red-600">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-navy-900 mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass('email')}
                        placeholder="you@example.com"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-navy-900 mb-1.5">
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={inputClass('service')}
                        aria-required="true"
                        aria-invalid={!!errors.service}
                      >
                        <option value="">Select a service...</option>
                        {services.map((s) => (
                          <option key={s.slug} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Other">Other / Not Sure</option>
                      </select>
                      {errors.service && <p className="mt-1.5 text-sm text-red-600">{errors.service}</p>}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-navy-900 mb-1.5">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        className={inputClass('message')}
                        placeholder="Tell us about the problem you're experiencing..."
                        aria-required="true"
                        aria-invalid={!!errors.message}
                      />
                      {errors.message && <p className="mt-1.5 text-sm text-red-600">{errors.message}</p>}
                    </div>

                    {status === 'error' && (
                      <div className="flex items-start gap-3 rounded-lg bg-red-50 border border-red-200 p-4">
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-red-700">
                          Something went wrong. Please try calling us at {businessInfo.phone} instead.
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="w-5 h-5" /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
