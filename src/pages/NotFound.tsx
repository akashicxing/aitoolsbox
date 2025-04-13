import { Breadcrumb } from '../components/Breadcrumb';

const NotFound = () => {
  return (
    <div className="container mx-auto px-4">
      <Breadcrumb />
      <h1 className="text-3xl font-bold my-4">404 - Page Not Found</h1>
      <p className="text-lg">The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound; 