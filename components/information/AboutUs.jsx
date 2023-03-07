import React,{useEffect} from 'react'
import Typography from '@mui/material/Typography';
import styles from '@/styles/Home.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


function AboutUs() {

  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 400,
    });
  });

  return (
    <div  className={styles.divAboutUs}>
        <Typography gutterBottom variant="h4" component="div" className={styles.aboutUsTextTittle}>
          SOBRE NOSOTROS
        </Typography>
        <div className={styles.divAboutUsText}>
          <Typography gutterBottom variant="h6" component="div" className={styles.aboutUsText}>
            Somos una fábrica jóven y comprometida con lo que nos apasiona
          </Typography>
          <Typography gutterBottom variant="h7" component="div" className={styles.aboutUsText2}>
            Creamos cocinas, vestidores y placares buscando generar espacios en los que siempre se quiera volver
          </Typography>
          <Typography gutterBottom variant="h7" component="div" className={styles.aboutUsText2}>
            Diseñamos a medida cada proyecto respetando las necesidades de cada cliente
          </Typography>
        </div>
    </div>
  )
}

export default AboutUs