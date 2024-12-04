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
export const Img = styled.div`
    width: 100%;
    height: 280px;
    object-fit: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 24px;
    padding-bottom: 32px;
    color: ${cores.branco};
    font-size: 32px;
    font-weight: 900;
`
export const ContainerImg = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
`
export const  Italic = styled.h3`
    font-weight: 100;
    line-height: 37.5px;
    font-size: 32px;
    font-style: normal;
`