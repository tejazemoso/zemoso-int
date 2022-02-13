import React from 'react';
import { Box, Card, List, ListItem } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AccessTime } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { books } from './books';

function Time(prop:any){
    return <List>
    <ListItem disablePadding>
        <AccessTime fontSize='small'/>&nbsp;
        <Typography variant='body2' style={{fontSize:'16px'}}>{prop.time}-minute read</Typography>
    </ListItem>
    </List>
}
export default function BookCard(props:any) {
  function handleReadAgain(){
    books[props.index].isFinished=false;
    window.location.reload();
    console.log(books[props.index].isFinished)
    //<BookCard index={props.index} books={props.books}/>
  }
  function handleFinishReading(){
    books[props.index].isFinished=true;
    window.location.reload();
  }
  function handleAddToLibrary(){
    books[props.index].isInMyLibrary=true;
    window.location.reload();
  }
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
        <Box>
          <CardActions disableSpacing style={{ padding: "0px" }}>
            {!props.books[props.index].isInMyLibrary && (
              <Button
              
                onClick={() => handleAddToLibrary()}
              >
                + Add to Library
              </Button>
            )}
            {props.books[props.index].isInMyLibrary && !props.books[props.index].isFinished && (
              <Button
              
                onClick={() => handleFinishReading()}
              >
                Finish Reading
              </Button>
            )}

            {props.books[props.index].isFinished && (
              <Button
          
                onClick={() => handleReadAgain()}
              >
                Read Again
              </Button>
            )}
          </CardActions>
        </Box>
      </Card>
    );
  }