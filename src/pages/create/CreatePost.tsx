import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import "./CreatePage.scss";

 

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function newPost() {
 
    const postData = new FormData();
    postData.set("title", title);
    postData.set("summary", summary);
    postData.set("content", content);
    postData.set("file", file[0]);
    const resp = await fetch("https://blogpage-c97k.onrender.com/post", {
      method: "POST",
      body: postData,
      credentials: "include",
    });
    if (resp.ok) {
      navigate("/");
    } else {
      // console.log("aaa");
    }
  }
  return (
    <form className="create_container" onSubmit={handleSubmit(newPost)}>
      <div className="form_container">
        <div className="create_form">
          <h1>Create New Post</h1>
          <input
            {...register("title", { required: true })}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            name="title"
          />
          {errors.name?.type === "required" && (
            <div className="required_message" role="alert">
              Title is required
            </div>
          )}
          <input
            {...register("summary", { required: true })}
            type="text"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Summary"
            name="summary"
          />
          {errors.name?.type === "required" && (
            <div className="required_message" role="alert">
              Summary is required
            </div>
          )}
          <input
            {...register("name", { required: true })}
            type="file"
            onChange={(e: any) => setFile(e.target.files)}
            name="file"
          />

          {errors.name?.type === "required" && (
            <div className="required_message" role="alert">
              Image is required
            </div>
          )}

          <ReactQuill
            value={content}
            onChange={(newValue) => setContent(newValue)}
            modules={modules}
            theme="snow"
            formats={formats}
          />
        </div>
        <button type="submit">Create Post</button>
      </div>
    </form>
  );
};

export default CreatePost;
