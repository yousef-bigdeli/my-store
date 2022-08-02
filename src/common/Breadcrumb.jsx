import { Link } from "react-router-dom";

const Breadcrumb = ({ crumbs }) => {
  const isLast = (index) => index === crumbs.length - 1;

  return (
    crumbs.length > 2 && (
      <nav className="appContainer">
        <ol className="flex items-center py-2 px-4">
          {crumbs.map(({ path, title }, index) => (
            <li key={path} className="text-13 flex">
              {index > 0 && !isLast(index) && <span className="mx-2">/</span>}
              {!isLast(index) && (
                <Link to={path} className="capitalize hover:text-primaryColor">
                  {title}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    )
  );
};

export default Breadcrumb;

// const crumbs = [
//   { path: "/", title: "Home" },
//   { path: "/category", title: "Category" },
//   { path: "/category/laptop-notebook", title: "laptop-notebook" },
// ];
