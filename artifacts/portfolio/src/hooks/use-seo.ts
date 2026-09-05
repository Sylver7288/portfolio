import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
  schema?: Record<string, unknown>;
}

export function useSEO({
  title,
  description,
  image = "/opengraph.jpg",
  url,
  type = "website",
  schema,
}: SEOProps) {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to set or create a meta tag
    const setMetaTag = (attribute: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attribute}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attribute, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // 2. Standard Meta
    setMetaTag("name", "description", description);

    // 3. OpenGraph
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:image", image);
    setMetaTag("property", "og:type", type);
    if (url) {
      setMetaTag("property", "og:url", url);
    }

    // 4. Twitter
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", image);

    // 5. Dynamic Structured Data JSON-LD
    let scriptEl: HTMLScriptElement | null = document.getElementById(
      "dynamic-route-schema"
    ) as HTMLScriptElement | null;

    if (schema) {
      if (!scriptEl) {
        scriptEl = document.createElement("script");
        scriptEl.id = "dynamic-route-schema";
        scriptEl.type = "application/ld+json";
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(schema);
    } else if (scriptEl) {
      scriptEl.remove();
    }

    return () => {
      // Cleanup dynamic schema on unmount
      const existingScript = document.getElementById("dynamic-route-schema");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [title, description, image, url, type, schema]);
}
