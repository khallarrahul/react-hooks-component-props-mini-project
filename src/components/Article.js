import React from "react";

function Article(props) {
  const { title, date, preview, minutes } = props;

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <br></br>
      <small>{`Minutes to read: ${minutes}`}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
