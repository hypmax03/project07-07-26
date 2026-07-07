import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fecthPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");

        const data = await res.json();

        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fecthPosts();
  }, []);
  return (
    <div className="w-full min-h-screen bg-[#050505] bg-gradient-to-br from-[#07080c] via-[#08101a] to-[#07020a] flex items-center justify-center px-4 p-20">
      <div className="w-full  rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-sky-400 hover:text-sky-300"
        >
          ← Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:scale-105 transition duration-300"
            >
              <h2 className="text-xl text-white mb-3 font-semibold">
                {post.title}
              </h2>
              <p className="text-slate-400 line-clamp-3">{post.body}</p>
              <button
                className="mt-5 text-sky-400 hover:text-sky-300 font-medium"
                onClick={() => navigate(`/posts/${post.id}`)}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
