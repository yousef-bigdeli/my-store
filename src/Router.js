import { useRoutes } from "react-router";
import BestSellingPage from "./pages/BestSellingPage";
import ShopPage from "./pages/ShopPage";
import FaqPage from "./pages/FaqPage";
import HomePage from "./pages/HomePage";
import Page404 from "./pages/Page404";
import ProductPage from "./pages/ProductPage";
import OfferPage from "./pages/OfferPage.jsx";
import LoginPage from './pages/LoginPage';

const Router = () => {
  return useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "product/:id/:title", element: <ProductPage /> },
    {
      path: "shop",
      element: <ShopPage />,
      children: [
        { path: ":name/:brand", element: <ShopPage /> },
        { path: ":name", element: <ShopPage /> },
      ],
    },
    { path: "faq", element: <FaqPage /> },
    { path: "offer", element: <OfferPage /> },
    { path: "best-selling", element: <BestSellingPage /> },
    { path: "login", element: <LoginPage /> },
    { path: "*", element: <Page404 /> },
  ]);
};

export default Router;