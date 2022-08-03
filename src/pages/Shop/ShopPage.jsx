import { useLocation } from "react-router-dom";

import Breadcrumb from 'common/Breadcrumb';
import ShopList from './container/ShopList';

const ShopPage = () => {
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
      <ShopList />
    </>
  );
};

export default ShopPage;
