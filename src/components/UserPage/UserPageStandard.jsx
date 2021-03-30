import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GrantApplicationForm from '../GrantApplicationForm/GrantApplicationForm';
import OrderStatus from '../OrderStatus/OrderStatus.jsx';



function UserPage (props) {
  
  const user = useSelector(state => state);
  
  // grabbing the application info from the redux store
  // const app = useSelector((store) => store.application);

  // useEffect
  // useEffect(() => {
  //   dispatch({ type: 'FETCH_APPLICATION' });
  //   }, [dispatch]
  // );

  return (
    <div>

      {
        user ?
          <OrderStatus order={order} /> :
          <GrantApplicationForm />
      }
    </div>
  );
  
}

// this allows us to use <App /> in index.js
export default UserPage;