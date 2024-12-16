// Importação de bibliotecas externas
import styled from "styled-components";
// Importação das cores da aplicação
import { cores } from "../../globalStyles";
import { Link } from "react-router-dom";

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

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 40px 40px;
        gap: 32px;
    }
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
    z-index: 2;
    position: relative;
`
export const ContainerImg = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`
export const  Italic = styled.h3`
    font-weight: 100;
    line-height: 37.5px;
    font-size: 32px;
    font-style: normal;
`
export const HomeLink = styled(Link)`
    color: ${cores.laranja};
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
`
export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
`