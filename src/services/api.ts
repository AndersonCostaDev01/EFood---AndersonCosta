// importação de bibliotecas externas
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// importação dos tipos do cardapio
import Cardapio from '../models/Cardapio'
import Checkout from '../models/Checkout'

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
        }),
    endpoints: (builder) => ({
        // criação de endpoints
        // endpoint de cardapio
        getCardapio: builder.query<Cardapio[], void>({
            query: () => `/restaurantes`,
        }),
        // endpoint de restaurante
        getRestaurante: builder.query<Cardapio, string>({
            query: (id) => `/restaurantes/${id}`,
        }),
        // end point de checkout
        purchase: builder.mutation<any, Checkout>({
          query: (body) => ({
            url: 'checkout',
            method: 'POST',
            body
          })
        })
    })
})

// exportação dos endpoints
export const {
    useGetCardapioQuery,
    useGetRestauranteQuery,
    usePurchaseMutation
} = api

export default api
