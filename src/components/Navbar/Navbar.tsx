import React, { useEffect, useState, useContext } from "react";
import "./Navbar.scss";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../../modules/context/UserContext";
type Props = {};

const Navbar = (props: Props) => {
  const navigate = useNavigate();

  // const [username, setUsername] = useState<any>();
  const { userInfo, setUserInfo,setRedirect } = useContext(UserContext);
  const username = userInfo?.username?.length > 0;

  console.log("username", username);
  console.log("sdfsdfsdfsdf",userInfo)


  useEffect(() => {
   try {
    fetch("https://blogpage-c97k.onrender.com/profile", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((user) => {
        console.log("resuser", user)
        setUserInfo(user);
      });
   } catch (error) {
    console.log("errrrrr",error)
   }
  }, []);

  function logout() {
    fetch("https://blogpage-c97k.onrender.com/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo("");
    setRedirect(false)
    navigate("/login");
   
  }

  return (
    <header className="navbar">
      <div className="navbar_container">
        {username ? (
          <Link to={"/"} className="logo">
            MyBlog
          </Link>
        ) : (
          <div></div>
        )}

        <nav className="auth_container">
          {username ? (
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
