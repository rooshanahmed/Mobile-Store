import React from "react";
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "none",
    // width: '80%',
    // margin: '0 auto',
    // display: 'flex',
  },
  text: {
    fontFamily: "Ubuntu",
    color: "black",
    fontSize: "28px",
    fontWeight: "bold",
  },
  btn: {
    display: "flex",
    marginLeft: "auto",
    justifyContent: "space-between",
  },
  appBarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: "1",
  },
  button: {
    margin: "14px",
  },
  store: {
    color: "#6F5A5A",
  },
}));

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appBarWrapper}>
          <Typography className={classes.text}>
            Apple <span className={classes.store}>Store.</span>
          </Typography>
          <div className={classes.btn}>
            <Button
              disableTouchRipple
              className={classes.button}
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Button>
            <Button
              disableTouchRipple
              className={classes.button}
              onClick={() => {
                navigate("products");
              }}
            >
              Products
            </Button>
            <Button
              disableTouchRipple
              className={classes.button}
              onClick={() => {
                navigate("about");
              }}
            >
              About Us
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
