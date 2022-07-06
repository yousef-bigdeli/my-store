import { useRoutes } from "react-router";
import BestSellingPage from "./pages/BestSellingPage";
import CategoryPage from "./pages/CategoryPage";
import FaqPage from "./pages/FaqPage";
import HomePage from "./pages/HomePage";
import Page404 from "./pages/Page404";
import ProductPage from "./pages/ProductPage";
import OfferPage from "./pages/OfferPage.jsx";

const Router = () => {
  return useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "product/:id/:title", element: <ProductPage /> },
    {
      path: "category",
      element: <CategoryPage />,
      children: [
        { path: ":name/:brand", element: <CategoryPage /> },
        { path: ":name", element: <CategoryPage /> },
      ],
    },
    { path: "faq", element: <FaqPage /> },
    { path: "offer", element: <OfferPage /> },
    { path: "best-selling", element: <BestSellingPage /> },
    { path: "*", element: <Page404 /> },
  ]);
};

export default Router;