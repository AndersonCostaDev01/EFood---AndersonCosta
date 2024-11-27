// importação de estilos do componente
import * as S from './styles'    
// Criação das props
type Props = {
    img: string
    nome: string
    descricao: string
}

export default function ItenCart ({img, nome, descricao}: Props) {
    return (
        <S.ItenCartContainer>
            <img src={img} alt="Pizza Margerita" />
            <h3>{nome}</h3>
            <p>{descricao}</p>
            <S.Button>adicionar ao carrinho</S.Button>
        </S.ItenCartContainer>
    )
}