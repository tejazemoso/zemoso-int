import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Stack, Avatar } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { deepPurple } from '@mui/material/colors';


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <div style={{paddingLeft:'1000px',paddingTop:'33px'}}>
  <Stack onClick={() => loginWithRedirect()} direction="row" spacing={2}>
    <Avatar sx={{ bgcolor: deepPurple[500] }}>?</Avatar>
    <ExpandMoreIcon />
  </Stack>
  </div>;
};
export default LoginButton;