import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import ProductItem from "../components/produtoItem.jsx"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "20px"
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
  const classes = useStyles();
  var produtosTeste = [
    {nome: "Produto", 
    preco: 12.34, 
    quantidadeStock: 79, 
    quantidade: 0, 
    imgUrl: "/img/aiiij44"
  },
  {nome: "Produto", 
  preco: 12.34, 
  quantidadeStock: 79, 
  quantidade: 0, 
  imgUrl: "/img/aiiij44"
  },
  {nome: "Produto", 
  preco: 12.34, 
  quantidadeStock: 79, 
  quantidade: 0, 
  imgUrl: "/img/aiiij44"
  },
  {nome: "Produto", 
  preco: 12.34, 
  quantidadeStock: 79, 
  quantidade: 0, 
  imgUrl: "/img/aiiij44"
  },
  {nome: "Produto", 
  preco: 12.34, 
  quantidadeStock: 79, 
  quantidade: 0, 
  imgUrl: "/img/aiiij44"
  },
  {nome: "Produto", 
  preco: 12.34, 
  quantidadeStock: 79, 
  quantidade: 0, 
  imgUrl: "/img/aiiij44"
  },
  {nome: "Produto", 
  preco: 12.34, 
  quantidadeStock: 79, 
  quantidade: 0, 
  imgUrl: "/img/aiiij44"
  },
  {nome: "Produto", 
  preco: 12.34, 
  quantidadeStock: 79, 
  quantidade: 0, 
  imgUrl: "/img/aiiij44"
  }
  ]
  //Recebe uma lista de objetos do banco e passa ao componente produto
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={5}>
          {produtosTeste.map((value,index) => (
            <Grid key={index} item>
              <ProductItem item={value}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
