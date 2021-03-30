import React from 'react';
import { useSelector } from 'react-redux';
import OrderStatus from '../OrderStatus/OrderStatus';
import Inventory from '../Inventory/Inventory';



function UserPageStandard (props) {
  
  const user = useSelector(state => state);
  
  // grabbing the application info from the redux store
  // const app = useSelector((store) => store.application);

  // useEffect
  // useEffect(() => {
  //   dispatch({ type: 'FETCH_APPLICATION' });
  //   }, [dispatch]
  // );

  const order = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>

      {
        user ?
          <OrderStatus order={order} /> :
          <Inventory />
      }
    </div>
  );
  
}

// this allows us to use <App /> in index.js
export default UserPageStandard;