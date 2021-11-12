import React from 'react';
import { createUseStyles } from 'react-jss';

import Alert from '../Alert/Alert';
import CartSuccess from '../CartSuccess/CartSuccess';
// import Product from '../Product/Product';
import Navigation from '../Navigation/Navigation';

const useStyles = createUseStyles({
  wrapper: {
    padding: 20,
   }
});

function App() {
  const classes = useStyles();
  return(
    <div className={classes.wrapper}>
       {/* <Alert title='Items Not Added' type='error'>
         <div>Your items are out of stock.</div>
       </Alert>
       <CartSuccess /> */}
       {/* <Product /> */}
       <Navigation />
    </div>
  );  
}

export default App;
