import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DeleteModal from "../../components/modal/DeleteModal";
import { UserContext } from "../../modules/context/UserContext";



const PostDetail = () => {
  const [postInfo, setPostInfo] = useState<any>("");
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    fetch(`https://blogpage-c97k.onrender.com/post/${id}`)
      .then((res) => res.json())
      .then((res: any) => setPostInfo(res));
  }, []);

  async function deletePost(id: any) {
    try {
      const response = await fetch(`https://blogpage-c97k.onrender.com/post/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Include cookies if your API uses cookies for authentication
      });

      if (response.ok) {
        navigate("/");
      } else {
        alert("something went wrong");
        console.error("Error deleting post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  }

  if (!postInfo) return "";
  return (
    <>
      {userInfo.id === postInfo.author._id ? (
        <div className="post_manage">
          <Link to={`/edit/${postInfo._id}`}>Edit Post</Link>
          <div onClick={()=>setOpenModal(true)}>Delete Post</div>
        </div>
      ) : (
        <></>
      )}
      <div className="detail_container">
        <div className="post_detail_img">
          <img src={`https://blogpage-c97k.onrender.com/${postInfo?.cover}`} alt="" />
        </div>
        <h1>{postInfo?.title}</h1>
        <p>{postInfo?.summary}</p>
        <div dangerouslySetInnerHTML={{ __html: postInfo?.content }} />

        <DeleteModal openModal={openModal} setOpenModal={setOpenModal} deletePost={deletePost} postInfo={postInfo} />
      </div>
    </>
  );
};

export default PostDetail;
