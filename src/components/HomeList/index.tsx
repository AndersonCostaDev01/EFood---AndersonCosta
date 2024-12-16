// Importação dos estilos do componente 
import * as S from './styles'
// Importação de componentes
import { HomeItens } from '../HomeItens'
// importaçõao do tipo cardapio
import Cardapio from '../../models/Cardapio'
// IMpoortação de imagens
import { useState } from 'react'

// Criação de typo cardapio

export function HomeList() {
    const [itens, setItens] = useState<Cardapio[]>()
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
    .then(response => response.json())
    .then(data => {
        setItens(data)
    })
    if (!itens) {
        return <S.Carregando>Carregando...</S.Carregando>
    }
    return (
        <div className="container">
            <S.HomeListContainer>
                {itens.map(item => (
                    <HomeItens
                        key={item.id}
                        id={item.id}
                        produto={item.titulo}
                        image={item.capa}
                        avaliacao={item.avaliacao}
                        descricao={item.descricao}
                        indicador={item.tipo}   
                        destaque={item.destacado}                    
                    />
                ))}
            </S.HomeListContainer>
        </div>
    )
}