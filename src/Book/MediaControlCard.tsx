import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { books } from '../body/books';
import { AccessTime, ArrowForward } from '@mui/icons-material';
import { Button, CardActions, List, ListItem } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
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
export default function MediaControlCard() {
    const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (<div>
    <Card sx={{ display: 'flex' }} elevation={0}>
      <Box sx={{ display: 'flex', flexDirection: 'column',paddingLeft:'264px',paddingTop:'100px' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="body2" style={{fontSize:'16px',color:'#03314B'}}>
            Get the key ideas from
          </Typography>
          <Typography variant="h1" style={{fontSize:'32px',paddingTop:'30px',fontWeight:'bold'}} component="div">
            {books[0].title}
          </Typography>
          <Typography variant="subtitle1" style={{fontSize:'20px',paddingTop:'15px',color: '#03314B'}} component="div">
          Turning Your Business into an Enduring Great Company
          </Typography>
          <Typography variant="body1" style={{fontSize:'16px',color: '#6D787E',paddingTop:'15px'}} component="div">
            {books[0].author}
          </Typography>
          <List style={{paddingTop:'15px'}}>
            <ListItem disablePadding>
                <AccessTime fontSize='small'/>&nbsp;
                <Typography variant='body2' style={{fontSize:'16px',color:'#6D787E'}}>{books[0].duration}-minute read</Typography>
            </ListItem>
          </List>
          <CardActions style={{paddingTop:'50px'}}>
              <Button style={{color:'green',textTransform:'none',borderColor:'black',marginRight:'20px'}} disableElevation={true}>Read Now</Button>
              <Button style={{color:'black',textTransform:'none',background:'#2CE080',marginRight:'20px'}}>Finished Reading</Button>
              <Button style={{color:'black',textTransform:'none',marginRight:'20px'}}>Send to kindle <ArrowForward fontSize='small'/></Button>
          </CardActions>

        </CardContent> 
      </Box>
      <CardMedia
        component="img"
        sx={{ width: '304px',height:'304px',paddingTop:'100px',paddingLeft:'100px' }}
        image={books[0].image}
        alt="Book image"
      />
    </Card>
    <Box sx={{ borderBottom: 1, borderColor: 'divider',paddingLeft:'264px',width:'600px',paddingTop:'50px'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Synopsis"  style={{textTransform:'none'}}/>
            <Tab label="Who is it for?"  style={{textTransform:'none'}}/>
            <Tab label="About the author" style={{textTransform:'none'}}/>
        </Tabs>
    </Box>
    <div style={{paddingBottom:'100px'}}>
    <TabPanel value={value} index={0}>
        <Typography variant='body2' style={{fontSize:'16px',width:'600px',paddingLeft:'264px',height:'100px'}} paragraph>
        Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.
        </Typography>
    </TabPanel>
    <TabPanel value={value} index={1}>
    </TabPanel>
    <TabPanel value={value} index={2}>
    </TabPanel>
    </div>
    </div>
  );
}