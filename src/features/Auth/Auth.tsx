import { Header } from "../../components";
import { withAccess } from "../../hoc";
import { Role } from "../../types";
import { SignInPage } from "../../pages/SignIn";

const AuthComponent = () => {
  return (
    <>
      <Header title="Auth" />
      <SignInPage />
    </>
  );
};

export const Auth = withAccess(AuthComponent, { role: Role.Admin });
