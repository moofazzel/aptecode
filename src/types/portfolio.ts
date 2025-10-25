export interface Project {
  id: number;
  title: string;
  slug: string;
  category: string;
  image: string;
  images: string[];
  description: string;
  technologies: string[];
  liveUrl: string;
  featured: boolean;
  year: string;
  awards: string[];
  client: string;
  impact: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}
