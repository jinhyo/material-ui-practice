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
import React from "react";
import { useState } from "react";
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
}));

function Header() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  console.log("🚀 ~ file: Header.jsx ~ line 38 ~ Header ~ value", value);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            {/* <Typography variant="h3" color="secondary">
              App Development
            </Typography> */}
            <img src={logo} className={classes.logo} alt="company logo" />
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              // aria-label="simple tabs example"
            >
              <Tab className={classes.tab} label="Home" />
              <Tab className={classes.tab} label="Services" />
              <Tab className={classes.tab} label="The Revolution" />
              <Tab className={classes.tab} label="About us" />
              <Tab className={classes.tab} label="Contact us" />
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
