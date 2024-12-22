// Importação de bibliotecas externas
import styled from "styled-components";
// importaçãoi das cores de sistema 
import { cores } from "../../globalStyles";

export const ItensCartContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 32px;
    column-gap: 32px;
    margin-top: 64px;
    margin-bottom: 120px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`
export const modalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;

    &.isOpen {
        display: flex;
    }
`
export const modalContent = styled.div`
    background-color: ${cores.laranja};
    color: ${cores.branco};
    padding: 8px;
    padding-left: 32px;
    padding-bottom: 32px;
    max-width: 1024px;
    position: relative;
    z-index: 10;

    @media (max-width: 768px) {
        max-width: 80%;
    }
`
export const CloseButton = styled.div`
    display: flex;
    background-color: transparent;
    border: none;  
    cursor: pointer;
    justify-content: flex-end;

    @media (max-width: 768px) {
        img {
            width: 20px;
            padding-bottom: 8px;
        }
    }
`
export const ModalDesciption = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 24px;
    position: relative;
    z-index: 10;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`
export const ImgModal = styled.div`
    img {
        width: 280px;
        height: 280px;
        object-fit: cover;
        flex-direction: column;
        justify-content: space-between;
    }

    @media (max-width: 768px) {
        margin-right: 18px ;
        img {
            width: 100%;
        }
    }
`
export const Description = styled.div`
    h3 {
        font-size: 18px;
        font-weight: bold;
    }
    p {
        font-size: 14px;
        line-height: 22px;
        margin-top: 16px;
    }
`
export const ModalButton = styled.button`
    background-color: ${cores.fundo};
    color: ${cores.laranja};
    margin-top: 20px;
    text-align: center;
    cursor: pointer;
    padding: 4px 8px;
    border: none;
    font-size: 14px;
`
export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
`