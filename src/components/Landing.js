import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bg.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: "85%",
  },
  img: {
    height: "600px",
  },
}));

function Landing() {
  const classes = useStyles();

  return <div className={classes.root} />;
}
export default Landing;
