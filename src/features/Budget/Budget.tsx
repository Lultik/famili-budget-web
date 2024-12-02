import { Tab, Tabs, type TabsProps } from "@mui/material";
import { useCallback, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Header } from "../../components";
import { withAccess } from "../../hoc";
import { Role } from "../../types";

const BudgetComponent = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState("/budget/personal");

  const handleChange = useCallback<NonNullable<TabsProps["onChange"]>>(
    (_event, newValue) => {
      navigate(newValue);
      setValue(newValue);
    },
    [navigate],
  );

  return (
    <>
      <Header title="Budget" />
      <Tabs
        value={value}
        onChange={handleChange}
        sx={({ palette }) => ({
          backgroundColor: palette.background.paper,
          width: "100%",

          "& .MuiTabs-flexContainer": {
            justifyContent: "space-evenly",
          },
        })}
      >
        <Tab label="Personal" value="/budget/personal" />
        <Tab label="Household" value="/budget/household" />
      </Tabs>
      <Outlet />
    </>
  );
};

export const Budget = withAccess(BudgetComponent, { role: Role.Admin });
