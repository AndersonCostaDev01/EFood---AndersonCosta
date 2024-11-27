class Cardapio {
    avaliacao: number
    descricao: string
    imagem: string
    produto: string
    indicador: string[]

    constructor(avaliacao: number, descricao: string, imagem: string, produto: string, indicador: string[]) {
        this.avaliacao = avaliacao
        this.descricao = descricao
        this.imagem = imagem
        this.produto = produto
        this.indicador = indicador
    }
}
export default Cardapio