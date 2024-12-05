import { Box, Tab, Tabs, type TabsProps } from "@mui/material";
import { useCallback, useState } from "react";
import { Outlet, useNavigate } from "react-router";
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
    <Box
      minHeight="100vh"
      height="100%"
      sx={({ palette }) => ({
        background: palette.background.default,
      })}
    >
      <Header title="Budget" />
      <Tabs value={value} onChange={handleChange} variant="fullWidth">
        <Tab label="Personal" value="/budget/personal" />
        <Tab label="Household" value="/budget/household" />
      </Tabs>
      <Outlet />
    </Box>
  );
};

export const Budget = withAccess(BudgetComponent, { role: Role.Admin });
