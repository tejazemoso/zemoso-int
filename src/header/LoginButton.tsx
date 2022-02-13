import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <div style={{paddingLeft:'1300px',paddingTop:'33px'}}><button onClick={() => loginWithRedirect()}>Log In</button></div>;
};

export default LoginButton;