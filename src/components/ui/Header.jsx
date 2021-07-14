import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@material-ui/core";
import React from "react";
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
    height: "7em",
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            {/* <Typography variant="h3" color="secondary">
              App Development
            </Typography> */}
            <img src={logo} className={classes.logo} alt="company logo" />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolBarMargin} />
      {/*  AppBar 아래에 margin 추가 */}
    </>
  );
}

export default Header;
