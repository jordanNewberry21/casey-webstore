import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import Dialog from '../Dialog/Dialog';
import './InventoryItem.css';

function InventoryItem (props) {
    // hooks
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
      <Card style={{ width: '18rem', height: "relative" }} >
        <Card.Img variant="top" src={item.image} style={{ cursor: 'pointer' }} onClick={() => goToDetails()} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            ${item.price}
          </Card.Text>
        {user.admin ? 
        <>
        <Button style={{color: 'slateblue', backgroundColor: 'aliceblue'}} onClick={() => dispatch({ type: 'DELETE', payload: item.id })}>
          Remove 
        </Button>
        <Button style={{color: 'slateblue', backgroundColor: 'aliceblue'}} onClick={() => dispatch({ type: 'SET_FEATURE', payload: item.id })} >
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