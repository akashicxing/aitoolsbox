import React, { useState } from 'react';
import { Search, Moon, Sun, Menu, X } from 'lucide-react';
import { categories, tools } from './index';
import { Category } from './categories';
import { Tool } from './data1';
import { Helmet } from 'react-helmet';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const filteredTools = activeCategory === 'All' 
    ? tools 
    : tools.filter(tool => tool.category === activeCategory);

  return (
    <div className="mint-theme min-h-screen">
      <Helmet>
        <title>Discover New AI Tools - AIToolsBox</title>
        <meta name="description" content="Explore the latest AI tools to enhance your productivity and creativity. Find new AI tools today!" />
        <meta name="keywords" content="new ai tools, AI productivity, AI creativity" />
      </Helmet>
      
      {/* Header */}
      <header className="fixed w-full top-0 bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-teal-700">AIToolsBox</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-teal-700 hover:text-teal-600">Home</a>
              <a href="#" className="text-teal-700 hover:text-teal-600">Categories</a>
              <a href="#" className="text-teal-700 hover:text-teal-600">About</a>
            </nav>

            {/* Search and Theme Toggle */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search AI tools..."
                  className="search-box"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-teal-600" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">
            Discover New AI Innovations
          </h1>
          <p className="text-xl text-teal-600 max-w-2xl mx-auto">
            Your gateway to cutting-edge AI tools. Explore our handpicked collection of the newest and most powerful AI solutions.
          </p>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setActiveCategory('All')}
              className={`category-tag ${activeCategory === 'All' ? 'active' : ''}`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`category-tag ${activeCategory === category.id ? 'active' : ''}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </section>

        {/* Tool Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTools.map((tool) => (
            <div key={tool.id} className="tool-card">
              <img
                src={tool.screenshot}
                alt={tool.name}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-teal-800 mb-2">
                  {tool.name}
                </h3>
                <p className="text-teal-600 mb-4">
                  {tool.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="category-tag">
                    {tool.category}
                  </span>
                </div>
                <a
                  href={tool.redirect_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Try Now
                </a>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-teal-600">
            © 2025 AIToolsBox. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;