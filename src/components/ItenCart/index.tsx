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
    const getDescricao = (des: string) => {
        if (des.length > 105) {
            return des.slice(0, 102) + ' ...';
        }
        return des
    }
    return (
        <>
            <S.ItenCartContainer onClick={onClick}>
                <S.ContainerImg>
                    <img src={img} alt={name} />
                </S.ContainerImg>
                <h3>{name}</h3>
                <p>{descricao && getDescricao(descricao)}</p>
                <S.Button>
                    adicionar ao carrinho
                </S.Button>
            </S.ItenCartContainer>
        </>
    )
}