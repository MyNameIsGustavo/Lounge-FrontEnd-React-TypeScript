import axios from 'axios';

export async function cadastraAdmin(dadosFormulario: any) {
    try {
        await axios.post('http://localhost:8000/api/admin', dadosFormulario)
    }
    catch (error) {
        console.error('Erro no cadastrado de admin: ', error);
    }
}