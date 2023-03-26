import React from "react";
import lol from "../assets/shopimg.jpg";
import "../css/header.css";

const Home = () => {
  return (
    <div className="header">
      <div className="left-header">
        <h1>Welcome to our online store</h1>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          laboriosam vitae similique nemo ipsam, labore ad. A neque suscipit,
          doloribus quae aspernatur? Fugit, dolore?
        </h3>
        <button>Shop now</button>
      </div>
      <div className="right-header">
        <img src={lol} alt="" />
      </div>
    </div>
  );
};

export default Home;
