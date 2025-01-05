import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { closeOrder } from '../../store/reducers/Cart'
const Order = () => {
    const [delivery, setDelivery] = useState(true)

    const dispatch = useDispatch()
    const fecharPedido = () => dispatch(closeOrder())
    return (
        <S.OrderContainer>
            {delivery ? (
                // Entrega
                <>
                  <S.OrderTitle>Entrega</S.OrderTitle>
                  <S.OrderRow>
                    <S.LabelContainer>
                      <label htmlFor="name">Quem ira receber</label>
                      <input
                      type="text"
                      id="name"
                      name="name" />
                    </S.LabelContainer>
                  </S.OrderRow>
                  <S.OrderRow>
                    <S.LabelContainer>
                        <label htmlFor="endereco">Endereço</label>
                        <input
                        type="text"
                        id="endereco"
                        name="endereco"/>
                      </S.LabelContainer>
                  </S.OrderRow>
                  <S.OrderRow>
                    <S.LabelContainer>
                      <label htmlFor="cidade">Cidade</label>
                      <input
                      type="text"
                      id="cidade"
                      name="cidade"/>
                    </S.LabelContainer>
                  </S.OrderRow>
                  <S.OrderRow>
                    <S.LabelContainer>
                      <label htmlFor="cep">CEP</label>
                      <input
                      type="text"
                      id="cep"
                      name="cep"/>
                    </S.LabelContainer>
                    <S.LabelContainer>
                      <label htmlFor="numero">Numero</label>
                      <input
                      type='text'
                      id="numero"
                      name="numero"/>
                    </S.LabelContainer>
                  </S.OrderRow>
                  <S.OrderRow>
                    <S.LabelContainer>
                      <label htmlFor="complemento">Complemento (opcional)</label>
                      <input
                      type="text"
                      id="complemento"
                      name="complemento"/>
                    </S.LabelContainer>
                  </S.OrderRow>
                  <S.OrderButton
                  className='marginTop'
                  onClick={() => setDelivery(false)}>
                    Continue com pagamento
                  </S.OrderButton>
                  <S.OrderButton
                  onClick={() => fecharPedido()}>Voltar para o carrinho</S.OrderButton>
                </>
            ) : (
                // Pagamento
                <>
                  <S.OrderTitle>Pagamento - valor a pagar R$ 0</S.OrderTitle>
                  <S.OrderRow>
                    <S.LabelContainer>
                      <label htmlFor="cardName">Nome do cartão</label>
                      <input
                      type="text"
                      id="cardName"
                      name="cardName"/>
                    </S.LabelContainer>
                  </S.OrderRow>
                  <S.OrderRow>
                    <S.LabelContainer>
                      <label htmlFor="cardNumber">Numero do cartão</label>
                      <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"/>
                    </S.LabelContainer>
                    <S.LabelContainer width='86px'>
                      <label htmlFor="cvv">CVV</label>
                      <input
                      type="text"
                      id="cvv"
                      name="cvv"/>
                    </S.LabelContainer>
                  </S.OrderRow>
                  <S.OrderRow>
                    <S.LabelContainer>
                      <label htmlFor="dueMonth">Mes de vencimento</label>
                      <input
                      type="text"
                      id="dueMonth"
                      name="dueMonth"/>
                    </S.LabelContainer>
                    <S.LabelContainer>
                      <label htmlFor="dueYear">Ano de vencimento</label>
                      <input
                      type="text"
                      id="dueYear"
                      name="dueYear"/>
                    </S.LabelContainer>
                  </S.OrderRow>
                  <S.OrderButton
                  className='marginTop'>Finalizar pagamento</S.OrderButton>
                  <S.OrderButton
                  onClick={() => setDelivery(true)}>Voltar para edição de endereço</S.OrderButton>
                </>
            )}
        </S.OrderContainer>
    )
}
export default Order
