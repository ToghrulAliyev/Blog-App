import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./Post.scss";
type Props = {
  postVal: any;
};

const Post: FC<Props> = ({ postVal }) => {
  const navigate = useNavigate();

 
 
  const originalDate = new Date(postVal?.createdAt);

  // Format the date and time components separately
  const date = originalDate.toLocaleDateString(); // Date portion
  const time = originalDate.toLocaleTimeString(); // Time portion
 

  return (
   
      <div onClick={() => navigate(`/detail/${postVal._id}`)} className="post_container">
        <div className="post_image">
          <img
            src={'https://blogpage-c97k.onrender.com/'+postVal.cover}
            alt=""
          />
        </div>
        <div className="post_details">
          <h4>{postVal?.title}</h4>
          <span>{postVal?.author?.username} | {date} | {time}</span>
          <p>{postVal?.summary}</p>
        </div>
      </div>
 
  );
};

export default Post;
