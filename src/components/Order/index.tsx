// importação de bibliotecas externas
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
// importação de tipos do reducer
import { RootState } from '../../store';
// importação de estilos
import * as S from './styles';
// importação de componentes
import { clear, closeOrder, closePayment, openPayment } from '../../store/reducers/Cart';
// importação do endpoint
import { usePurchaseMutation } from '../../services/api';
import Loader from '../Loader';

const Order = () => {
  const navigate = useNavigate();
  const { isPayment } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const [purchase, { data, isSuccess, isLoading, error }] = usePurchaseMutation();

  const fecharPagamento = () => dispatch(closePayment());
  const fecharPedido = () => dispatch(closeOrder());
  const abrirPagamento = () => dispatch(openPayment());
  const limparPedido = () => dispatch(clear());

  const FinishOrder = () => {
    fecharPagamento();
    navigate('/');
    limparPedido();
  }

  const formikEntrega = useFormik({
    initialValues: {
      // dados da entrega
      name: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('O nome do destinatário é obrigatório'),
      endereco: Yup.string().required('O endereço é obrigatório'),
      cidade: Yup.string().required('A cidade é obrigatória'),
      cep: Yup.string()
        .required('O CEP é obrigatório')
        .matches(/^[0-9]{8}$/, 'O CEP deve ter 8 dígitos'),
      numero: Yup.string().required('O número do endereço é obrigatório'),
      complemento: Yup.string(),
    }),
    onSubmit: () => {
      abrirPagamento(); // Avança para a etapa de pagamento
    },
  });

  const formikPagamento = useFormik({
    initialValues: {
      // dados do cartão
      cardName: '',
      cardNumber: '',
      cvv: '',
      dueMonth: '',
      dueYear: '',
    },
    validationSchema: Yup.object({
      cardName: Yup.string()
        .required('O nome no cartão é obrigatório')
        .min(3, 'O nome deve ter pelo menos 3 caracteres'),
      cardNumber: Yup.string()
        .required('O número do cartão é obrigatório')
        .matches(/^[0-9]{16}$/, 'O número do cartão deve ter 16 dígitos'),
      cvv: Yup.string()
        .required('O CVV é obrigatório')
        .matches(/^[0-9]{3}$/, 'O CVV deve ter 3 dígitos'),
      dueMonth: Yup.string()
        .required('O mês de vencimento é obrigatório')
        .matches(/^(0[1-9]|1[0-2])$/, 'O mês deve estar no formato MM (01-12)'),
      dueYear: Yup.string()
        .required('O ano de vencimento é obrigatório')
        .matches(/^[0-9]{4}$/, 'O ano deve estar no formato AAAA'),
    }),
    onSubmit: (values) => {
      purchase({
        products: [{
          id: 1,
          price: 150
        }],
        delivery: {
          receiver: formikEntrega.values.name,
          address: {
            descricao: formikEntrega.values.endereco,
            city: formikEntrega.values.cidade,
            zipcode: formikEntrega.values.cep,
            number: Number(formikEntrega.values.numero),
            complement: formikEntrega.values.complemento,
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.dueMonth),
              year: Number(values.dueYear),
            }
          }
        }
      })
    },
  });
  if (error) {
    <>
      <S.OrderContainer>
        <S.OrderTitle>Erro ao realizar o pedido</S.OrderTitle>
        <S.OrderDescription>
          Ocorreu um erro ao realizar o pedido. Por favor, tente novamente mais tarde.
        </S.OrderDescription>
        <S.OrderButton onClick={() => fecharPedido()}>Voltar</S.OrderButton>
      </S.OrderContainer>
    </>
  }
  if (isLoading) {
    <S.OrderContainer>
      <Loader />
    </S.OrderContainer>
  }
  return (
    <S.OrderContainer>
      {data && isSuccess ? (
        <>
          <S.OrderTitle>Pedido realizado - {data.orderId}</S.OrderTitle>
          <S.OrderDescription>
          Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
          </S.OrderDescription>
          <S.OrderDescription>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
          </S.OrderDescription>
          <S.OrderDescription>
          Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
          </S.OrderDescription>
          <S.OrderDescription>
          Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
          </S.OrderDescription>

          <S.OrderButton
          className='marginTop'
          onClick={() => FinishOrder()}>Concluir</S.OrderButton>
        </>
      ) : (
        <>
          {isPayment ? (
        // Zona de pagamento
        <form id="paymentForm" onSubmit={formikPagamento.handleSubmit}>
          <S.OrderTitle>Pagamento - valor a pagar R$ 0</S.OrderTitle>

          <S.OrderRow>
            <S.LabelContainer>
              <label htmlFor="cardName">Nome do cartão</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={formikPagamento.values.cardName}
                onChange={formikPagamento.handleChange}
                onBlur={formikPagamento.handleBlur}
              />
              {formikPagamento.touched.cardName && formikPagamento.errors.cardName && (
                <S.ErrorMessage>{formikPagamento.errors.cardName}</S.ErrorMessage>
              )}
            </S.LabelContainer>
          </S.OrderRow>

          <S.OrderRow>
            <S.LabelContainer>
              <label htmlFor="cardNumber">Número do cartão</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formikPagamento.values.cardNumber}
                onChange={formikPagamento.handleChange}
                onBlur={formikPagamento.handleBlur}
              />
              {formikPagamento.touched.cardNumber && formikPagamento.errors.cardNumber && (
                <S.ErrorMessage>{formikPagamento.errors.cardNumber}</S.ErrorMessage>
              )}
            </S.LabelContainer>

            <S.LabelContainer width="86px">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formikPagamento.values.cvv}
                onChange={formikPagamento.handleChange}
                onBlur={formikPagamento.handleBlur}
              />
              {formikPagamento.touched.cvv && formikPagamento.errors.cvv && (
                <S.ErrorMessage>{formikPagamento.errors.cvv}</S.ErrorMessage>
              )}
            </S.LabelContainer>
          </S.OrderRow>

          <S.OrderRow>
            <S.LabelContainer>
              <label htmlFor="dueMonth">Mês de vencimento</label>
              <input
                type="text"
                id="dueMonth"
                name="dueMonth"
                value={formikPagamento.values.dueMonth}
                onChange={formikPagamento.handleChange}
                onBlur={formikPagamento.handleBlur}
              />
              {formikPagamento.touched.dueMonth && formikPagamento.errors.dueMonth && (
                <S.ErrorMessage>{formikPagamento.errors.dueMonth}</S.ErrorMessage>
              )}
            </S.LabelContainer>

            <S.LabelContainer>
              <label htmlFor="dueYear">Ano de vencimento</label>
              <input
                type="text"
                id="dueYear"
                name="dueYear"
                value={formikPagamento.values.dueYear}
                onChange={formikPagamento.handleChange}
                onBlur={formikPagamento.handleBlur}
              />
              {formikPagamento.touched.dueYear && formikPagamento.errors.dueYear && (
                <S.ErrorMessage>{formikPagamento.errors.dueYear}</S.ErrorMessage>
              )}
            </S.LabelContainer>
          </S.OrderRow>

          <S.OrderButton className="marginTop" type="submit">
            Finalizar pagamento
          </S.OrderButton>

          <S.OrderButton type="button" onClick={fecharPagamento}>
            Voltar para edição de endereço
          </S.OrderButton>
        </form>
      ) : (
        // Zona de entrega
        <form id="deliveryForm" onSubmit={formikEntrega.handleSubmit}>
          <S.OrderTitle>Entrega</S.OrderTitle>

          <S.OrderRow>
            <S.LabelContainer>
              <label htmlFor="name">Quem irá receber</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formikEntrega.values.name}
                onChange={formikEntrega.handleChange}
                onBlur={formikEntrega.handleBlur}
              />
              {formikEntrega.touched.name && formikEntrega.errors.name && (
                <S.ErrorMessage>{formikEntrega.errors.name}</S.ErrorMessage>
              )}
            </S.LabelContainer>
          </S.OrderRow>

          <S.OrderRow>
            <S.LabelContainer>
              <label htmlFor="endereco">Endereço</label>
              <input
                type="text"
                id="endereco"
                name="endereco"
                value={formikEntrega.values.endereco}
                onChange={formikEntrega.handleChange}
                onBlur={formikEntrega.handleBlur}
              />
              {formikEntrega.touched.endereco && formikEntrega.errors.endereco && (
                <S.ErrorMessage>{formikEntrega.errors.endereco}</S.ErrorMessage>
              )}
            </S.LabelContainer>
          </S.OrderRow>

          <S.OrderRow>
            <S.LabelContainer>
              <label htmlFor="cidade">Cidade</label>
              <input
                type="text"
                id="cidade"
                name="cidade"
                value={formikEntrega.values.cidade}
                onChange={formikEntrega.handleChange}
                onBlur={formikEntrega.handleBlur}
              />
              {formikEntrega.touched.cidade && formikEntrega.errors.cidade && (
                <S.ErrorMessage>{formikEntrega.errors.cidade}</S.ErrorMessage>
              )}
            </S.LabelContainer>
          </S.OrderRow>

          <S.OrderRow>
            <S.LabelContainer>
              <label htmlFor="cep">CEP</label>
              <input
                type="text"
                id="cep"
                name="cep"
                value={formikEntrega.values.cep}
                onChange={formikEntrega.handleChange}
                onBlur={formikEntrega.handleBlur}
              />
              {formikEntrega.touched.cep && formikEntrega.errors.cep && (
                <S.ErrorMessage>{formikEntrega.errors.cep}</S.ErrorMessage>
              )}
            </S.LabelContainer>

            <S.LabelContainer>
              <label htmlFor="numero">Número</label>
              <input
                type="text"
                id="numero"
                name="numero"
                value={formikEntrega.values.numero}
                onChange={formikEntrega.handleChange}
                onBlur={formikEntrega.handleBlur}
              />
              {formikEntrega.touched.numero && formikEntrega.errors.numero && (
                <S.ErrorMessage>{formikEntrega.errors.numero}</S.ErrorMessage>
              )}
            </S.LabelContainer>
          </S.OrderRow>

          <S.OrderRow>
            <S.LabelContainer>
              <label htmlFor="complemento">Complemento (opcional)</label>
              <input
                type="text"
                id="complemento"
                name="complemento"
                value={formikEntrega.values.complemento}
                onChange={formikEntrega.handleChange}
                onBlur={formikEntrega.handleBlur}
              />
            </S.LabelContainer>
          </S.OrderRow>

          <S.OrderButton
            className="marginTop"
            type="submit"
          >
            Continuar com pagamento
          </S.OrderButton>
          <S.OrderButton type="button" onClick={fecharPedido}>
            Voltar para o carrinho
          </S.OrderButton>
        </form>
      )}
        </>
      )}
    </S.OrderContainer>
  );
};

export default Order;
