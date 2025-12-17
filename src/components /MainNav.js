import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { useHistory, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    if (location.pathname === "/") setValue(0);
    else if (location.pathname === "/movies") setValue(1);
    else if (location.pathname === "/series") setValue(2);
    else if (location.pathname === "/search") setValue(3);
  }, [location.pathname]);

  const navStyle = {
    backgroundColor: theme === 'dark' ? '#2d313a' : '#ffffff',
    boxShadow: theme === 'dark'
      ? '0 -4px 20px rgba(0, 0, 0, 0.3)'
      : '0 -4px 20px rgba(0, 0, 0, 0.1)',
  };

  const actionStyle = {
    color: theme === 'dark' ? '#ffffff' : '#2d3436',
  };

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        if (newValue === 0) history.push("/");
        else if (newValue === 1) history.push("/movies");
        else if (newValue === 2) history.push("/series");
        else if (newValue === 3) history.push("/search");
      }}
      showLabels
      className={classes.root}
      style={navStyle}
    >
      <BottomNavigationAction
        style={actionStyle}
        label="Trending"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={actionStyle}
        label="Movies"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        style={actionStyle}
        label="TV Series"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        style={actionStyle}
        label="Search"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}