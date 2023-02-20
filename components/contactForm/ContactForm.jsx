import React, { useEffect, useRef,useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Button, FormControl, FormHelperText, Grid, Input, InputLabel, TextField } from '@mui/material'
import styles from '@/styles/Home.module.css'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'



function ContactForm() {

    useEffect(() => {
        AOS.init({
          delay: 100,
          duration: 400,
        });
    });

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      if ( contact.name === "") {
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: 'Por favor, ingrese todos los datos del formulario'
          })
    }

    else if (contact.email === "") {
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: 'Por favor, ingrese todos los datos del formulario'
          })
    }
    else if (contact.mensaje === "") {
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: 'Por favor, ingrese todos los datos del formulario'
          })
    }
    else if (contact.phone === "") {
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: 'Por favor, ingrese todos los datos del formulario'
          })
    }
    else {
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Mensaje enviado'
          })

          emailjs.sendForm('service_k60zcfe', 'template_evfkc1n',  form.current, 'qz1-4pKUlGcUfd2CX')
          
          e.target.reset()
          
          setTimeout(() => {
            window.location.href="/";
          }, 3000); 
    }
    

    };
  

    const [contact,setContact]=useState({
        name: "",
        email: "",
        phone:"",
        mensaje: ""
    })

    function handleChange(e) {
        const field = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [field]:value,
    
        })
        
    } 






  return (

<div data-aos="flip-left" className={styles.divContactForm} >
    <form action="" ref={form} onSubmit={sendEmail}>
        <Grid container spacing={2} justifyContent='center' gap={4} my={4} >
                <Grid md={6} item={true}>
                    
                        
            
                    <FormControl fullWidth >
                        <InputLabel htmlFor="my-input" >Ingrese su nombre y apellido</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" onChange={handleChange} type="text" name='name' />
                        <FormHelperText id="my-helper-text">Campo requerido</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid md={6} item={true}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="my-input">Ingrese su email </InputLabel>
                        <Input id="my-inputc" aria-describedby="my-helper-textc" onChange={handleChange} type="email" name='email' />
                        <FormHelperText id="my-helper-textc">Campo requerido</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid md={6} item={true}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="my-input">Ingrese su teléfono </InputLabel>
                        <Input id="my-inputt" aria-describedby="my-helper-textt" onChange={handleChange} type="phone" name='phone'/>
                        <FormHelperText id="my-helper-textt">Campo requerido</FormHelperText>
                    </FormControl>
                </Grid>

                <Grid md={6} item={true}>
                    <FormControl fullWidth>
                    <InputLabel htmlFor="my-input">Escribe tu mensaje aquí </InputLabel>
                        <Input id="my-inputa" aria-describedby="my-helper-texta" multiline onChange={handleChange} type="text" name='mensaje' />
                        <FormHelperText id="my-helper-texta">Campo requerido</FormHelperText>
                    </FormControl>
                </Grid>
                
                <Grid md={6} item={true}>
                    <Button variant="outlined" type='submit'>Enviar</Button>
                </Grid> 
                
        </Grid> 
    </form>
</div>
        

  )
}

export default ContactForm