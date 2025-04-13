import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Tools from '../pages/Tools';
import Category from '../pages/Category';
import ToolDetail from '../pages/ToolDetail';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        handle: {
          breadcrumb: () => 'Home'
        }
      },
      {
        path: 'tools',
        element: <Tools />,
        handle: {
          breadcrumb: () => 'Tools'
        }
      },
      {
        path: 'tools/:category',
        element: <Category />,
        handle: {
          breadcrumb: (params: { category: string }) => params.category
        }
      },
      {
        path: 'tools/:category/:toolId',
        element: <ToolDetail />,
        handle: {
          breadcrumb: (params: { toolId: string }) => params.toolId
        }
      }
    ]
  }
]); 