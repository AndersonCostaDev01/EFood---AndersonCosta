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
    id: number
    destaque: boolean
}

export function HomeItens({produto, avaliacao, image, id, descricao, indicador, destaque}: Props) {

    console.log(destaque)
    return (
        <S.HomeItensContainer>
            <S.ImageContainer>
                <img src={image} alt={produto} />
                <S.Indicadores>
                    {destaque && <p>Destaque da semana</p>}
                    <p>{indicador}</p>
                </S.Indicadores>
            </S.ImageContainer>
            <S.DescricaoContainer>
                <S.NameConatiner>
                    <h3>{produto}</h3>
                    <S.Avaliacao>
                        <p>{avaliacao}</p>
                        <img src={star} alt="" />   
                    </S.Avaliacao>
                </S.NameConatiner>
                <S.Descricao>
                    <p>{descricao}</p>
                </S.Descricao>
                <HomeButton to={`/restaurante/${id}`} active children='Saiba Mais' />
            </S.DescricaoContainer>
        </S.HomeItensContainer>
    )
}

/*

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
                    to={`/restaurante/${id}`}
                    active
                    children='Saiba Mais'
                />
            </S.DescricaoContainer>
*/