// Importação de bibliotecas externas
import styled from "styled-components";
// Importação das cores da aplicação
import { cores } from "../../globalStyles";

export const HeaderContainer = styled.div`
    display: block;
    background-repeat: no-repeat;
    background-size: cover; 
    font-weight: bold;
    
`
export const  Containerlogo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 80px 170px;
    color: ${cores.laranja};
    font-size: 18px;
    font-weight: bold;
`
export const Img = styled.img`
    width: 100%;
    object-fit: cover;
`