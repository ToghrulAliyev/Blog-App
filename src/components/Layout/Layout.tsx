import React, { FC, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../modules/context/UserContext";
import Navbar from "../Navbar/Navbar";
import { SquareLoader } from "react-spinners";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = (props: Props) => {
  const { loading } = useContext(UserContext);

  return (
    <>
      {loading ? (
        <div className="spinner_container">
          <SquareLoader color="#646cff" />
        </div>
      ) : (
        <>
          <Navbar />
          <div className="conatiner">{props.children}</div>
        </>
      )}
    </>
  );
};

export default Layout;
