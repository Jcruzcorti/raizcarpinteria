import { Button, FormControl, FormHelperText, Grid, Input, InputLabel } from '@mui/material'

import React from 'react'

function ContactForm() {
  return (
<>

    <Grid container spacing={0} justifyContent='center' gap={4} my={0}>
            <Grid md={6}>
                <FormControl >
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>
            </Grid>
            <Grid md={6}>
                <FormControl >
                    <InputLabel htmlFor="my-input">asdasss</InputLabel>
                    <Input id="my-inputc" aria-describedby="my-helper-textc" />
                    <FormHelperText id="my-helper-textc">We'll never share your email.</FormHelperText>
                </FormControl>
            </Grid>
            <Grid md={6}>
                <Button>Enviar</Button>
            </Grid>
            
        </Grid>

</>
        

  )
}

export default ContactForm