import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import JsonLd from '@/components/JsonLd';
import { businessInfo } from '@/data/site-data';

import Home from '@/pages/Home';
import ServicesLanding from '@/pages/ServicesLanding';
import ServiceDetail from '@/pages/ServiceDetail';
import ServiceAreasLanding from '@/pages/ServiceAreasLanding';
import ServiceAreaDetail from '@/pages/ServiceAreaDetail';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import FAQs from '@/pages/FAQs';
import NotFound from '@/pages/NotFound';

function App() {
  const businessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    name: businessInfo.name,
    telephone: businessInfo.phone,
    url: businessInfo.domain,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2260 Calkins Ave',
      addressLocality: 'Idaho Falls',
      addressRegion: 'ID',
      postalCode: '83402',
      addressCountry: 'US',
    },
    areaServed: ['Idaho Falls', 'Rexburg', 'Ammon', 'Shelley', 'Blackfoot', 'Rigby', 'Ucon'],
    openingHours: 'Mo-Fr 08:00-17:00',
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <JsonLd data={businessJsonLd} />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesLanding />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/service-areas" element={<ServiceAreasLanding />} />
          <Route path="/service-areas/:slug" element={<ServiceAreaDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
