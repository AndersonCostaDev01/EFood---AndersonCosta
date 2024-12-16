// importação de estilos do componente	
import * as S from './styles'
// importação de componentes
import ItenCart from "../ItenCart";
// importação de imagens
import margerita from '../../assets/margerita.png'
import close from '../../assets/close.svg'
import { useState } from 'react';
// COrreção do nome do arquivo

const cardapioCart = [
    {
        img: margerita,
        name: 'Pizza Margerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
        img: margerita,
        name: 'Pizza Margerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
        img: margerita,
        name: 'Pizza Margerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
        img: margerita,
        name: 'Pizza Margerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
        img: margerita,
        name: 'Pizza Margerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
        img: margerita,
        name: 'Pizza Margerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
]

export default function ItensCart () {
    const [modal, setModal] = useState(false)
    return (
        <S.ItensCartContainer>
            {cardapioCart.map((item, index) => (
                <ItenCart
                    onClick={() => setModal(!modal)}
                    key={index}
                    name={item.name}
                    descricao={item.descricao}
                    img={item.img} />
            ))}

            <S.modalContainer className={modal ? 'isOpen' : ''}>
                <S.modalContent>
                    <S.CloseButton onClick={() => setModal(!modal)}>
                            <img src={close} alt="Botão para fechar" />
                    </S.CloseButton>
                    <S.ModalDesciption>
                        <S.ImgModal>
                            <img src={margerita} alt="" />
                        </S.ImgModal>
                        <S.Description>
                            <h3>Pizza Margerita</h3>
                            <p> Spaghetti alla Carbonara é um clássico prato italiano, feito com massa spaghetti al dente, coberto com um molho rico e cremoso à base de ovos, queijo pecorino romano, pancetta e pimenta-do-reino. Um prato saboroso e reconfortante que leva você diretamente para a Itália.</p>
                            <p>Serve de 2 a 4 pessoas</p>
                            <S.ModalButton>adicionar ao carrinho - RS 29,90</S.ModalButton>
                        </S.Description>
                    </S.ModalDesciption>
                </S.modalContent>
                <S.Overlay onClick={() => setModal(!modal)}></S.Overlay>
            </S.modalContainer>
        </S.ItensCartContainer>
    )
} 
