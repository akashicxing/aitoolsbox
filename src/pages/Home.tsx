import { Link } from 'react-router-dom';
import ToolCard from '../components/ToolCard';
import { tools as tools1 } from '../data1';
import { tools as tools2 } from '../data2';
import { categories } from '../categories';
import { Helmet } from 'react-helmet';

// 定义分类图标映射
const categoryIcons: { [key: string]: string } = {
  'AI Productivity Tools': '⚡',
  'AI Podcast Assistant': '🎙️',
  'AI Art Generator': '🎨',
  'AI Team Collaboration': '👥',
  'AI Customer Service Assistant': '💬',
  'Large Language Models (LLMs)': '🤖',
  'Prompt': '✨',
  'AI Story Writing': '📝',
  // 添加更多分类图标...
};

const Home = () => {
  // 合并工具数据
  const allTools = [...tools1, ...tools2];
  
  // 获取最新添加的3个工具
  const featuredTools = allTools.slice(0, 3);

  return (
    <>
      <Helmet>
        <title>AI Magic Box - Discover & Explore the Latest AI Tools, Resources & Innovations | Your AI Tools Directory</title>
        <meta 
          name="description" 
          content="Explore our comprehensive collection of cutting-edge AI tools and resources. Find the perfect AI solutions for productivity, content creation, art generation, team collaboration, and more. Stay ahead with weekly updated AI innovations."
        />
      </Helmet>
      <div className="bg-secondary">
        {/* Hero Section */}
        <section className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Discover New AI Innovations
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Stay ahead of the curve with our weekly-updated AI collection. We track and curate the newest breakthroughs in artificial intelligence, bringing you tomorrow's tools today.
          </p>
          <Link
            to="/tools"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Browse New Tools
          </Link>
        </section>

        {/* Stats Section */}
        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-white border hover:border-emerald-500 transition-colors">
              <h3 className="text-2xl font-bold mb-2 text-primary">Curated Collection</h3>
              <p className="text-gray-600">Handpicked selection of quality AI tools</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white border hover:border-emerald-500 transition-colors">
              <h3 className="text-2xl font-bold mb-2 text-primary">{categories.length}+ Categories</h3>
              <p className="text-gray-600">Well-organized categories for easy discovery</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white border hover:border-emerald-500 transition-colors">
              <h3 className="text-2xl font-bold mb-2 text-primary">Weekly Updates</h3>
              <p className="text-gray-600">Regular updates with new AI innovations</p>
            </div>
          </div>
        </section>

        {/* Featured Tools */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-primary">New Additions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/tools"
              className="inline-block text-primary hover:text-emerald-800 font-medium"
            >
              Explore All Tools →
            </Link>
          </div>
        </section>

        {/* Popular Categories */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-primary">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.slice(0, 8).map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="group p-6 bg-white rounded-lg border hover:border-emerald-500 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <span className="text-3xl bg-emerald-50 p-3 rounded-lg group-hover:scale-110 transition-transform">
                    {categoryIcons[category.name] || '🔧'}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary group-hover:text-emerald-700 transition-colors">
                      {category.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                        {category.count} tools
                      </span>
                      <span className="text-emerald-600 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/categories"
              className="inline-flex items-center space-x-2 text-primary hover:text-emerald-800 font-medium group"
            >
              <span>View All Categories</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white py-8 border-t">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>© 2024 AI Magic Box. All rights reserved.</p>
            <p className="mt-2 text-sm">Your weekly source for new AI innovations</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home; 