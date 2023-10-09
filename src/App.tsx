import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { UserContextProvider } from "./modules/context/UserContext";
import CreatePost from "./pages/create/CreatePost";
import EditPost from "./pages/create/EditPost";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import PostDetail from "./pages/postDetail/PostDetail";
import Register from "./pages/register/Register";



const App = () => {
  return (
    <>
      <UserContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<PostDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/edit/:id" element={<EditPost />} />
          </Routes>
        </Layout>
      </UserContextProvider>
    </>
  );
};

export default App;
