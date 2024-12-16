// importação de bibliotecas externas
import { Link } from 'react-router-dom'
// Importação de estilos do componente 
import * as S from './styles'

// Importação de imagens
import fundoHeader from '../../assets/fundoHeader.png'
import logo from '../../assets/logo.png'
import image from '../../assets/fundoSobre.png'

export default function HeaderCart() {
    return (
        <S.HeaderContainer
            style={{backgroundImage: `url(${fundoHeader})`}}
        >
            <S.Containerlogo>
                <S.HomeLink to={'/'}>Restaurantes</S.HomeLink>
                <Link to={'/'}><img src={logo} alt="Logo da Efood" /></Link>
                <h3>0 produto(s) no carrinho</h3>
            </S.Containerlogo>
            <S.ContainerImg 
                style={{backgroundImage: `url(${image})`}}>
                   <S.Img className='container'>
                   <S.Italic>Italiana</S.Italic>
                   <h3>La Dolce Vita Trattoria</h3>
                   </S.Img>
            </S.ContainerImg>
            {/* <S.Img src={image} alt="Prato de macarão" /> */}
            
        </S.HeaderContainer>
    )
}