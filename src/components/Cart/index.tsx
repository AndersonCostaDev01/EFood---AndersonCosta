// Importação de estilos
import { useDispatch, useSelector } from "react-redux"
import * as S from "./styles"
import { RootState } from "../../store"
import {close, remove, openOrder} from "../../store/reducers/Cart"
import { formataPreco } from "../../models/formataPreco"
// importação de imagem
import lixeira from "../../assets/lixeira.svg"
import Order from "../Order"
const CartSection = () => {
    // pega o state do carrinho
    const {isOpen, itens, isOrder} = useSelector((state: RootState) => state.cart)
    // declaração do dispatch
    const dispatch = useDispatch()

    // função para fechar o carrinho
    const closeCart = () => dispatch(close())
    // remove um item do carrinho
    const removeItem = (id: number) => dispatch(remove(id))
    // Abre pedido
    const abrirPedido = () => dispatch(openOrder()) // fazer consicional para ver se o carrinho esta vazio

    return (
        <S.CartGlobalContainer className={isOpen ? 'isOpen' : ''}>
            {/*  */}
            {isOrder ? (<Order />) : (
                <S.CartContainer>
                {itens.map((iten) => (
                    <S.CartContent key={iten.id}>
                        <S.ImageContainer>
                            <img src={iten.foto} alt={iten.nome} />
                        </S.ImageContainer>
                        <S.CartDescribe>
                            <h4>{iten.nome}</h4>
                            <p>{formataPreco(iten.preco)}</p>
                        </S.CartDescribe>
                        <S.Lixeira src={lixeira} alt="lixeira para deletar produto" onClick={removeItem.bind(null, iten.id)}/>
                    </S.CartContent>
                ))}
                <S.CartBuy>
                <p>valor total:</p>
                <p>{formataPreco(itens.reduce((total, item) => total + item.preco, 0))}</p>
                </S.CartBuy>
                <S.Button onClick={() => abrirPedido()}>Continuar com a entrega</S.Button>
                </S.CartContainer>
            )}
            {/*  */}

            <S.Overlay onClick={closeCart}/>
        </S.CartGlobalContainer>
    )
}

export default CartSection
