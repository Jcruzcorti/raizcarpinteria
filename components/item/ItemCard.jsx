import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import ImgModal from './ImgModal';

// import { Box } from '@mui/system';




export default function ItemCard({item}) {
  



  return (
    <>
        {/* <Typography  variant="h2" >
                {item.category}
                </Typography> */}

    <Card sx={{maxWidth: 300, my: 2, }} elevation={6}>
        
        {/* <CardActionArea > */}
       
          <CardMedia
            component="img"
            height="300"
            image={item.img}
            alt="mueble"
          />
          
          <CardContent sx={{ '&:last-child': { pb: 1, pt: 1, }}}>
          <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            {/* <Typography gutterBottom variant="h6" component="div">
              {item.author}
            </Typography> */}
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>

            <ImgModal item={item.img}/>
          </CardContent>
        {/* </CardActionArea> */}
      </Card>



    </>
  );
}






