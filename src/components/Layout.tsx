import { Outlet, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const getLinkClasses = (path: string) => {
    return `text-primary font-medium px-3 py-2 rounded-lg transition-colors ${
      isActive(path)
        ? 'bg-emerald-50 text-emerald-700'
        : 'hover:bg-emerald-50 hover:text-emerald-700'
    }`;
  };

  return (
    <div className="min-h-screen bg-secondary">
      <Helmet>
        <title>AI Magic Box - New AI Tools and Resources</title>
        <meta name="description" content="Discover and explore new AI innovations and tools. AI Magic Box is your comprehensive directory of artificial intelligence resources." />
      </Helmet>
      
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-primary shadow-sm">
        <nav className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="AI Magic Box" className="h-8 w-8" />
            <span className="text-xl font-bold text-white">AI Magic Box</span>
          </Link>
          <div className="flex items-center space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-white hover:text-gray-200 transition-colors ${isActive ? 'font-semibold' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/tools"
              className={({ isActive }) =>
                `text-white hover:text-gray-200 transition-colors ${isActive ? 'font-semibold' : ''}`
              }
            >
              Tools
            </NavLink>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                `text-white hover:text-gray-200 transition-colors ${isActive ? 'font-semibold' : ''}`
              }
            >
              Categories
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-white hover:text-gray-200 transition-colors ${isActive ? 'font-semibold' : ''}`
              }
            >
              About
            </NavLink>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-20 pb-12">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white py-8 border-t">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 AI Magic Box. All rights reserved.</p>
          <p className="mt-2 text-sm">Your weekly source for the latest AI innovations</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 