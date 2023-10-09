import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
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

const EditPost = () => {
  const { id } = useParams<any>();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://blogpage-c97k.onrender.com/post/" + id)
      .then((response) => response.json())
      .then((info) => {
        setTitle(info.title);
        setSummary(info.summary);
        setContent(info.content);
      });
  }, []);

  async function updatePost() {
    const postData = new FormData();
    postData.set("title", title);
    postData.set("summary", summary);
    postData.set("content", content);
    postData.set("id", id as any);
    if (file?.[0]) {
      postData.set("file", file?.[0]);
    }
    const resp = await fetch("https://blogpage-c97k.onrender.com/post", {
      method: "PUT",
      body: postData,
      credentials: "include",
    });
    if (resp.ok) {
      navigate(`/detail/${id}`);
    }
  }

  return (
    <div className="create_container">
      <div className="form_container">
        <div className="create_form">
          <h1>Create New Post</h1>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <input
            type="text"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Summary"
          />
          <input type="file" onChange={(e: any) => setFile(e.target.files)} />
          <ReactQuill
            value={content}
            onChange={setContent}
            modules={modules}
            theme="snow"
            formats={formats}
          />
        </div>
        <button onClick={()=>updatePost()}>Update Post</button>
      </div>
    </div>
  );
};

export default EditPost;
