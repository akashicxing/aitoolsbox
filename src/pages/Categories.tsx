import { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../categories';
import { Helmet } from 'react-helmet';

interface Category {
  id: string;
  name: string;
  count: number;
  tools?: string[];
}

// Category icons mapping with more professional icons
const categoryIcons: { [key: string]: string } = {
  'AI API Design': '🔌',
  'AI Response Generator': '🤖',
  'AI Website Designer': '🎨',
  'AI PDF': '📄',
  'AI Social Media Assistant': '📱',
  'AI Image Enhancer': '✨',
  'AI Image Scanning': '📸',
  'AI Character': '👤',
  'AI Recruiting': '👔',
  'Religion': '⛪',
  'AI Business Ideas Generator': '💡',
  'Fitness': '💪',
  'Summarizer': '📝',
  'AI Chatbot': '💬',
  'AI Interview Assistant': '🎓',
  'AI Productivity Tools': '⚡',
  'AI Podcast Assistant': '🎙️',
  'AI Art Generator': '🖼️',
  'AI Team Collaboration': '👥',
  'AI Customer Service Assistant': '🎯',
  'Large Language Models (LLMs)': '🧠',
  'Prompt': '💭',
  'AI Story Writing': '📚',
  'AI Content Generator': '✍️',
  'Legal Assistant': '⚖️',
  'Investing Assistant': '📈',
  'Homework Helper': '📚',
  'AI Advertising Assistant': '📢',
  'AI Code Assistant': '💻',
  'AI Image Recognition': '👁️',
  'AI Mind Mapping': '🌐',
  'Healthcare': '⚕️',
  'AI Presentation Generator': '📊',
  'Resume Builder': '📋',
  'AI Blog Writer': '📰',
  'AI Plagiarism Checker': '🔍',
  'AI Detector': '🕵️',
  'Sports': '⚽',
  'AI Background Remover': '✂️',
  'AI DevOps Assistant': '🛠️',
  'Sales Assistant': '💼',
  'AI Document Extraction': '📎',
  'AI Grammar Checker': '✅',
  'Newsletter': '📨',
  'NSFW': '🔞',
  'AI Knowledge Base': '📚',
  'AI Anime & Cartoon Generator': '🎭',
  'AI Graphic Design': '🎯',
  'AI YouTube Assistant': '▶️',
  'AI Landing Page Builder': '🏗️',
  'AI Task Management': '📋',
  'AI 3D Model Generator': '🎮',
  'AI Reviews Assistant': '⭐',
  'AI Course': '🎓',
  'AI Accounting Assistant': '🧮',
  'AI Repurpose Assistant': '♻️',
  'AI Quizzes': '❓',
  'Speech-to-Text': '🗣️',
  'AI Trading Bot Assistant': '📊',
  'No-Code&Low-Code': '🔧',
  'Fun Tools': '🎲',
  'AI SEO Assistant': '🔝',
  'AI UGC Video Generator': '🎬',
  'Other': '🔮',
  'Text to Image': '🖼️',
  'AI Profile Picture Generator': '🖼️',
  'AI Photo & Image Generator': '📸',
  'AI Tutorial': '📖',
  'AI Avatar Generator': '👤'
};

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter categories
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get tool examples for each category
  const getToolExamples = (categoryName: string): string[] => {
    const category = categories.find(c => c.name === categoryName);
    return category?.tools?.slice(0, 3) || [];
  };

  return (
    <>
      <Helmet>
        <title>AI Tools Categories - Explore AI Tools by Category & Find Specialized Solutions | AI Magic Box</title>
        <meta 
          name="description" 
          content="Discover AI tools organized by categories including productivity, art generation, content creation, and more. Find specialized AI solutions for your specific needs. Browse our comprehensive directory of AI tools with detailed categorization and easy navigation."
        />
      </Helmet>
      <div className="min-h-screen bg-secondary">
        {/* Search Area */}
        <div className="max-w-4xl mx-auto pt-8 pb-12">
          <h1 className="text-3xl font-bold text-center mb-8 text-primary">Explore AI Tools by Category</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 text-lg rounded-xl border-2 border-emerald-100 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 outline-none"
            />
            <span className="absolute right-6 top-1/2 transform -translate-y-1/2 text-2xl">
              🔍
            </span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
              onMouseEnter={() => setSelectedCategory(category.name)}
              onMouseLeave={() => setSelectedCategory(null)}
            >
              <Link to={`/category/${category.id}`} className="block p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-4xl bg-emerald-50 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {categoryIcons[category.name] || '🔧'}
                  </span>
                  <div>
                    <h2 className="text-xl font-bold text-primary group-hover:text-emerald-600 transition-colors">
                      {category.name}
                    </h2>
                    <span className="inline-block mt-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-sm font-medium">
                      {category.count} {category.count === 1 ? 'tool' : 'tools'}
                    </span>
                  </div>
                </div>
                
                {/* Tools Preview */}
                <div className="mt-4 space-y-2">
                  {getToolExamples(category.name).map((tool: string, index: number) => (
                    <div
                      key={index}
                      className="text-gray-600 text-sm flex items-center space-x-2 group-hover:translate-x-1 transition-transform"
                    >
                      <span className="w-1 h-1 bg-emerald-400 rounded-full"></span>
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>

                {/* View More */}
                <div className="mt-6 flex items-center text-emerald-600 text-sm font-medium group-hover:translate-x-2 transition-transform">
                  <span>View All Tools</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No categories found matching "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Categories; 