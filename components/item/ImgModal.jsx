import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import styles from '@/styles/Home.module.css'
// import { productsData } from '../mock/Products';
import Carousel from 'react-bootstrap/Carousel';
import { Card, CardContent } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 600,
  bgcolor: 'background.paper',
//   border: '2px solid #000' ,
  borderRadius: 1,
  boxShadow: 24,
  p: 3,
};

export default function ImgModal({img1,img2,img3}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button 
        onClick={handleOpen} 
        variant="outline" 
        style={{margin: '0 auto', display: "flex", padding:'10px'}}
        >
        Ver más
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
        
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

            <>
              {

                img2 
                ?
                <Carousel fade className={styles.imgModalExpand}>
                  <Carousel.Item>
                    <img src={img1} alt="Image" width={80} height={80} className={styles.imgModalExpand} />
                      {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src={img2} alt="Image" width={80} height={80} className={styles.imgModalExpand} />
      
                      {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </Carousel.Caption> */}
                    </Carousel.Item>

                      {
                        img3
                        ?<Carousel.Item>
                        <img src={img3} alt="Image" width={80} height={80} className={styles.imgModalExpand} />
          
                          {/* <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                          </Carousel.Caption> */}
                        </Carousel.Item>
                        :null
                      }

                  </Carousel>
                :
                  // <Card.Img variant="top" src={img1} />
                  <>
                    {/* <Card  variant="top" src={img1} /> */}
                    <CardContent className={styles.imgModalExpand}>
                    <img src={img1} alt="Image" width={80} height={80} className={styles.imgModalExpand} />
                    </CardContent>
                  </>
              }
            </>


          {/* <img src={item} alt="Image" width={80} height={80} className={styles.imgModalExpand} /> */}
        </Box>
      </Modal>
    </div>
  );
}