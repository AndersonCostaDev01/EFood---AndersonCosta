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

    return (
        <S.HomeItensContainer>
            <div>
            <img src={image} alt={produto} />
            <S.Indicadores>
                {indicador.map((item, index) => (
                    <HomeButton
                        key={index}
                        children={item}
                    />
                ))}
            </S.Indicadores>
            </div>
            
            <S.DescricaoContainer>
                <S.NameConatiner>
                    <h3>{produto}</h3>
                    <S.Avaliacao>
                        <p>{avaliacao}</p>
                        <img src={star} alt="" />
                    </S.Avaliacao>
                </S.NameConatiner>
                <S.Descricao>
                        <p>
                            {descricao}
                        </p>
                </S.Descricao>
                <HomeButton 
                    to={'/saiba-mais'}
                    active
                    children='Saiba Mais'
                />
            </S.DescricaoContainer>
        </S.HomeItensContainer>
    )
}