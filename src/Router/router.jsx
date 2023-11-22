import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';

import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import SingleProduct from '../pages/SingleProduct';
import Blog from '../pages/Blog';
import SingleBlog from '../pages/SingleBlog';
import Contact from '../pages/Contact';

// admin routes
import Dashboard from '../admin/pages/Dashboard';
import Login from '../admin/pages/Login';
import Register from '../admin/pages/Register';
import AddProduct from '../admin/pages/AddProduct';
import EditProduct from '../admin/pages/EditProduct';
import AllProducts from '../admin/pages/AllProducts';
// order routes
import OrderDetails from '../admin/pages/OrderDetails';
import OrderCompleted from '../admin/pages/OrderCompleted';
import OrderOnHold from '../admin/pages/OrderOnHold';
import OrderProcessing from '../admin/pages/OrderProcessing';
import EditOrder from '../admin/pages/EditOrder';
// blog routes
import AllBlogs from '../admin/pages/AllBlogs';
import AddBlog from '../admin/pages/AddBlog';
import EditBlog from '../admin/pages/EditBlog';
import UserDetails from '../admin/pages/UserDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/single-product/:id',
        element: <SingleProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/allproducts/${params.id}`),
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/blog/:id',
        element: <SingleBlog />,
        loader: ({ params }) =>
        fetch(`http://localhost:5000/api/v1/allblogs/${params.id}`),
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
  // admin routes
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard/login',
        element: <Login />,
      },
      {
        path: '/dashboard/register',
        element: <Register />,
      },
      {
        path: '/dashboard',
        element: <AllProducts />,
      },
      {
        path: '/dashboard/add-product',
        element: <AddProduct />,
      },
      {
        path: '/dashboard/all-products',
        element: <AllProducts />,
      },
      {
        path: '/dashboard/edit-product/:id',
        element: <EditProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/allproducts/${params.id}`),
      },
      {
        path: '/dashboard/user-details',
        element: <UserDetails />,
      },

      // order routes
      {
        path: '/dashboard/order-details',
        element: <OrderDetails />,
      },
      {
        path: '/dashboard/order-completed',
        element: <OrderCompleted />,
      },
      {
        path: '/dashboard/order-processing',
        element: <OrderProcessing />,
      },
      {
        path: '/dashboard/order-onhold',
        element: <OrderOnHold />,
      },
      {
        path: '/dashboard/edit-order/:id',
        element: <EditOrder />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/allorders/${params.id}`),
      },

      //blog routes
      {
        path: '/dashboard/all-blogs',
        element: <AllBlogs />,
      },
      {
        path: '/dashboard/add-blog',
        element: <AddBlog />,
      },
      {
        path: '/dashboard/edit-blog/:id',
        element: <EditBlog />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/allblogs/${params.id}`),
      },
     
    ],
  },
]);

export default router;
