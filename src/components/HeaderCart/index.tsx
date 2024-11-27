// importação de bibliotecas externas
import { Link } from 'react-router-dom'
// Importação de estilos do componente 
import * as S from './styles'

// Importação de imagens
import fundoHeader from '../../assets/fundoHeader.png'
import logo from '../../assets/logo.png'
import image from '../../assets/apresentacaoHeader.png'

export default function HeaderCart() {
    return (
        <S.HeaderContainer
            style={{backgroundImage: `url(${fundoHeader})`}}
        >
            <S.Containerlogo>
                <h3>Restaurantes</h3>
                <Link to={'/'}><img src={logo} alt="Logo da Efood" /></Link>
                <h3>0 produto(s) no carrinho</h3>
            </S.Containerlogo>
            <S.Img src={image} alt="Prato de macarão" />
            
        </S.HeaderContainer>
    )
}