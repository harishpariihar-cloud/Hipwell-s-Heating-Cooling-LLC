import { useEffect } from 'react';
import { businessInfo } from '@/data/site-data';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export default function SEO({ title, description, path, image }: SEOProps) {
  const canonical = `${businessInfo.domain}${path}`;
  const ogImage = image || `${businessInfo.domain}/og-image.jpg`;

  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    setMeta('description', description);
    setLink('canonical', canonical);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', canonical, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:image', ogImage, 'property');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);
  }, [title, description, canonical, ogImage]);

  return null;
}
