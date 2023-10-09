import { FC, ReactNode, createContext, useState } from "react";

// Create the context with an initial/default value.
export const UserContext = createContext<any | undefined>(undefined);

// Define your provider component.
export const UserContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userInfo, setUserInfo] = useState({});
  const [redirect, setRedirect] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
 

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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
