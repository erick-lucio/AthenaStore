export default class Product {
  nome: string = "";
  preco: number = 0;
  quantidadeStock: number = 0;
  quantidade: number = 0;
  imgUrl: string = "";
  categoria: number = 0;
  observacao: string = ""
  constructor(
    nome: string,
    preco: number,
    quantidadeStock: number,
    quantidade: number,
    imgUrl: string,
    categoria: number,
    observacao: string
  ) {
    this.nome = nome;
    this.preco = preco;
    this.quantidadeStock = quantidadeStock;
    this.quantidade = quantidade;
    this.imgUrl = imgUrl;
    this.categoria = categoria;
    this.observacao = observacao;
  }
}
