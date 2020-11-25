import React from "react";
import { AppBar, Button, makeStyles, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    appbar: {
        background: 'none',
        // width: '80%',
        // margin: '0 auto',
        // display: 'flex',
    },
    text: {
        fontFamily: 'Ubuntu',
        color: 'black',
        fontSize: '20px',
    },
    btn: {
        display: 'flex',
        marginLeft: 'auto',
        justifyContent: 'space-between',
    },
    appBarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: '1',
    },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appBarWrapper}>
            <Typography className={classes.text}>Apple Store</Typography>
            <div className={classes.btn}>
              <Button disableTouchRipple>Home</Button>
              <Button disableTouchRipple>Products</Button>
              <Button disableTouchRipple>About Us</Button>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;