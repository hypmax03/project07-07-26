import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const navigate=useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
        );
        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, [id]);

  if (!post) {
    return <h1 className="text-white">Loading...</h1>;
  }

  return (
    <div className="min-h-screen bg-[#050505] bg-gradient-to-br from-[#07080c] via-[#08101a] to-[#07020a] flex items-center justify-center px-4">
      <div className="w-full max-w-3xl rounded-2xl border border-white/30 bg-white/5 backdrop-blur-xl p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
        <div className="flex flex-col gap-6 p-6">
          <h1 className="text-white font-semibold">Post Details</h1>
          <div className="flex flex-col gap-6">
            <h1 className="text-white text-4xl font-semibold">{post.title}</h1>
            <p className="text-slate-300 leading-8">{post.body}</p>
            <div className="flex gap-4 text-slate-400">
              <span>Post ID: {post.id}</span>
              <span>User ID: {post.userId}</span>
              <button
                onClick={() => navigate(-1)}
                className="mb-6 text-sky-400 hover:text-sky-300"
              >
                ← Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
