// Importação da biblioteca de estilos
import { createGlobalStyle } from "styled-components";

// Definição das cores de sistema 
export const cores = {
    branco: '#FFFFFF',
    laranja: '#E66767',
    bege: '#FFEBD9',
    fundo: '#FFF8F2'
}

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        background-color: ${cores.fundo}
    }

    .container {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
    }
`