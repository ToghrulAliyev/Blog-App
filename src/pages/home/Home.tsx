import React, { useEffect, useState } from "react";
import Post from "../../components/Post/Post";
import Navbar from "../../components/Navbar/Navbar";

type Props = {};

const Home = (props: Props) => {
  const [posts, setPosts] = useState<any>();

  async function fetchPost(){
   await fetch("https://blogpage-c97k.onrender.com/post")
      .then((res) => res.json())
      .then((post) => setPosts(post));
  }
  useEffect(() => {
    fetchPost()
  }, []);
  return (
    <div className="post">
      {posts?.length > 0 ? (
        posts.map((p: any) => <div key={p._id}>  <Post postVal={p} /> </div>)
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Home;
