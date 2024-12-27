// importação de bibliotecas externas
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// importação do tipo do cardapio
import  { CardapioIten } from "../../models/Cardapio";

// define os tipos do estado
type initialState = {
    itens: CardapioIten[]
    isOpen: boolean
}
// define os estados iniciais do carrinho
const initialState: initialState = {
    itens: [],
    isOpen: false
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

        // adiona um item ao carrinho
        add: (state, action: PayloadAction<CardapioIten>) => {
            const geraId = state.itens.length > 0 ? state.itens[state.itens.length - 1].id + 1 : 1
            state.itens.push({...action.payload, id: geraId})
            
        },
        // remove um item do carrinho
        remove: (state, action: PayloadAction<number>) => {
            state.itens = state.itens.filter((item) => item.id !== action.payload)
        },
    }
})

// exporta as actions do carrinho
export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer