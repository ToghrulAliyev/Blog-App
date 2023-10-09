import React, { FC, useContext } from "react";
import { SquareLoader } from "react-spinners";
import { UserContext } from "../../modules/context/UserContext";
import Navbar from "../Navbar/Navbar";

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
