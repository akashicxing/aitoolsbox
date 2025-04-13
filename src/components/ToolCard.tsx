import { Link } from 'react-router-dom';
import type { Tool } from '../data1';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard = ({ tool }: ToolCardProps) => {
  return (
    <div className="bg-white rounded-lg border hover:border-emerald-500 transition-colors overflow-hidden">
      {tool.screenshot && (
        <img
          src={tool.screenshot}
          alt={tool.name}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{tool.name}</h3>
          <span className="px-2 py-1 rounded text-sm bg-emerald-100 text-emerald-800">
            {tool.category}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2 h-[3em]">{tool.description}</p>

        <a
          href={tool.redirect_url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Try Now
        </a>
      </div>
    </div>
  );
};

export default ToolCard; 