// Importação de bibliotecas externas 
import { Link } from 'react-router-dom'
// Importação dos estilos do componente 
import * as S from './styles'
// Importação de imagem
import fundoHeader from '../../assets/fundoHeader.png'
import logo from '../../assets/logo.png'

export default function Header() {
    return(
        <S.HeaderContainer style={{backgroundImage: `url(${fundoHeader})`}}>
            <S.Logo>
                <Link to={'/'}>
                     <img src={logo} alt="Logo da Efood" />
                </Link>
            </S.Logo>
            <S.Titulo>
                Viva experiências gastronômicas<br /> no conforto da sua casa
            </S.Titulo>
        </S.HeaderContainer>
    )
}