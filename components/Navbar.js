import Link from "next/link";
import myImg from './logo.png'; 

const Navbar = () => (
  <nav className="navbar navbar-expand navbar-light bg-primary mb-3">
    <div className="container">
      <img style={{width: '300px'}} src={myImg} />
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
