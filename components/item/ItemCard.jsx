import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ImgModal from './ImgModal';



export default function ItemCard({item}) {
  


  return (
    <>
      <Card sx={{maxWidth: 300, my: 2, }} elevation={6}>    
        <CardMedia
          component="img"
          height="320"
          image={item.img}
          alt="mueble"
        />  
        <CardContent sx={{ '&:last-child': { pb: 1, pt: 1, }}}>
        <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>

          <ImgModal img1={item.img} img2={item.img2} img3={item.img3}/>
        </CardContent>
      </Card>
    </>
  );
}






