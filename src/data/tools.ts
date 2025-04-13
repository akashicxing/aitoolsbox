export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  url: string;
  screenshot?: string;
  tags: string[];
  pricing: 'Free' | 'Freemium' | 'Paid';
  rating?: number;
}

export const tools: Tool[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'Advanced language model for conversation, writing, and analysis',
    category: 'writing',
    url: 'https://chat.openai.com',
    screenshot: 'https://example.com/chatgpt.jpg',
    tags: ['AI Chat', 'Writing Assistant', 'Language Model'],
    pricing: 'Freemium',
    rating: 4.8
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'Create stunning artwork and images using AI',
    category: 'image',
    url: 'https://www.midjourney.com',
    screenshot: 'https://example.com/midjourney.jpg',
    tags: ['AI Art', 'Image Generation', 'Creative'],
    pricing: 'Paid',
    rating: 4.7
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'AI-powered code completion and suggestion tool',
    category: 'coding',
    url: 'https://github.com/features/copilot',
    screenshot: 'https://example.com/copilot.jpg',
    tags: ['Coding Assistant', 'AI Programming', 'Developer Tools'],
    pricing: 'Paid',
    rating: 4.6
  }
];

export const categories = [
  { id: 'writing', name: 'Writing', icon: '✍️' },
  { id: 'image', name: 'Image Generation', icon: '🎨' },
  { id: 'video', name: 'Video Creation', icon: '🎥' },
  { id: 'coding', name: 'Coding', icon: '💻' },
  { id: 'audio', name: 'Audio', icon: '🎵' },
  { id: 'productivity', name: 'Productivity', icon: '⚡' }
]; 