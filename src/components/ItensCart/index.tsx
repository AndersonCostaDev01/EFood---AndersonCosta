// importação de estilos do componente	
import * as S from './styles'
// importação de componentes
import ItenCart from "../ItenCart";
// importação de imagens
import margerita from '../../assets/margerita.png'
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
    return (
        <S.ItensCartContainer>
            {cardapioCart.map((item, index) => (
                <ItenCart
                    key={index}
                    name={item.name}
                    descricao={item.descricao}
                    img={item.img} />
            ))}
        </S.ItensCartContainer>
    )
} 
