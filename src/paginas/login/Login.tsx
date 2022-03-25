import React from 'react';
import {Grid, Box} from '@material-ui/core';
import './Login.css';
import { Button, TextField, Typography } from '@mui/material';
import {Link} from 'react-router-dom';
import { url } from 'inspector';
function Login(){

return(

    <Grid container direction="row" justifyContent="center" alignItems="center">
    <Grid alignItems="center" xs={6}>
         <Box paddingX={20}>
                <form>
                    <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{fontWeight:'bold'}}>Entrar</Typography>
                    <TextField id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth/>
                    <TextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth/>
                    <Box marginTop={2} textAlign='center'>
                        <Link to='/home'  className='text-decorator-none'>
                            <Button type='submit' variant='contained' color='primary'>
                                Logar
                            </Button>
                        </Link>
                    </Box>

                </form>
                <Box>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>

                        </Box>
                        <Typography variant='subtitle1' gutterBottom align='center'>NÃO TEM UMA CONTA?</Typography>
                    </Box>
                    <Typography variant='subtitle1' gutterBottom align='center' style={{fontWeight: 'bold'}}>CADASTRE-SE</Typography>
                </Box>
            </Box>

        </Grid>
        <Grid xs={6} style={{
            backgroundImage: `url(LINK DA FOTO.JPG)`,
            backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize:'cover', backgroundPosition: 'center';
        }}>


        </Grid>

    </Grid>
);

}