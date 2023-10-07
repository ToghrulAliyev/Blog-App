import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../modules/context/UserContext";
import "./Navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();

  // const [username, setUsername] = useState<any>();
  const { userInfo, setUserInfo, setRedirect,password } = useContext(UserContext);
  const username = userInfo?.username?.length > 0;

  console.log("username", username);
  console.log("sdfsdfsdfsdf", userInfo);

  useEffect(() => {
    try {
      fetch("https://blogpage-c97k.onrender.com/profile", {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((user) => {
          console.log("resuser", user);
          setUserInfo(user);
        });
    } catch (error) {
      console.log("errrrrr", error);
    }
  }, []);

  async function logout() {
    try {
      let response = await fetch("https://blogpage-c97k.onrender.com/logout", {
        method: "POST",
        // mode: "no-cors",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (response) {
        console.log('respo',response)
        setUserInfo("");
        setRedirect(false);
        navigate("/login");
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      alert("test");
    }
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
