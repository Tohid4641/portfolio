import { useEffect } from 'react';

const SEO = () => {
  const title = "Full Stack Developer | Node.js & MERN Specialist";
  const description = "Full Stack Developer specializing in Node.js and MERN stack. Building scalable web applications with modern technologies.";
  const siteUrl = "https://your-portfolio.com";
  const image = "/og-image.jpg";

  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta tags
    updateMetaTag("description", description);
    updateMetaTag("og:type", "website");
    updateMetaTag("og:url", siteUrl);
    updateMetaTag("og:title", title);
    updateMetaTag("og:description", description);
    updateMetaTag("og:image", `${siteUrl}${image}`);
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:url", siteUrl);
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", `${siteUrl}${image}`);
    updateMetaTag("keywords", "full stack developer, node.js, react, mern stack, web development");
    updateMetaTag("author", "Your Name");
  }, []);

  const updateMetaTag = (name: string, content: string) => {
    let meta = document.querySelector(`meta[name="${name}"]`) ||
               document.querySelector(`meta[property="${name}"]`);
    
    if (!meta) {
      meta = document.createElement('meta');
      if (name.startsWith('og:')) {
        meta.setAttribute('property', name);
      } else {
        meta.setAttribute('name', name);
      }
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  };

  return null;
};

export default SEO;