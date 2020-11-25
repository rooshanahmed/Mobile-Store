import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/bg.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: '85%',
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
        {/* <Typography className={classes.mainText}>Welcome To Apple Store</Typography> */}
        {/* <Typography className={classes.subText}>
            The Phone You Always Desired
        </Typography> */}
      </div>
    </div>
  );
}
export default Landing;
