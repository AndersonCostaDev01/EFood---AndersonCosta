// importação dos estilos do componente
import * as S from './styles'

// Criação das Props 
type Props = {
    children: string
    active?: boolean
    to?: string
}

export default function HomeButton({children, active, to}: Props) {
    if (active) {
        return (
            <S.HomeLink active={active} to={to}>{children}</S.HomeLink>
        )
    } else {
        return (
            <S.HomeButtonContainer>{children}</S.HomeButtonContainer>
        )
    }
}