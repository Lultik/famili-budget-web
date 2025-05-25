import { Button } from "@mui/material";

export const SocialLoginButton = () => {
  return (
    <Button component="a" href={`http://localhost:5001/api/auth/google/redirect`} variant="contained">
      Google Auth
    </Button>
  );
};
