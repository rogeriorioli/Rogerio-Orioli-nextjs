export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  stars?: number;
  forks?: number;
  language?: string;
}

export interface Article {
  id: number;
  title: string;
  description: string;
  cover_image: string | null;
  social_image: string;
  url: string;
  tag_list: string[];
  published_at: string;
  reading_time_minutes: number;
  public_reactions_count: number;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType<any>;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools';
}