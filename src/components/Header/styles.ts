// Importação de biblioteca externa 
import styled from "styled-components";
// Importação das cores da aplicação
import { cores } from "../../globalStyles";

export const HeaderContainer = styled.div`
    height: 380px;
    display: block;
    background-repeat: no-repeat;
    background-size: cover; 
    font-weight: bold;

    @media (max-width: 768px) {
        height: 300px;
    }
    
`
export const Logo = styled.div`
    text-align: center;
    padding-top: 60px;

    @media (max-width: 768px) {
        padding-top: 40px;
    }
    
`
export const Titulo = styled.h2`
    text-align: center;
    color: ${cores.laranja};
    font-size: 36px;
    font-weight: bold;
    margin-top: 138px;

    @media (max-width: 768px) {
        margin-top: 80px;
        font-size: 24px;
    }
`