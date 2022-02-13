import React from 'react';
import { Card, List, ListItem } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AccessTime } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Time(prop:any){
    return <List>
    <ListItem disablePadding>
        <AccessTime fontSize='small'/>&nbsp;
        <Typography variant='body2' style={{fontSize:'16px'}}>{prop.time}-minute read</Typography>
    </ListItem>
    </List>
}
function BookButton(props:any){
  if(props.isInMyLibrary===true){
    if(props.isFinished===true)
      return <Button size="small" onClick={()=>
        props.isFinished=false
        return <Button size="small" >Finish Reading</Button>
      }>Read again</Button>
    else
      return <Button size="small" >Finish Reading</Button>
  }
  else
    return <Button size="small" >  + Add to Library  </Button>
}
export default function BookCard(props:any) {
    let navigate=useNavigate();
    return (
      <Card onClick={()=>navigate('/book')} style={{ width:'284px',top:"450px",background:' #FFFFFF',
      border: '1px solid #E1ECFC',
      boxSizing: 'border-box',
      borderRadius: '8px',
      }}>
        <CardMedia
          component="img"
          height="294px"
          width='284px'
          image={props.books[props.index].image}
          alt="image"
        />
        <CardContent>
          <Typography gutterBottom variant='body1' style={{fontWeight:'bold',fontSize:'17px'}}>
            {props.books[props.index].title}
          </Typography>
          <Typography gutterBottom variant="body2" style={{color:'grey',fontSize:'16px'}}>
            {props.books[props.index].author}
          </Typography>
          <Time time={props.books[props.index].duration}></Time>
        </CardContent>
        <CardActions>
          <BookButton isFinished={props.books[props.index].isFinished} isInMyLibrary={props.books[props.index].isInMyLibrary}></BookButton>
        </CardActions>
      </Card>
    );
  }