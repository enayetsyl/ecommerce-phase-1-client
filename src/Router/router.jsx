import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';

import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import SingleProduct from '../pages/SingleProduct';

// admin routes
import Dashboard from '../admin/pages/Dashboard';
import AddProduct from '../admin/pages/AddProduct';
import EditProduct from '../admin/pages/EditProduct';
import AllProducts from '../admin/pages/AllProducts';
import OrderDetails from '../admin/pages/OrderDetails';
import OrderCompleted from '../admin/pages/OrderCompleted';
import OrderOnHold from '../admin/pages/OrderOnHold';
import OrderProcessing from '../admin/pages/OrderProcessing';
import EditOrder from '../admin/pages/EditOrder';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },

      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/single-product/:id',
        element: <SingleProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/v1/allproducts/${params.id}`),
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
  // admin routes
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
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
          fetch(`http://localhost:5000/v1/allproducts/${params.id}`),
      },
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
      },
    ],
  },
]);

export default router;
