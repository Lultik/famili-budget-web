import CssBaseline from "@mui/material/CssBaseline";
import { Container, Typography, Stack } from "@mui/material";
import { SocialLoginButton } from "../../components/SocialLoginButton";

export const SignInPage = () => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Stack direction="column" justifyContent="center" alignItems="center" spacing={3} mt={6}>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <SocialLoginButton />
      </Stack>
    </Container>
  );
};
