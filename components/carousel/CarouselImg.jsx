import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import styles from '@/styles/Home.module.css'
import {productsData} from '../mock/Products'



export default function CarouselImg() {
  return (
    <Box sx={{ width: 800, height: 600, overflowY: 'scroll', my: 1, }} >
      <ImageList variant="masonry" cols={2} gap={8} >
        {productsData.map((item) => (
          <ImageListItem key={item.img} className={styles.imgListCarousel}>
            <img
              src={item.img}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
              width={700}
              height={650}
              className={styles.imgCarousel}
              
            />
            <ImageListItemBar position="below" title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
