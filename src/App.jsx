import React from "react";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";
import PostDetails from "./pages/PostDetails";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/posts/:id' element={<PostDetails/>}/>
      </Routes>
    </div>
  );
};

export default App;
