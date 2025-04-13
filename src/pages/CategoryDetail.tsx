import { useParams } from 'react-router-dom';
import { tools as tools1 } from '../data1';
import { tools as tools2 } from '../data2';
import { Helmet } from 'react-helmet';

const CategoryDetail = () => {
  const { id } = useParams();
  const decodedCategory = decodeURIComponent(id || '');
  
  // Merge all tools
  const allTools = [...tools1, ...tools2];
  
  // Filter tools by category
  const categoryTools = allTools.filter(tool => tool.category === decodedCategory);

  return (
    <>
      <Helmet>
        <title>{`${decodedCategory} - AI Tools & Resources | AI Magic Box`}</title>
        <meta 
          name="description" 
          content={`Explore our collection of ${decodedCategory.toLowerCase()} tools. Find and compare the best AI solutions for ${decodedCategory.toLowerCase()}. Detailed features, reviews, and use cases for each tool.`}
        />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">{decodedCategory}</h1>
          <p className="text-xl text-gray-600">
            Explore {categoryTools.length} {categoryTools.length === 1 ? 'tool' : 'tools'} in this category
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryTools.map((tool) => (
            <a
              key={tool.tool_id}
              href={tool.redirect_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                <img
                  src={tool.screenshot}
                  alt={tool.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {tool.name}
              </h2>
              <p className="text-gray-600 mb-4">
                {tool.description}
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-emerald-600 font-medium">
                  {tool.saves} saves
                </span>
                <div className="flex items-center text-emerald-600">
                  <span>Learn More</span>
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
              </div>
            </a>
          ))}
        </div>

        {/* Empty State */}
        {categoryTools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No tools found in this category yet.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CategoryDetail; 