import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { tools as tools1 } from '../data1';
import { tools as tools2 } from '../data2';
import { Tool } from '../types';
import { Helmet } from 'react-helmet';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const Tools = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const categoryParam = searchParams.get('category');
  
  // Merge tools from both sources
  const allTools = [...tools1, ...tools2];
  
  // Filter tools by search query and category
  const filteredTools = allTools.filter(tool => {
    const matchesSearch = 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = categoryParam 
      ? tool.category === categoryParam
      : true;

    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    // 发送页面浏览事件
    window.gtag?.('event', 'page_view', {
      page_title: 'AI Tools Collection - Browse & Compare Tools | AI Magic Box',
      page_location: window.location.href,
      page_path: window.location.pathname
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>AI Tools Collection - Browse, Compare & Find the Best AI Tools for Your Needs | AI Magic Box</title>
        <meta 
          name="description" 
          content="Browse our extensive collection of AI tools, featuring detailed comparisons, reviews, and use cases. Discover AI solutions for business, creativity, productivity, and personal use. Find and compare the most innovative AI tools to enhance your workflow."
        />
      </Helmet>
      <div className="py-8">
        {/* Title */}
        {categoryParam && (
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">
              Tools in {categoryParam}
            </h1>
            <p className="text-gray-600 mt-2">
              Found {filteredTools.length} tools
            </p>
          </div>
        )}

        {/* Search Bar */}
        <div className="mb-8">
          <div className="max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search AI tools by name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <a
              key={tool.tool_id}
              href={tool.redirect_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col"
            >
              <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                <img
                  src={tool.screenshot}
                  alt={tool.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.name}</h3>
              <p className="text-gray-600 text-sm flex-grow mb-4">{tool.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-emerald-600 font-medium">
                  {tool.saves} saves
                </span>
                <span className="text-gray-500">
                  {tool.category}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* No Results Message */}
        {filteredTools.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            No matching tools found
          </div>
        )}
      </div>
    </>
  );
};

export default Tools; 