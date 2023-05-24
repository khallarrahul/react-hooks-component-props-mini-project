import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="Rahul's Tech Blog" />
      <About image={blogData.image} text="Translating your language to code" />
    </div>
  );
}

export default App;
