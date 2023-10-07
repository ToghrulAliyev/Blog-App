import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../modules/context/UserContext";

const Login = () => {
  // const [redirect, setRedirect] = useState<boolean>(false);
  const {
    userInfo,
    setUserInfo,
    redirect,
    setRedirect,
    username,
    setUsername,
    password,
    setPassword,
  } = useContext(UserContext);

  async function loginUser() {
    const response = await fetch("https://blogpage-c97k.onrender.com/login", {
      method: "POST",
      // mode: "no-cors",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (response.ok) {
      const user = await response.json();

      setUserInfo(user);
      setRedirect(true);
    } else {
      alert("wrong credentials");
    }
  }

  if (redirect || userInfo?.username?.length > 0) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="form">
      <div>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          onChange={(e: any) => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="password"
          placeholder="Paswword"
          onChange={(e: any) => setPassword(e.target.value)}
          value={password}
        />
        <button onClick={() => loginUser()}>Login</button>
        <div>
          Quick Access <br />
          username: test <br />
          password: 123
        </div>
      </div>
    </div>
  );
};

export default Login;
