// Importação de bibliotecas externas
import styled from "styled-components";
import { cores } from "../../globalStyles";

export const CartGlobalContainer = styled.div`
    display: none;

    &.isOpen {
        display: block;
    }
`
export const CartContainer = styled.div`
    background-color: ${cores.laranja};
    position: fixed;
    z-index: 11;
    top: 0;
    right: 0;
    width: 360px;
    height: 100%;
    padding: 8px;
    overflow-y: scroll;

    &::-webkit-scrollbar{
        display: none;
    }
`
export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
`
export const CartContent = styled.div`
    background-color: ${cores.bege};
    margin-bottom: 8px;
    padding: 8px;
    display: flex;
    position: relative;
`
export const CartDescribe = styled.div`
    color: ${cores.laranja};
    margin-left: 8px;
    
    h4 {
        margin-bottom: 16px;
    }
`
export const Lixeira = styled.img`
    cursor: pointer;
    width: 16px;
    height: 16px;
    position: absolute;
    bottom: 8px;
    right: 8px;
`
export const ImageContainer = styled.div`
    width: 80px;
    height: 80px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
export const CartBuy = styled.div`
    margin-top: 40px;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    padding: 8px;
    font-size: 14px;
    font-weight: bold;
    color: ${cores.bege};
`
export const Button = styled.button`
    background-color: ${cores.bege};
    color: ${cores.laranja};
    text-align: center;
    cursor: pointer;
    padding: 4px 8px;
    border: none;
    font-size: 14px;
    text-decoration: none;
    width: 100%;
    height: 24px;
    border: 8px;
`