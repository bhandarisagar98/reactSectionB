import axios from "axios";
import React from "react";

const Create = () => {
  const createBlog = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    let formData = {
      name: data.get("name"),
      avatar: data.get("avatar"),
      desc: data.get("desc"),
    };
    let res = await axios.post(
      "https://65cdc8f5c715428e8b3f0df3.mockapi.io/blog",
      formData
    );
    if (res.status === 201) {
      alert("created blog successfully");
    }
  };
  return (
    <div>
      <p style={{ color: "red" }}>Create Blog</p>
      <form onSubmit={createBlog}>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="avatar" placeholder="avatar" />
        <input type="text" name="desc" placeholder="desc" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Create;
