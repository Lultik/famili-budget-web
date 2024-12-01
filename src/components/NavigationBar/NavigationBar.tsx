import { AppBar, Toolbar } from "@mui/material";
import { NavLink } from "react-router";

export const NavigationBar = () => {
  return (
    <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/budget">Budget</NavLink>
        <NavLink to="/add">Add</NavLink>
        <NavLink to="/advices">Advices</NavLink>
        <NavLink to="/more">More</NavLink>
      </Toolbar>
    </AppBar>
  );
};
