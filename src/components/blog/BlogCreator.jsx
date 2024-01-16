import { PhotoIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

// Initial data for a blog post
const BASE_DATA = {
  title: "",
  introduction: "",
  imgUrl: "",
  text: "",
  date: "1300/01/01",
  url: "news" + Math.floor(Math.random() * 10000),
};

// Base URL for the server
const BASE_URL = "http://localhost:5000";

// Main BlogCreator component
function BlogCreator() {
  const navigate = useNavigate();
  const [data, setData] = useState(BASE_DATA); // State for blog data
  const { title, introduction, text } = data;
  const [sendData, setSendData] = useState(false); // State to trigger data sending
  const [Posted, setPosted] = useState(false); // State to track if data was posted successfully

  // useEffect to handle data posting
  useEffect(() => {
    async function postData(postItem) {
      try {
        // Post data to the server using Axios
        await axios.post(`${BASE_URL}/news`, postItem);
        setPosted(true);
        toast.success("پست ارسال شد");
      } catch (err) {
        setPosted(false);
        toast.error(err?.message);
      }
    }
    // If sendData is true, initiate the data posting process
    if (sendData) {
      postData(data);

      // Navigate to "/BlogId" after a delay
      setTimeout(() => {
        navigate("/BlogId");
      }, 200);
    }
  }, [sendData]);

  // Function to prepare and set data for sending
  const readyData = () => {
    setData(() => {
      return {
        ...data,
        date: new Date().toLocaleDateString("fa-IR"),
      };
    });
    setSendData(true);
  };

  return (
    <div id="BlogCreatorId" className="blogCreator w-full h-auto p-3 md:p-10">
      {/* Editor */}
      <div className="flex flex-col shadow-2xl shadow-cBlack-100 rounded-3xl overflow-hidden p-3 md:p-10 bg-white gap-5">
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="h-60 col-span-2  flex flex-col  gap-y-4 ">
            {/* Input fields for title and introduction */}
            <input
              type="text"
              value={title}
              placeholder="موضوع"
              className="inp"
              onChange={(e) => {
                setData({ ...data, title: e.target.value });
              }}
            />
            <input
              type="text"
              value={introduction}
              placeholder="مقدمه"
              maxLength={300}
              className="inp"
              onChange={(e) => {
                setData({ ...data, introduction: e.target.value });
              }}
            />
          </div>
          {/* GetMedia component for handling media uploads */}
          <GetMedia data={data} setData={setData} />
        </div>
        <div className="w-full h-auto">
          {/* Textarea for entering the main content */}
          <textarea
            value={text}
            className="inp min-h-96"
            placeholder="متن"
            onChange={(e) => {
              setData({ ...data, text: e.target.value });
            }}
          ></textarea>
        </div>

        {/* Buttons for sending or canceling the post */}
        <div className="finally flex flex-row justify-start gap-x-3">
          <button className="btn" onClick={readyData}>
            ارسال
          </button>
          <button
            className="btn"
            onClick={() => {
              setSendData(() => false);
              navigate("/BlogId");
            }}
          >
            لغو
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogCreator;

// GetMedia component for handling media uploads
function GetMedia({ data, setData }) {
  const ref = useRef();
  return (
    <div className="min-h-60 border-2 border-cBlack-100 border-dashed rounded-2xl overflow-hidden">
      <label className="relative w-full h-full flex flex-col justify-center items-center cursor-pointer">
        {/* File input for uploading images */}
        <input
          type="file"
          ref={ref}
          accept="image/*"
          className="hidden"
          onChange={() => {
            setData({
              ...data,
              imgUrl: URL.createObjectURL(ref.current.files[0]).toString(),
            });
          }}
        />
        {/* Icon for uploading images */}
        <PhotoIcon className="fill-cBlack-100 w-16 h-16" />
        {data.imgUrl ? (
          // Display image preview if an image is selected
          <img
            src={data.imgUrl}
            alt="image"
            className="absolute w-full h-full object-contain bg-white"
          />
        ) : (
          // Display text if no image is selected
          <span>آپلود تصویر</span>
        )}
      </label>
    </div>
  );
}
