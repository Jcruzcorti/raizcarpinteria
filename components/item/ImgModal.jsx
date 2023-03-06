import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import styles from '@/styles/Home.module.css'
import Carousel from 'react-bootstrap/Carousel';
import  {CardContent}  from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
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
            <>
              {
                img2 
                ?
                <Carousel fade className={styles.imgModalExpand}>
                  <Carousel.Item>
                    <img src={img1} alt="Image" width={80} height={80} className={styles.imgModalExpand} />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src={img2} alt="Image" width={80} height={80} className={styles.imgModalExpand} />
                    </Carousel.Item>
                      {
                        img3
                        ?<Carousel.Item>
                          <img src={img3} alt="Image" width={80} height={80} className={styles.imgModalExpand} />
                        </Carousel.Item>
                        :null
                      }

                  </Carousel>
                :
                  <>
                    <CardContent className={styles.imgModalExpand}>
                    <img src={img1} alt="Image" width={80} height={80} className={styles.imgModalExpand} />
                    </CardContent>
                  </>
              }
            </>
        </Box>
      </Modal>
    </div>
  );
}