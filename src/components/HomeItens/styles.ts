// Importação de bibliotecas externas
import styled from "styled-components";
// importação das cores da aplicação
import { cores } from "../../globalStyles";

export const HomeItensContainer = styled.div`
    background-color: ${cores.branco};
    color: ${cores.laranja};
    width: 470px;
    position: relative;
    border: 1px solid ${cores.laranja};
    border-top: none;
` 
export const DescricaoContainer = styled.div`
    padding: 8px;
`
export const NameConatiner = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Avaliacao = styled.div`
    display: flex;
    
    p {
        margin-right: 8px;
        font-weight: bold;
        justify-content: center
    }
`
export const Descricao = styled.div`
    padding-top: 16px;
    padding-bottom: 20px;

    p {
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
    }
`
export const Indicadores = styled.div`
    display: flex;
    position: absolute;
    top: 16px;
    right: 16px;
    gap: 8px;
    
    
    p {
        background-color: ${cores.laranja};
        color: ${cores.fundo};
        padding: 4px 8px;
    }
`
export const ImageContainer = styled.div`
    width: 472px;
    height: 220px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
