import styled from "styled-components";
import { cores } from "../../globalStyles";

type LabelProps = {
  width?: string
}

export const OrderContainer = styled.div`
    background-color: ${cores.laranja};
    position: fixed;
    z-index: 11;
    top: 0;
    right: 0;
    width: 360px;
    height: 100%;
    padding: 8px 16px 8px 8px;
    overflow-y: scroll;

    @media (max-width: 768px) {
        width: 70%;
    }

    &::-webkit-scrollbar{
        display: none;
    }
`
export const OrderTitle = styled.h2`
  color: ${cores.fundo};
  margin-top: 32px;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: bold;
`
export const OrderRow = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: bold;
    color: ${cores.bege};
    column-gap: 34px;
`
export const LabelContainer = styled.div<LabelProps>`
  display: flex;
  flex-direction: column;
  width: ${props => props.width ? props.width : '100%' };
  gap: 8px;
  margin-bottom: 8px;

  label {
    font-size: 14px;
  }

  input {
    font-size: 14px;
    color: #4B4B4B;
    font-weight: bold;
    padding-block: 4px;
    padding-left: 4px;
    width: 100%;
    background-color: ${cores.bege};
    border: none;
    height: 32px;
  }
`
export const OrderButton = styled.button`
  background-color: ${cores.bege};
  color: ${cores.laranja};
  text-align: center;
  cursor: pointer;
  border: none;
  font-size: 14px;
  text-decoration: none;
  width: 100%;
  height: 24px;
  border: 8px;
  margin-bottom: 8px;

  &.marginTop{
    margin-top: 32px;
  }
`
