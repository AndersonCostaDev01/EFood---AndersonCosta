// importação de bibliotecas externas
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// importação dos tipos do cardapio
import Cardapio from '../models/Cardapio'

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
        }),
    endpoints: (builder) => ({
        //  criação de endpoints

        // endpoint de cardapio
        getCardapio: builder.query<Cardapio[], void>({
            query: () => `/restaurantes`,
        }),
    })
})

// exportação dos endpoints
export const {
    useGetCardapioQuery
} = api

export default api