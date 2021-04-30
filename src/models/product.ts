export default class Product {
  nome: string = "";
  preco: number = 0;
  quantidadeStock: number = 0;
  quantidade: number = 0;
  imgUrl: string = "";
  constructor(
    nome: string,
    preco: number,
    quantidadeStock: number,
    quantidade: number,
    imgUrl: string
  ) {
    this.nome = nome;
    this.preco = preco;
    this.quantidadeStock = quantidadeStock;
    this.quantidade = quantidade;
    this.imgUrl = imgUrl;
  }
}
