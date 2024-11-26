// importação dos estilos do componente
import * as S from './styles'

// Criação das Props 
type Props = {
    children: string
}

export default function HomeButton({children}: Props) {
    return (
        <S.HomeButtonContainer>{children}</S.HomeButtonContainer>
    )
}