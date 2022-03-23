import React from 'react';
import {Button, Box, Paper} from '@material-ui/core';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';

function Home(){
function Home() {
    return (
        <>
           <Paper>
               <Box p={2}>
                   <Box display="flex" justifyContent="center">
                       <h1>Título</h1>
                   </Box>
                   <img src="https://schultzfamilyfoundation.org/wp-content/uploads/2019/07/generation-logo.png" alt="" style={{width: "100%", height: "100%"}}/>
                   <Box display="flex" justifyContent="center" p={2}>
                       <Button variant="contained" color="primary">Texto 1</Button>
                       <Button variant="contained" color="secondary">Texto 2</Button>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#3F51B5" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
               </Box>
           </Paper>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#3F51B5", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
    );
}