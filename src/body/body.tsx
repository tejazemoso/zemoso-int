import { Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { Grid } from "@mui/material";
import './body.css';
import BookCard from "./card";
import TabList from "@mui/lab/TabList";
import { TabContext } from "@mui/lab";
import {books} from './books';
import { TabPanel } from "@mui/lab";
<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel='stylesheet'></link>
function Text() {
  return <Typography variant='h1' sx={{position: 'absolute',
    left: '264px',
    top: '145px',
    width:'500px',
    color:' #03314B',
  fontSize:'36px'}}>My Library</Typography>;
}
function BasicTabs() {
  let finished:Array<Object>=[];
let currentlyReading:Array<Object>=[]
books.forEach((item)=>{
  if(item.isFinished===true && item.isInMyLibrary===true){
    finished.push(item)
  }
  else if(item.isFinished===false && item.isInMyLibrary===true){
    currentlyReading.push(item)
  }
})
  const [value, setValue] = React.useState('currently reading');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ position: 'absolute',
        width: '912px',
        left: '264px',
        top: '250px',
         }}>
      <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <TabList
              onChange={handleChange}
              scrollButtons={true}
              aria-label="my library tabs"
            >
              <Tab
                disableRipple={true}
                label="Currently Reading"
                value="currentlyReading"
                sx={{
                  width: "35%",
                  textTransform: "none",
                  fontSize: "20px",
                  fontWeight: "bold",
                  
                }}
              />
              <Tab
                disableRipple={true}
                label="Finished"
                value="finished"
                sx={{
                  width: "35%",
                  textTransform: "none",
                  fontSize: "20px",
                  fontWeight: "bold",
                  
                }}
              />
            </TabList>
      </Box>
      <TabPanel value='currentlyReading'>
            <Grid container style={{paddingTop:'20px'}} spacing={{ xs: 12, md: 3 }} columns={{ xs: 12, sm: 8, md: 12 }}>
        {currentlyReading.map((item1:any,index:number)=><Grid item xs={2} sm={4} md={4}><BookCard books={currentlyReading} index={index}/></Grid>)}
            </Grid>
            </TabPanel>
            <TabPanel value='finished'>
            <Grid container style={{paddingTop:'20px'}} spacing={{ xs: 12, md: 3 }} columns={{ xs: 12, sm: 8, md: 12 }}>
        {finished.map((item1:any,index:number)=><Grid item xs={2} sm={4} md={4}><BookCard books={finished} index={index}/></Grid>)}
            </Grid>
            </TabPanel>
      </TabContext>
    </Box>
  );
}
export default function Body() {
  return <div className="body">
        <Text/>
        <BasicTabs/>
    </div>
}
