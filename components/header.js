import Link from "next/link";

const CustomHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link href="/">
            <a className="nav-link" >Home</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/blogs" className="nav-link">
            <a className="nav-link">Blogs</a>
          </Link>
        </li>
        <li className="nav-item">
          <a href="/users" className="nav-link">
            Users
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default CustomHeader;
