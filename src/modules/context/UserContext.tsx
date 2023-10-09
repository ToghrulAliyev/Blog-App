import { FC, ReactNode, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Create the context with an initial/default value.
export const UserContext = createContext<any | undefined>(undefined);

// Define your provider component.
export const UserContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userInfo, setUserInfo] = useState<any>({});
  const [redirect, setRedirect] = useState<boolean>();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState<boolean>(true)
  const navigate = useNavigate();

 

  useEffect(() => {
    try {
      fetch("https://blogpage-c97k.onrender.com/profile", {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((user) => {
          setUserInfo(user);
          setLoading(false); // Set loading to false when userInfo is available
        });
    } catch (error) {
      setLoading(false); // Set loading to false in case of an error
    }
  }, []);

  useEffect(() => {
    // Check if loading is still true (fetch request is not yet completed)
    if (loading) {
      return;
    }

    if (userInfo?.username?.length > 0) {
      navigate('/');
    } else {
      navigate('/login');
    }
  }, [loading, userInfo]);

  async function logout() {
    try {
      let response = await fetch("https://blogpage-c97k.onrender.com/logout", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (response) {
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
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        redirect,
        setRedirect,
        username,
        setUsername,
        password,
        setPassword,
        logout,
        loading
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
