export default class Product {
    nome = ""
    preco = 0
    quantidadeStock = 0
    quantidade = 0
    imgUrl = ""
    constructor(nome, preco, quantidadeStock, quantidade, imgUrl) {
      this.nome = nome;
      this.preco = preco;
      this.quantidadeStock = quantidadeStock;
      this.quantidade = quantidade;
      this.imgUrl = imgUrl;
    }
}