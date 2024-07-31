import MainLayout from "@/components/Layouts/MainLayouts";
import Home from "@/pages/Home/Home";
import PlantDetails from "@/pages/Movies/PlantDetails";

import CheckOut from "@/pages/CheckOut/CheckOut";

import Product from "@/pages/ManageProduct/Product";
import ShopBanner from "@/pages/Shop/Shop";
import Billing from "@/pages/Billing/Billing";
import OrderConfirmation from "@/pages/Billing/OrderConfirmation";
import NotFound from "@/pages/shared/NotFound";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/plant/:id",
        element: <PlantDetails />,
      },
      {
        path: "/cart",
        element: <CheckOut />,
      },
      {
        path: "/confirm",
        element: <OrderConfirmation />,
      },
      {
        path: "/shop",
        element: <ShopBanner />,
      },
      {
        path: "/billing",
        element: <Billing />,
      },
      { path: "/manageproduct",
        
        element: <Product /> },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },


]);

export default router;
