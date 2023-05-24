import React from "react";

function About(props) {
  const defaultImage = "https://via.placeholder.com/215";
  return (
    <aside>
      <img src={props.image || defaultImage} alt="blog logo" />
      <p>{props.about}</p>
    </aside>
  );
}

export default About;
