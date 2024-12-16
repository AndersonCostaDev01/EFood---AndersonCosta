// Importaçãod bibliotecas externas
import styled from "styled-components";
import { cores } from "../../globalStyles";

export const HomeListContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 80px;
    column-gap: 80px;
    margin-top: 80px;
    margin-bottom: 120px;
`
export const Carregando = styled.h4`
    text-align: center;
    margin-top: 80px;
    margin-bottom: 120px;
    color: ${cores.laranja};
    font-size: 44px;
    font-weight: bold;
`