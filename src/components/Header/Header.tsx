import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export interface HeaderProps {
  title: string;
  back?: boolean;
}

export const Header = ({ title, back = false }: HeaderProps) => {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <Box
      title={title}
      sx={({ palette, spacing }) => ({
        backgroundColor: palette.background.paper,
        p: spacing(2.5, 5),
        height: "100%",
      })}
    >
      <Stack direction="row" spacing={4}>
        {back && <ArrowBackIcon onClick={navigateBack} />}
        <Typography variant="h1">{title}</Typography>
      </Stack>
    </Box>
  );
};
