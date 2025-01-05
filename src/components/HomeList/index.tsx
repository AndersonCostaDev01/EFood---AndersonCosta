// Importação dos estilos do componente 
import * as S from './styles'
// Importação de componentes
import { HomeItens } from '../HomeItens'
// Importação dos endpoints
import { useGetCardapioQuery } from '../../services/api'
import Loader from '../Loader'

// Criação de typo cardapio

export function HomeList() {
    

    const {data: itens} = useGetCardapioQuery()

    if (!itens) {
        return <Loader />
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