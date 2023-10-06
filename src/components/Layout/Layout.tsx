import React, { FC, useContext, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../../pages/home/Home";
import { UserContext } from "../../modules/context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = (props: Props) => {
  const { userInfo,redirect } = useContext(UserContext);


  console.log("vvvvvvv",userInfo)
  const navigate = useNavigate();
 
  // console.log("userInfo",userInfo)
  // console.log("window.location.pathname",window.location.pathname)
   useEffect(()=>{
    if(!userInfo.length){
      navigate('/login')
    }
   },[])
 
 
  
  return (
    <>
      <Navbar />
      <div className="conatiner">{props.children}</div>
    </>
  );
};

export default Layout;
