import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    paddingTop: "30px",
    justifyContent: "center"
  },
  NotFound404: {
    fontSize: "50px"
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();
  
  return (
    <Grid container className={classes.root} >
      <Grid >
        <h1 className={classes.NotFound404}>404 Page</h1>
      </Grid>
    </Grid>
  );
}
