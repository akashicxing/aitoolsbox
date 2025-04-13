import { Breadcrumb } from '../components/Breadcrumb';
import { useParams } from 'react-router-dom';

const Category = () => {
  const { category } = useParams();
  
  return (
    <div className="container mx-auto px-4">
      <Breadcrumb />
      <h1 className="text-3xl font-bold my-4">{category} AI Tools</h1>
      <p className="text-lg">Browse {category} tools</p>
    </div>
  );
};

export default Category; 