import type { Components } from "@mui/material/styles/components";

export const MuiBottomNavigation: Components["MuiBottomNavigation"] = {
  defaultProps: {
    showLabels: true,
  },
  styleOverrides: {
    root: {
      backgroundColor: "#002117",
      height: "100%",
    },
  },
};

export const MuiBottomNavigationAction: Components["MuiBottomNavigationAction"] = {
  styleOverrides: {
    root: {
      "&.Mui-selected": {
        color: "#FFFFFF",
      },
    },
  },
};
