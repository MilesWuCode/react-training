import React from "react";
// import css file, file name rule has *.module.css
import classes from "../css/Home.module.css";

function Home() {
  return (
    <div>
      <h3 className={classes.blue}>Home</h3>
    </div>
  );
}

export default Home;
