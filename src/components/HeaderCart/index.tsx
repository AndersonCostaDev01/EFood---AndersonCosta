// importação de bibliotecas externas
import { Link, useParams } from 'react-router-dom'
// Importação de estilos do componente 
import * as S from './styles'

// Importação de imagens
import fundoHeader from '../../assets/fundoHeader.png'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import Cardapio from '../../models/Cardapio'

export default function HeaderCart() {
    const [restaurante, setRestaurante] = useState<Cardapio>()
    const {id} = useParams();
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
    .then(response => response.json())
    .then(data => {
        setRestaurante(data)
    })
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