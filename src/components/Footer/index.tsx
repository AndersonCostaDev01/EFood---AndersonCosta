// importação dos estilos do componente
import * as S from './styles'
// Importação de imagens 
import logo from '../../assets/logo.png'
import Facbook from '../../assets/facebook.svg'
import Instagram from '../../assets/instagram.svg'
import x from '../../assets/x.svg'
// COrreção do nome do arquivo

export default function Footer() {
    return (
        <S.FooterContainer>
            <img src={logo} alt="Logo da Efood" />
            <S.FooterLogo>
                <img src={Instagram} alt="Logo do Facbook" />
                <img src={Facbook} alt="Logo do Instagram" />
                <img src={x} alt="Logo do X" />
            </S.FooterLogo>
            <S.FooterText>
                A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade <br />dos produtos é toda do estabelecimento contratado. 
            </S.FooterText>
        </S.FooterContainer>
    )
}   