import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./create.css";
import { IoIosAddCircleOutline } from "react-icons/io";

// blog title=title
// body=value
// blog Picture= picture
// user id=user_id
// categories/ tags= tag

export const Create = () => {
  // Navigation
  const navigate = useNavigate();
  // State handling
  const [title, setBodyTitle] = useState("");
  const [value, setValue] = useState("");
  const [picture, setPicture] = useState(null);
  const [user_id, setUserId] = useState("");
  const [tag, setTag] = useState("");

  const data = {
    title,
    value,
    picture,
    user_id,
    tag,
  };

  // setting error and success messages
  // const [setErrorMessage, setErrorMessage] = useState(false)
  // const [successMessage, setSuccessMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://blog.shbootcamp.com.ng/write_post.php", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.status === "success") {
          navigate("/");
        }
      });
  };

  return (
    <>
      <section className="newPost">
        <div className="container boxItems">
          <div className="img ">
            <img
              src="https://images.pexels.com/photos/6424244/pexels-photo-6424244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image"
              class="image-preview"
            />
          </div>

          <form
            action="https://blog.shbootcamp.com.ng/write_post.php"
            method="post"
          >
            <div className="inputfile flexCenter">
              <input
                type="file"
                accept="image/*"
                alt="img"
                value={picture}
                onChange={(e) => {
                  setPicture(e.target.files[0]);
                }}
              />
            </div>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => {
                setBodyTitle(e.target.value);
              }}
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={value}
              placeholder="Whats on your mind?"
              onChange={(e) => {
                setValue(e.target.value);
              }}
            ></textarea>
            <input
              type="text"
              placeholder="Enter your tag"
              value={tag}
              onChange={(e) => {
                setTag(e.target.value);
              }}
            />

            <button className="button">Create Post</button>
          </form>
        </div>
      </section>
    </>
  );
};
