import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Stack, Avatar } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { deepPurple } from '@mui/material/colors';


const LogoutButton = () => {
  const { logout } = useAuth0();

  return (<div style={{paddingLeft:'1000px'}}>
    <Stack onClick={() => logout({ returnTo: window.location.origin })} direction="row" spacing={2}>
    <Avatar sx={{ bgcolor: deepPurple[500] }}>S</Avatar>
    <ExpandMoreIcon />
  </Stack></div>
  );
};

export default LogoutButton;