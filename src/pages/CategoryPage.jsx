import { useLocation } from "react-router-dom";

import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

const CategoryPage = () => {
  const { pathname } = useLocation();
  // const { name, brand } = useParams();

  const pathArray = pathname.split("/");
  const crumbs = pathArray.map((item, index) => {
    const path = pathArray
      .slice(0, index + 1)
      .reduce(
        (prevPath, currentItem) =>
          `${prevPath === "/" ? "" : prevPath}/${currentItem}`,
        ""
      );
    const title = path === "/" ? "Home" : item.replace("-", " ");

    return { path, title };
  });

  return (
    <>
      <Breadcrumb crumbs={crumbs} />
    </>
  );
};

export default CategoryPage;
