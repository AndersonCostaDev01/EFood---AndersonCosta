// importação de estilos do componente
import * as S from './styles'    
// Criação das props
type Props = {
    img?: string
    name?: string
    descricao?: string
}

export default function ItenCart ({img, name, descricao}: Props) {
    return (
        <S.ItenCartContainer>
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <p>{descricao}</p>
            <S.Button>adicionar ao carrinho</S.Button>
        </S.ItenCartContainer>
    )
}