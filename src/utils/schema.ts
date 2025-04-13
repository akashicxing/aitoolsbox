export interface ToolSchema {
  name: string;
  description: string;
  url: string;
  image?: string;
  category: string;
  rating?: {
    value: number;
    count: number;
  };
  price?: string;
  features?: string[];
}

export const generateToolSchema = (tool: ToolSchema) => {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": tool.name,
    "description": tool.description,
    "url": tool.url,
    "image": tool.image,
    "applicationCategory": tool.category,
    "offers": tool.price ? {
      "@type": "Offer",
      "price": tool.price,
      "priceCurrency": "USD"
    } : undefined,
    "aggregateRating": tool.rating ? {
      "@type": "AggregateRating",
      "ratingValue": tool.rating.value,
      "ratingCount": tool.rating.count
    } : undefined,
    "featureList": tool.features
  };
};

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}; 