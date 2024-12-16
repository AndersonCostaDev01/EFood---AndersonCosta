// Importação de bibliotecas externas
import styled from "styled-components"
// Importação de cores da aplicação
import { cores } from "../../globalStyles"

export const ItenCartContainer = styled.div`
    background-color: ${cores.laranja};
    color: ${cores.fundo};
    padding: 8px;
    max-width: 300px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    h3 {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 8px;
        margin-top: 8px;
    }

    p {
        font-size: 14px;
        line-height: 22px;
    }
`
export const Button = styled.button`
    background-color: ${cores.fundo};
    color: ${cores.laranja};
    padding: 4px 8px;
    margin-top: 8px;
    width: 100%;
    border: none;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
`

export const ContainerImg = styled.div`
    width: 100%;
    height: 180px;
    object-fit: cover;
    display: flex;
`