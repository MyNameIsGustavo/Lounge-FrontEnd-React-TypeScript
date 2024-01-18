import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export function Login() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
                <CssBaseline />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }} >

                    <Typography component="h1" variant="h5"> Bem-vindo ao Lounge TypeScript! </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Senha"
                            type="password"
                            id="password"
                        />

                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Entrar!</Button>
                        <Grid container justifyContent={'center'}>
                            <Grid item>
                                <Link href="#" variant="body2"> Não tem conta? Registre-se.</Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}