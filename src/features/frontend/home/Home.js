import { makeStyles } from "@material-ui/core";
import React from "react";

const Home = () => {
  const useStyle = makeStyles((theme) => ({
    root: {},
    baner: {
      maxHeight: "450px",
      backgroundImage: "url(/banerImg.jpg)",
      [theme.breakpoints.down("md")]: {
        maxHeight: "300px",
      },
    },
  }));

  const classes = useStyle();
  return <div className={classes.baner}></div>;
};

export default Home;
