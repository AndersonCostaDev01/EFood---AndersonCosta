// importação de estilos do componente
import * as S from './styles';
// importação de componentes
import ItemCart from "../ItenCart";
// importação de imagens
import close from '../../assets/close.svg';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { formataPreco } from '../../models/formataPreco';
// importação dos endpoints
import { useGetRestauranteQuery } from '../../services/api';

// Tipos
interface ItemCardapio {
  id: number;
  nome: string;
  descricao: string;
  foto: string;
  preco: number;
  porcao: string;
}

export default function ItensCart() {
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemCardapio | null>(null);
  // endepoint de restaurante
  const {data: cardapioCart} = useGetRestauranteQuery(id!);

  return (
    <S.ItensCartContainer>
     
      {cardapioCart &&
        cardapioCart.cardapio.map((iten) => (
          <ItemCart
            key={iten.id}
            img={iten.foto}
            name={iten.nome}
            descricao={iten.descricao}
            onClick={() => {
              setSelectedItem(iten);
              setModal(true);
            }}
          />
        ))}

      <S.modalContainer className={modal ? 'isOpen' : ''}>
        <S.modalContent>
          <S.CloseButton onClick={() => setModal(false)}>
            <img src={close} alt="Botão para fechar" />
          </S.CloseButton>
          {selectedItem && (
            <S.ModalDesciption>
              <S.ImgModal>
                <img src={selectedItem.foto} alt={selectedItem.nome} />
              </S.ImgModal>
              <S.Description>
                <h3>{selectedItem.nome}</h3>
                <p>{selectedItem.descricao}</p>
                <p>Serve: {selectedItem.porcao}</p>
                <S.ModalButton>Adicionar ao carrinho - {formataPreco(selectedItem.preco)}</S.ModalButton>
              </S.Description>
            </S.ModalDesciption>
          )}
        </S.modalContent>
        <S.Overlay onClick={() => setModal(false)}></S.Overlay>
      </S.modalContainer>
    </S.ItensCartContainer>
  );
}
