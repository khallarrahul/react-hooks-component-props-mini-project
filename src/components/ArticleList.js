import React from "react";
import { v4 as uuidv4 } from "uuid";
import Article from "./Article";

function ArticleList(props) {
  const { posts } = props;
  console.log(props);

  return (
    <main>
      {posts.map((post) => (
        <Article key={uuidv4()} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} />
      ))}
    </main>
  );
}

export default ArticleList;
