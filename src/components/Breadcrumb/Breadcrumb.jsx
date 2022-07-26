import { Link } from "react-router-dom";
import "./Breadcrumb.scss";

const Breadcrumb = ({ crumbs }) => {
  const isLast = (index) => index === crumbs.length - 1;

  return (
    crumbs.length > 2 && (
      <nav className="appContainer">
        <ol className="breadcrumb">
          {crumbs.map(({ path, title }, index) => (
            <li key={path} className="breadcrumb-item">
              {index > 0 && !isLast(index) && (
                <span className="separator">/</span>
              )}
              {!isLast(index) && (
                <Link to={path} className="breadcrumb-link">
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
