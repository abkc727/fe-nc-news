import { Link } from "react-router-dom";
export const Nav = () => {
  return (
    <nav className="Nav">
      <Link className='Link' to="/">
        <p>Articles</p>
      </Link>
      <Link className='Link' to="/topics">
        <p>Topics</p>
      </Link>
    </nav>
  );
};
