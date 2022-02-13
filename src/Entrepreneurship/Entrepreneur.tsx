import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, Input } from '@mui/material';
import { books } from '../body/books';
import BookCard from '../body/BookCard';
import exploreCard from './explore-card-image.png';

function Banner(){
    return (<div style={{paddingTop:'60px'}}>
        <Card sx={{ display: 'flex',width:'920px',height:'264px',background:'#F1F6F4',paddingTop:'30px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h1" style={{height: '90px',
width: '319px',
left: '45px',
top: '45px',
borderRadius: 'nullpx',
fontSize:'36px',
lineHeight:'45.25px',
paddingLeft:'20px',
paddingTop:'15px',
fontWeight:'bold'
}}>
                Explore books on entreprenuership
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div" style={{
                  height: '69px',
                  width: '461px',
                  left: '45px',
                  top: '200px',
                  borderRadius: 'nullpx',
                  paddingLeft:'20px',
                  fontSize:'18px',
                  lineHeight:'22.63px',
                  paddingTop:'20px',
                  color: '#6D787E'
              }}>
              Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start.
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={exploreCard}
            alt="Explore"
            style={{paddingLeft:'200px'}}
          />
        </Card></div>);
}
function Search(){
    return <div style={{paddingTop:'50px'}}>
        <Box>
          <SearchIcon fontSize='small'/>
          <Input style={{width:'658px'}} placeholder='   Search by title or author'/>
        </Box>
    </div>
}
let books1:Array<Object>=[]
books.forEach((item)=>{
  if(item.category==='Entrepreneurship'){
    books1.push(item)
  }
})
function BookGrid(){
    return  <Grid container style={{paddingTop:'20px',width:'70%'}} spacing={{ xs: 12, md: 3 }} columns={{ xs: 12, sm: 8, md: 12 }}>
    {books1.map((item1:any,index:number)=><Grid item xs={2} sm={4} md={4}><BookCard books={books1} index={index}/></Grid>)}
    </Grid>
}
function EntrepreneurshipBooks(){
    return<div style={{paddingTop:'40px'}}>
        <BookGrid/>
    </div>
}
export default function Entrepreneur(){
    return<div style={{paddingLeft:'264px'}}>
        <Banner/>
        <Search/>
        <EntrepreneurshipBooks/>
    </div>
}