//single page applictions
import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Album from "./Components/Album";
import Comment from "./Components/Comment";
import Photo from "./Components/Photo";
import Post from "./Components/Post";
function App() {
  return (
    <div>
      <h1>Welcome to SPA</h1>
      <BrowserRouter>
      <div>
        <nav>
          <Link to='/album'>Album</Link> |
          <Link to='/comment'>Comment</Link> |
          <Link to='/photo'>Photo</Link> |
          <Link to='/post'>Post</Link> 
        </nav>
        <Routes>
          <Route path="/album" element={<Album/>}></Route>
          <Route path="/comment" element={<Comment/>}></Route>
          <Route path="/photo" element={<Photo/>}></Route>
          <Route path="/post" element={<Post/>}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;


