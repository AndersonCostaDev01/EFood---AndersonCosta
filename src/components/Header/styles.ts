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
    
`
export const Logo = styled.div`
    text-align: center;
    padding-top: 60px;
    
`
export const Titulo = styled.h2`
    text-align: center;
    color: ${cores.laranja};
    font-size: 36px;
    font-weight: bold;
    margin-top: 138px;
`