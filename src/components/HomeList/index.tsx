// Importação dos estilos do componente 
import * as S from './styles'
// Importação de componentes
import { HomeItens } from '../HomeItens'
// importaçõao do tipo cardapio
import Cardapio from '../../models/Cardapio'
// IMpoortação de imagens
import sushi from '../../assets/Sushi.png'
import macarao  from '../../assets/macarao.png'

 // Criação de variaveis para o componente
 const itensList:Cardapio[] = [
    {
        avaliacao: 4.9,
        descricao: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
        imagem: sushi,
        produto: 'Hioki Sushi ',
        indicador: ['destaque da semana', 'Japonesa']
    },
    {
        avaliacao: 4.6,
        descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        imagem: macarao,
        produto: 'La Dolce Vita Trattoria',
        indicador: ['Italiana']
    },
    {
        avaliacao: 4.9,
        descricao: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
        imagem: sushi,
        produto: 'Hioki Sushi ',
        indicador: ['destaque da semana', 'Japonesa']
    },
    {
        avaliacao: 4.6,
        descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        imagem: macarao,
        produto: 'La Dolce Vita Trattoria',
        indicador: ['Italiana']
    },
    {
        avaliacao: 4.9,
        descricao: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
        imagem: sushi,
        produto: 'Hioki Sushi ',
        indicador: ['destaque da semana', 'Japonesa']
    },
    {
        avaliacao: 4.6,
        descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        imagem: macarao,
        produto: 'La Dolce Vita Trattoria',
        indicador: ['Italiana']
    },
]

export function HomeList() {

    return (
        <div className="container">
            <S.HomeListContainer>
                {itensList.map((item, index) => (
                    <HomeItens 
                        key={index}
                        avaliacao={item.avaliacao}
                        image={item.imagem}
                        descricao={item.descricao}
                        indicador={item.indicador}
                        produto={item.produto}
                    />
                ))}
            </S.HomeListContainer>
        </div>
    )
}