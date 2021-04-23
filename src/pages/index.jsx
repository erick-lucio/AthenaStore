import React, { useState, useEffect } from "react";
import { useSelector ,useDispatch,useStore} from "react-redux";
import {Box,Container } from '@material-ui/core';

const api = require('../services/api')


const MainPage = () => {


  return (
  <>  
    <Container 
      maxWidth="xl" 
      disableGutters="true"
      >      
      <Box >
        teste
      </Box>
    </Container>  
  </>
  );
};

export default MainPage;