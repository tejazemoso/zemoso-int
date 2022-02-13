import { Typography,Grid } from '@mui/material';
import React from 'react';
import "./footer.css";
const editorial=['Editorial','Book lists','What is Nonfiction?','What to read next?','Benefits of reading'];
const pricing=['Useful links','Pricing','Blinkist business','Gift cards','Blinkist magazine','Contact & help'];
const company=['Company','About','Careers','Partners','Code of conduct'];
function LogoText(){
    return (<div className='logoText'><img className="logo" alt="blinkist logo" src='https://i1.wp.com/softwareengineeringdaily.com/wp-content/uploads/2019/07/Blinkist-Logo.png?fit=3000%2C718&ssl=1'></img>
    <Typography className='blue-text'>Big ideas in small packages<br></br> Start learning now</Typography></div>)
}
function SiteMap(){
    return <Typography variant='body2' className="site-map">© Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies</Typography>
}
function List(props: any){
    const array=props.list;
    let array1:Array<string>=array.slice(1);
    return (<span className='navigation'>
        <ul className="list">
            <li className='heading'>{array[0]}</li>
            {array1.map((item =><li className='items'>{item}</li>))}
        </ul>
    </span>)
}
function Frame(){
    return <div className="frame">
         <LogoText />
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}><List list={editorial}/></Grid>
        <Grid item xs={4}><List list={pricing}/></Grid>
        <Grid item xs={4}><List list={company}/></Grid>
        </Grid>
    </div>
}

export default function Footer(){
    return <span className='footer'>
        <Frame />
        <SiteMap />
    </span>
}