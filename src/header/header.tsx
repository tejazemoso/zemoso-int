import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Typography,Grid, Popper, Grow, ClickAwayListener, MenuList, Box} from '@mui/material';
import './header.css';
import AppBar from '@mui/material/AppBar';
import {categories,categoryIcons} from './category';
import Paper from '@mui/material/Paper';
import MenuItem from "@mui/material/MenuItem";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {useNavigate} from 'react-router-dom';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';

function Logo(){
  let navigate=useNavigate();
    return <img className='header-logo' onClick={()=>navigate('/')} src="https://i1.wp.com/softwareengineeringdaily.com/wp-content/uploads/2019/07/Blinkist-Logo.png?fit=3000%2C718&ssl=1" alt="blinkist logo"></img>
}
function Search(){
    return <SearchIcon className='search'></SearchIcon>
}

  function ExploreDialog() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
   setOpen((prevOpen) => !prevOpen);
    icon ? setIcon(0) : setIcon(1);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }
  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const [icon, setIcon] = React.useState(0);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  let navigate=useNavigate();
  return (
      <div className='explore'>
        <Button
          endIcon={icon === 0 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          variant='text'
          style={{color:'black'}}
          sx={{
            borderBottom:
              icon === 0 ? "3px solid transparent" : "3px solid #00C263 ",
            backgroundColor: "inherit",
            borderRadius: 0,
            fontSize: "20px",
            textTransform:'none'
          }}
        >
          Explore
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
          style={{
            padding:'10px',
            width:'1440px',
            position: "absolute",
            top: "30px",
            left:'0px',
            right:'0px'
          }}
        >
      {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}

               style={{ transformOrigin:
                placement=== 'bottom-start'?'left top':'left bottom',
                padding:'20px',
                background: '#F1F6F4',
                }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Explore by category"  style={{textTransform:'none'}}/>
          <Tab label="See recently added titles"  style={{textTransform:'none'}}/>
          <Tab label="See popular titles" style={{textTransform:'none'}}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                    style={{justifyContent:'center',background: '#F1F6F4',
                    }}
                  >
                    <Grid container rowGap={1} spacing={1}>{categories.map((item:string,index:number)=>
                      {return(<Grid item xs={12} sm={6} md={4}>
                      <MenuItem onClick={handleClose} style={{padding:'10px'}}>
                      <Button style={{color:'black',textTransform:'none'}} onClick={()=>navigate('/Entrepreneurship')}>
                      {categoryIcons[index]}
                      &nbsp;&nbsp;
                      {categories[index]}
                      </Button>
                      </MenuItem>
                      </Grid>
                    );})}</Grid>
                  </MenuList>
      </TabPanel>
      <TabPanel value={value} index={1}>
        
      </TabPanel>
      <TabPanel value={value} index={2}>
        
      </TabPanel>
    </Box>
                  
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
  );
    
  }
function Library(){
    return <Typography variant='subtitle1' className='my-library'>My Library</Typography>
}
export default function Header(){

    return <AppBar elevation={0} sx={{height:'86px',width:'100%'}} color='transparent' position='static'>
            <Logo/>
            <Search/>
            <ExploreDialog/>
            <Library/>
            <LogoutButton/>
            <LoginButton/>
    </AppBar>
}