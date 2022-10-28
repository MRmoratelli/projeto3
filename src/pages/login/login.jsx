import '../../assets/css/auth.css';
import React, { useState } from 'react';

import logo from '../../assets/img/logoproj.png';
import cover from '../../assets/img/8084195_1191.jpg';

import { Link } from 'react-router-dom';

import {
    Grid,
    Box,
    TextField,
    Button,
    Stack,
    InputAdornment,
    OutlinedInput,
    IconButton,
    FormControl,
    InputLabel
} from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const Login = () => {
    const [visibilityToggle, setVisibilityToggle] = useState(false);

const toggleVisibility = ()=> {
    setVisibilityToggle(!visibilityToggle);
}
    return <Grid container spacing={2} style={{
        height:'100vh'
    }}>
            <Grid className='leftSide' item sx={{
                padding: '10px',
                boxSizing: 'border-box'  
            }} xs={0} md={7} lg={8}>
                <Stack spacing={2} style={{
                    height: '100%',
                    justifyContent: 'center',
                    alignItems:'center'   
                }}>
                <img src={cover} style={{
                    width: '100%'
                    }} alt="logo"/>
                </Stack>
            </Grid>
            <Grid item xs={12} md={5} lg={4}>
                <Stack spacing={2} style={{
                    height: '100%',
                    justifyContent: 'center',
                    alignItems:'center',
                    paddingLeft: 16,
                    paddingRight: 16,
                    boxSizing: 'border-box'
                }}>
                <img src={logo} style={{
                    width: '50%'
                    }} alt="logo"/>
                    <h1>Entre com seu usuario</h1>
                <Grid container>
                    <Grid item xs={12} sx={{
                        marginBotton: '16px'
                    }}>
                        <TextField fullWidth label="E-mail" type="email" 
                        variant="outlined"/>
                    </Grid>
                    <Grid item xs={12} sx={{
                        marginBotton: '16px'
                    }}>
                        <FormControl htmlFor="senha" sx={{
                            width: '100%'}}>
                                <InputLabel>Senha</InputLabel>
                        <OutlinedInput color="primary" fullWidth label="senha" id="senha" type={visibilityToggle ? 'text' : 'password'}
                        endAdornment={<InputAdornment position="end">
                            <IconButton arial-label="Click para exibir"
                            onClick={toggleVisibility}>
                                {
                                    visibilityToggle ? <VisibilityOff/> : <Visibility/>
                                }
                            </IconButton>
                        </InputAdornment>}
                        variant="outlined" />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sx={{
                        marginBotton: '16px'
                    }}>
                        <Button fullWidth variant="contained" endIcon={<LoginIcon />}>Entrar</Button>
                    </Grid>
                    <Link 
                    style={{
                        textAlign: 'center',
                        display: 'block',
                        width: '100%'
                    }}
                    to="/register">Criar 
                    conta</Link>
                </Grid>
                </Stack>
            </Grid>
    </Grid>
}

export default Login;