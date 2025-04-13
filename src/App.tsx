import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Tools from './pages/Tools';
import Categories from './pages/Categories';
import CategoryDetail from './pages/CategoryDetail';
import About from './pages/About';
import { Search, Moon, Sun, Menu, X } from 'lucide-react';
import { categories, tools } from './index';
import { Category } from './categories';
import { Tool } from './data1';
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tools" element={<Tools />} />
          <Route path="categories" element={<Categories />} />
          <Route path="category/:id" element={<CategoryDetail />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;