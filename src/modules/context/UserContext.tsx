import { FC, ReactNode, createContext, useState } from "react";

// Create the context with an initial/default value.
export const UserContext = createContext<any | undefined>(undefined);

// Define your provider component.
export const UserContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  
  const [userInfo, setUserInfo] = useState({});
  const [redirect,setRedirect] = useState()

  // You can update userInfo with actual user data when needed.
  // For example:
  
  // console.log("user1",userInfo)

  return (
    <UserContext.Provider value={{userInfo,setUserInfo,redirect,setRedirect}}>
      {children}
    </UserContext.Provider>
  );
};
