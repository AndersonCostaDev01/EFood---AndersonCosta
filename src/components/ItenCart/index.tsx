// importação de estilos do componente
import * as S from './styles'    
// Criação das props
type Props = {
    img?: string
    name?: string
    descricao?: string
    onClick?: () => void
}

export default function ItenCart ({img, name, descricao, onClick}: Props) {
    return (
        <>
            <S.ItenCartContainer onClick={onClick}>
                <img src={img} alt={name} />
                <h3>{name}</h3>
                <p>{descricao}</p>
                <S.Button>adicionar ao carrinho</S.Button>
            </S.ItenCartContainer>
        </>
    )
}