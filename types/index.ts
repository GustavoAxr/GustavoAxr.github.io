export interface Service {
  category: string;
  items: ServiceItem[];
}

export interface ServiceItem {
  title: string;
  desc: string;
  badge?: string;
  badgeColor?: string;
  icon: any;
  to: string;
  slug: string;
}
