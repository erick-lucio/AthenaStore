import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

import Product from "../models/product";

import noImg from "../assets/imgs/noImg.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "250px",
  },
  gridItens: {
    border: "1px solid black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  control: {
    padding: theme.spacing(2),
  },
  productImg: {
    height: "20%",
    width: "100%",
    borderRadius : "0%",
  },
  TextItem: {
    width: "100%",
    marginLeft: "15%",
    marginTop: "2%",
  },
  TittleItemText: {
    fontSize: "1.8rem",
  },
  PriceItemText: {
    fontWeight: "bolder",
    width: "100%",
    marginLeft: "15%",    
    marginTop: "2%",
  },
  buyButton: {
    marginLeft: "55%",
    marginBottom: "1%",        
    marginTop: "10%",
  },
}));

export default function ProductItem(props: any) {
  const classes = useStyles();
  //Pra cada item recebido cria um objeto Produto
  var produto: Product = new Product(
    props.item.nome,
    props.item.preco,
    props.item.quantidadeStock,
    props.item.quantidade,
    props.item.imgUrl,
    props.item.categoria,
    props.item.observacao
  );

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid
          container
          justify="center"
          className={classes.gridItens}
        >
          <Avatar 
            src={noImg}
            className={classes.productImg}
          />
          <br/>
          <p className={classes.TittleItemText}>{produto.nome}</p>
          <br/>
          <p className={classes.PriceItemText}>US$ {produto.preco}</p>  
          <br/>
          <p className={classes.TextItem}>{produto.observacao}</p>
          <br/>
          <Button variant="contained" color="secondary" className={classes.buyButton}>Buy</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
