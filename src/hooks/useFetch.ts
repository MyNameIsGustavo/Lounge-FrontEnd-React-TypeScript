import { useEffect, useState } from "react";

export function useFetch<T>({ url }: { url: string }) {
    const [dados, setDados] = useState<T | null>(null);
    const [erro, setErro] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3000/${url}`)
            .then((resposta) => resposta.json())
            .then((dados) => setDados(dados))
            .catch((erro) => setErro)
    }, [url])

    return { dados, erro };
}