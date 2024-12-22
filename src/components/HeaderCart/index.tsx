// importação de bibliotecas externas
import { Link, useParams } from 'react-router-dom'
// Importação de estilos do componente 
import * as S from './styles'

// Importação de imagens
import fundoHeader from '../../assets/fundoHeader.png'
import logo from '../../assets/logo.png'
// Importação dos endpoints
import { useGetRestauranteQuery } from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/Cart'
import { RootState } from '../../store'

export default function HeaderCart() {
    const {id} = useParams();
    const dispatch = useDispatch()
    const abreCart = () => dispatch(open())
    const {itens} = useSelector((state: RootState) => state.cart)

    // endpoint de restaurante
    const {data: restaurante} = useGetRestauranteQuery(id!);
    return (
        <S.HeaderContainer
            style={{backgroundImage: `url(${fundoHeader})`}}
        >
            <S.Containerlogo>
                <S.HomeLink to={'/'}>Restaurantes</S.HomeLink>
                <Link to={'/'}><img src={logo} alt="Logo da Efood" /></Link>
                <S.Cart onClick={abreCart}>{itens.length} produto(s) no carrinho</S.Cart>
            </S.Containerlogo>
            <S.ContainerImg 
                style={{backgroundImage: `url(${restaurante?.capa})`}}>

                <S.Img className='container'>
                    <S.Italic>{restaurante?.tipo}</S.Italic>
                    <h3>{restaurante?.titulo}</h3>
                </S.Img>
                <S.Overlay></S.Overlay>
            </S.ContainerImg>
            
        </S.HeaderContainer>
    )
}