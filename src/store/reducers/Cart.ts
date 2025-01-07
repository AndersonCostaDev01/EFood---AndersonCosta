// importação de bibliotecas externas
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// importação do tipo do cardapio
import  { CardapioIten } from "../../models/Cardapio";

// define os tipos do estado
type initialState = {
    itens: CardapioIten[]
    isOpen: boolean
    isOrder: boolean
    isPayment: boolean
}
// define os estados iniciais do carrinho
const initialState: initialState = {
    itens: [],
    isOpen: false,
    isOrder: false,
    isPayment: false,
}

// criação do slice do carrinho
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // abre e fecha o carrinho
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        },

        // abre e fecha o carrinho
        openOrder: (state) => {
            state.isOrder = true
        },
        closeOrder: (state) => {
            state.isOrder = false
        },

        // abre e fecha a zona de pagamento
        openPayment: (state) => {
            state.isPayment = true
        },
        closePayment: (state) => {
            state.isPayment = false
        },

        // adiona um item ao carrinho
        add: (state, action: PayloadAction<CardapioIten>) => {
            const geraId = state.itens.length > 0 ? state.itens[state.itens.length - 1].id + 1 : 1
            state.itens.push({...action.payload, id: geraId})

        },
        // remove um item do carrinho
        remove: (state, action: PayloadAction<number>) => {
            state.itens = state.itens.filter((item) => item.id !== action.payload)
        },
        // limpa o carrinho
        clear: (state) => {
            state.itens = []
        }
    }
})

// exporta as actions do carrinho
export const { add, remove, open, close, openOrder, closeOrder, openPayment, closePayment, clear } = cartSlice.actions
export default cartSlice.reducer
