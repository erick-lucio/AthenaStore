import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Product from '../models/product.js'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 250,
    width: 250,
  },
  gridItens: {
    paddingTop:"25px"
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function ProductItem(props) {
  const classes = useStyles();
  //Pra cada item recebido cria um objeto Produto
  var produto = new Product(props.item.nome, props.item.preco, props.item.quantidadeStock, props.item.quantidade, props.item.imgUrl)
  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={4} className={classes.gridItens}>
            {produto.nome}<br/>
            {produto.preco}<br/>
            {produto.quantidadeStock}<br/>
            {produto.quantidade}<br/>
            {produto.imgUrl}
        </Grid>
      </Grid>
    </Grid>
  );
}
