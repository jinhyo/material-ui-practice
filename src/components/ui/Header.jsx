import {
  AppBar,
  Button,
  makeStyles,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";

function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true, // true일 경우 위 아래 스크롤할 때 다 적용됨, false일 경우에는 아래로 스크롤할 때만 적용됨
    threshold: 10,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 14 /* 숫자는 음영이 지는 범위 */ : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolBarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "5em",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginlef: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "35px",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

function Header() {
  const location = useLocation();
  const classes = useStyles();
  const [value, setValue] = useState(0);
  console.log("🚀 ~ file: Header.jsx ~ line 38 ~ Header ~ value", value);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (location.pathname === "/services" && value !== 1) {
      setValue(1);
    } else if (location.pathname === "/revolution" && value !== 2) {
      setValue(2);
    } else if (location.pathname === "/about" && value !== 3) {
      setValue(3);
    } else if (location.pathname === "/contact" && value !== 4) {
      setValue(4);
    }
  }, [value]);

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            {/* <Typography variant="h3" color="secondary">
              App Development
            </Typography> */}
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              disableRipple
              onClick={() => setValue(0)}
            >
              <img src={logo} className={classes.logo} alt="company logo" />
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor="secondary"
            >
              <Tab
                className={classes.tab}
                component={Link}
                to="/"
                label="Home"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/services"
                label="Services"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/revolution"
                label="The Revolution"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/about"
                label="About us"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/contact"
                label="Contact us"
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              FREE ESTIMATE
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolBarMargin} />
      {/*  AppBar 아래에 margin 추가 */}
    </>
  );
}

export default Header;
