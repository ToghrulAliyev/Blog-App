import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../modules/context/UserContext";
import "./Navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();

  const { userInfo, logout } =useContext(UserContext);
  const user = userInfo?.username?.length > 0;



  return (
    <header className="navbar">
      <div className="navbar_container">
        {user ? (
          <Link to={"/"} className="logo">
            MyBlog
          </Link>
        ) : (
          <div></div>
        )}

        <nav className="auth_container">
          {user ? (
            <>
              <Link to={"/create"}> Create New Post</Link>
              <a onClick={logout}>Log out</a>
            </>
          ) : (
            <>
              <Link to={"/login"}>Login</Link>
              <Link to={"/register"}>Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
