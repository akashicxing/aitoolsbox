import { Breadcrumb } from '../components/Breadcrumb';
import { useParams } from 'react-router-dom';

const ToolDetail = () => {
  const { category, toolId } = useParams();
  
  return (
    <div className="container mx-auto px-4">
      <Breadcrumb />
      <h1 className="text-3xl font-bold my-4">Tool Details</h1>
      <p className="text-lg">Category: {category}</p>
      <p className="text-lg">Tool ID: {toolId}</p>
    </div>
  );
};

export default ToolDetail; 