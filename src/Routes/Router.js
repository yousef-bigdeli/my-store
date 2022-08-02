import { useRoutes } from "react-router";
import BestSellingPage from "../pages/BestSelling/BestSellingPage";
import ShopPage from "../pages/Shop/ShopPage";
import FaqPage from "../pages/FAQ/FaqPage";
import HomePage from "../pages/Home/HomePage";
import Page404 from "../pages/404/Page404";
import ProductPage from "../pages/Product/ProductPage";
import OfferPage from "../pages/Offer/OfferPage";
import LoginPage from "../pages/Login/LoginPage";

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
