import React from "react";
import landing from "../images/landing.png";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#3C414D',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        height: '600px',
    },
    mainText: {
        fontFamily: 'Ubuntu',
        fontSize: '36px',
        textAlign: 'center',
    },
    subText: {
        fontFamily: 'Ubuntu',
        fontSize: '30px',
    },
    textRoot: {
        flexDirection: 'column',
        marginRight: '80px',
    }
}));

function Landing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className={classes.textRoot}>
        <Typography className={classes.mainText}>Apple Store</Typography>
        <Typography className={classes.subText}>
            The Phone You Always Desired
        </Typography>
      </div>
      <img src={landing} alt="landing" className={classes.img} />
    </div>
  );
}
export default Landing;
