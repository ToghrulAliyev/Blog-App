import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../modules/context/UserContext";

const Register = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { userInfo, redirect } = useContext(UserContext);

  async function registration(e: any) {
    e.preventDefault();
    const response = await fetch(
      "https://blogpage-c97k.onrender.com/register",
      {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.status === 200) {
      alert("registiration successful");
      navigate("/login");
    } else {
      alert("registration failed");
    }
  }

  if (redirect || userInfo?.username) {
    return <Navigate to={"/"} />;
  }

  return (
    <form className="form" onSubmit={registration}>
      <div>
        <h1>Register</h1>
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
        <button>Register</button>
      </div>
    </form>
  );
};

export default Register;
