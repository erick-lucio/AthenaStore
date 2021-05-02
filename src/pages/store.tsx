import React ,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";


import ProductItem from "../components/produtoItem";

import productApi from "../services/products"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "20px",
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function StorePage() {
  const [productsList, setProductsList] = React.useState(null);// seta a lista de produtos pra nula e so carrega o grid de itens quando receber c sucesso do back end
  const classes = useStyles();
  var produtosTeste = [
    {
      nome: "Produto",
      preco: 12.34,
      quantidadeStock: 79,
      quantidade: 0,
      imgUrl: "/img/aiiij44",
    },
    {
      nome: "Produto",
      preco: 12.34,
      quantidadeStock: 79,
      quantidade: 0,
      imgUrl: "/img/aiiij44",
    },
    {
      nome: "Produto",
      preco: 12.34,
      quantidadeStock: 79,
      quantidade: 0,
      imgUrl: "/img/aiiij44",
    },
    {
      nome: "Produto",
      preco: 12.34,
      quantidadeStock: 79,
      quantidade: 0,
      imgUrl: "/img/aiiij44",
    },
    {
      nome: "Produto",
      preco: 12.34,
      quantidadeStock: 79,
      quantidade: 0,
      imgUrl: "/img/aiiij44",
    },
    {
      nome: "Produto",
      preco: 12.34,
      quantidadeStock: 79,
      quantidade: 0,
      imgUrl: "/img/aiiij44",
    },
    {
      nome: "Produto",
      preco: 12.34,
      quantidadeStock: 79,
      quantidade: 0,
      imgUrl: "/img/aiiij44",
    },
    {
      nome: "Produto",
      preco: 12.34,
      quantidadeStock: 79,
      quantidade: 0,
      imgUrl: "/img/aiiij44",
    },
    {
      nome: "Produto",
      preco: 12.34,
      quantidadeStock: 79,
      quantidade: 0,
      imgUrl: "/img/aiiij44",
    },
  ];
  if (productsList === null) {
    //Recebe uma lista de objetos do banco e passa ao componente produto
    return (
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={6}>
            {produtosTeste.map((value, index) => (
              <Grid key={index} item>
                <ProductItem item={value} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  } else {
    //Recebe uma lista de objetos do banco e passa ao componente produto
    return (
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={6}>
            <p>Carregando Produtos</p>
          </Grid>
        </Grid>
      </Grid>
    );
  }

}
