class Botao {
    constructor(texto,cor,tamanho,icone){
        this.texto= texto
        this.cor= cor
        this.tamanho= tamanho
        this.icone= icone
    }
}

desenhaBotao(){
    const novoBotao= document.createElement('button')
    novoBotao.setAttribute("class", ${this.cor})
}