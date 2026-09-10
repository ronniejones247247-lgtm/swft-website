const BASE = 'https://www.swfoamtech.com';

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
      ...items.map((it, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: it.name,
        item: `${BASE}${it.path}`,
      })),
    ],
  };
}
