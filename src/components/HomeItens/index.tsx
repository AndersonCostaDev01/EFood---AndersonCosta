// importação dos estilos do componente
import * as S from './styles'
// Importação de imagens
import star from '../../assets/favoriteStar.svg'
import HomeButton from '../HomeButton'

// Criação das Props
type Props = {
    produto: string
    image: string
    avaliacao: number
    descricao: string
    indicador: string[]
}

export function HomeItens({produto, image, avaliacao, descricao, indicador}: Props) {

    const indicação = ['destaque da semana', 'Japonesa']
    return (
        <S.HomeItensContainer>
            <div>
            <img src="https://placehold.co/470x220" alt="" />
            <S.Indicadores>
                {indicação.map((item, index) => (
                    <HomeButton
                        key={index}
                        children={item}
                    />
                ))}
            </S.Indicadores>
            </div>
            
            <S.DescricaoContainer>
                <S.NameConatiner>
                    <h3>Nome do item</h3>
                    <S.Avaliacao>
                        <p>4.9</p>
                        <img src={star} alt="" />
                    </S.Avaliacao>
                </S.NameConatiner>
                <S.Descricao>
                        <p>
                            Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!
                        </p>
                </S.Descricao>
                <HomeButton 
                    
                    children='Saiba Mais'
                />
            </S.DescricaoContainer>
        </S.HomeItensContainer>
    )
}