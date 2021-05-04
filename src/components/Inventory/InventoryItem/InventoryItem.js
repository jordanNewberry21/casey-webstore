import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// material-ui
import useStyles from './styles';
// import { Card, CardContent, CardActions, Button, CardMedia, Typography } from '@material-ui/core';
import { Card, Button } from 'react-bootstrap';
import Dialog from '../Dialog/Dialog';

function InventoryItem (props) {
    // hooks
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const item = props.item;
    const user = props.user;
    const [cartButton, toggleCartButton] = useState(true);
    
    const addToCart = () => {
        toggleCartButton(!cartButton);
        dispatch({ type: 'ADD', payload: item });
    }
    
    const removeFromCart = () => {
        toggleCartButton(!cartButton);
        dispatch({ type: 'REMOVE', payload: item.id });
    }
    
    const goToDetails = () => {
        history.push('/details');
        dispatch({ type: 'SET_DETAILS', payload: item });
    }
    
    return (
        // <Card className={classes.card} style={{ flex: 1 }}>
        //         <CardMedia style={{ cursor: 'pointer' }} onClick={() => goToDetails()}
        //           className={classes.media} image={item.image} title={item.name} />
        //         <div className={classes.overlay}>
        //             <Typography variant="h6">{item.name}</Typography>
        //         </div>
        //         <CardContent>
        //             <CardActions className={classes.cardActions}>
        //             <Typography variant="body1" color="textSecondary" className={classes.details}>${item.price}</Typography>
        //             {/* this ternary is checking if the user is an admin, if so
        //             this component will render a different set of buttons */}
        //             {user.admin ? 
        //             <>
        //               <Button variant="outlined" style={{color: 'slateblue', backgroundColor: 'aliceblue'}} size="small" onClick={() => dispatch({ type: 'DELETE', payload: item.id })}>
        //                 Remove 
        //               </Button>
        //               <Button variant="outlined" size="small" style={{color: 'slateblue', backgroundColor: 'aliceblue'}} onClick={() => dispatch({ type: 'SET_FEATURE', payload: item.id })} >
        //                 Feature Item
        //               </Button>
        //               <Dialog size="small" itemToUpdate={item} /> 
        //             </> : 
        //             <>
        //             {/* this second ternary, nested in the first one is checking the cart button state
        //             essentially toggling this button between Add to Cart and Remove */}
        //               {cartButton ? 
        //                 <Button fullWidth variant="outlined" style={{color: 'slateblue', backgroundColor: 'aliceblue'}} size="small" onClick={() => addToCart()}>Add to Cart</Button> 
        //                 : 
        //                 <Button fullWidth variant="outlined" style={{color: 'aliceblue', backgroundColor: 'slateblue'}} size="small" onClick={() => removeFromCart()}>Remove</Button>
        //                 }
        //             </>
        //             }
        //             </CardActions>
        //         </CardContent>
        //     </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.image} style={{ cursor: 'pointer' }} onClick={() => goToDetails()} />
        <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          ${item.price}
        </Card.Text>
        {user.admin ? 
        <>
        <Button variant="outlined" style={{color: 'slateblue', backgroundColor: 'aliceblue'}} size="small" onClick={() => dispatch({ type: 'DELETE', payload: item.id })}>
          Remove 
        </Button>
        <Button variant="outlined" size="small" style={{color: 'slateblue', backgroundColor: 'aliceblue'}} onClick={() => dispatch({ type: 'SET_FEATURE', payload: item.id })} >
          Feature Item
        </Button>
        <Dialog size="small" itemToUpdate={item} /> 
        </> : 
        <>
        {/* this second ternary, nested in the first one is checking the cart button state
        essentially toggling this button between Add to Cart and Remove */}
        {cartButton ? 
          <Button style={{color: 'aliceblue', backgroundColor: 'slateblue'}} onClick={() => addToCart()}>Add to Cart</Button> 
          : 
          <Button style={{color: 'slateblue', backgroundColor: 'aliceblue'}} size="small" onClick={() => removeFromCart()}>Remove</Button>
          }
        </>
        }
        </Card.Body>
      </Card>
      );
    }
    
export default InventoryItem;