import React, { FC, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../modules/context/UserContext";
import Navbar from "../Navbar/Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = (props: Props) => {
  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();
   useEffect(()=>{
    if(!(userInfo?.username?.length > 0 )){
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
