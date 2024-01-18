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

export function RegistroCliente() {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography component="h1" variant="h5">Crie uma conta!</Typography>

                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="nome"
                                    id="nome"
                                    label="Nome"
                                    type='text'
                                    autoFocus
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="sobrenome"
                                    id="sobrenome"
                                    label="Sobrenome"
                                    type='text'
                                    required
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="cpf"
                                    label="CPF"
                                    type="text"
                                    id="cpf"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    name="endereco"
                                    id="endereco"
                                    label="Endereço"
                                    type='text'
                                    required
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    name="celular"
                                    id="celular"
                                    label="Celular"
                                    type='tel'
                                    required
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="senha"
                                    label="Senha"
                                    type="password"
                                    id="senha"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="reviewPassword"
                                    label="Confirme sua senha"
                                    type="password"
                                    id="reviewPassword"
                                />
                            </Grid>

                        </Grid>
                        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }} fullWidth> Criar conta!</Button>
                        <Grid container justifyContent="center" marginBottom={3}>
                            <Grid item>
                                <Link href="#" variant="body2"> Já possui conta? Entre agora!</Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}