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
    <div data-aos="zoom-in-down" className={styles.divAboutUs}>
        {/* <h2 className={styles.h2}>SOBRE NOSOTROS</h2> */}
        <Typography gutterBottom variant="h4" component="div">
          SOBRE NOSOTROS
        </Typography>
        <div className={styles.divAboutUsText}>
          <Typography gutterBottom variant="h6" component="div">
            Somos una fábrica jóven y comprometida con lo que nos apasiona
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            Creamos cocinas, vestidores y placares buscando generar espacios en los que siempre se quiera volver
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            Diseñamos a medida cada proyecto respetando las necesidades de cada cliente
          </Typography>
            {/* <h3 className={styles.h3}>Somos una fábrica jóven comprometida con lo que nos apasiona</h3>
            <h4 className={styles.h4}>Creamos cocinas, vestidores y placares buscando generar espacios en los que siempre se quiera volver </h4>
            <h4 className={styles.h4}>Diseñamos a medida cada proyecto respetando las necesidades de cada cliente</h4> */}
        </div>
    </div>
  )
}

export default AboutUs