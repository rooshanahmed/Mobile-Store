import React from "react";
import landing from "../images/landing.png";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

function Landing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.mainText}>Apple Store</Typography>
      <Typography className={classes.subText}>
        The Phone You Always Desired
      </Typography>
      <img src={landing} alt="landing" className={classes.img} />
    </div>
  );
}
export default Landing;
