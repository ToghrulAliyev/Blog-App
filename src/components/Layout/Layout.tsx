import React, { FC, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../modules/context/UserContext";
import Navbar from "../Navbar/Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = (props: Props) => {
  const { userInfo } = useContext(UserContext);


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
