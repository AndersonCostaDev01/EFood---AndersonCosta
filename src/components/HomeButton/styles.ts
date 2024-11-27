// Importação de bibliotecas externas
import styled from "styled-components";
import { Link } from "react-router-dom";
// Importação dos estilos do componente 
import { cores } from "../../globalStyles";

type Props = {
    active?: boolean
}

export const HomeButtonContainer = styled.button<Props>`
    background-color: ${cores.laranja};
    color: ${cores.fundo};
    text-align: center;
    cursor: ${props => props.active ? 'pointer' : 'default'};
    padding: 4px 8px;
    border: none;
    font-size: 14px;
`

export const HomeLink = styled(Link)<Props>`
    background-color: ${cores.laranja};
    color: ${cores.fundo};
    text-align: center;
    cursor: ${props => props.active ? 'pointer' : 'default'};
    padding: 4px 8px;
    border: none;
    font-size: 14px;
    text-decoration: none;
`