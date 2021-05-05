import React from 'react';
import { useSelector } from 'react-redux';
import AddItemForm from '../AddItemForm/AddItemForm';


// Admin home page
function AdminHome () {
  // hooks
  const user = useSelector(state => state.user)

    return (
      <div>
        <h1 id="welcome">Welcome, {user.first_name} {user.last_name}!</h1>
        <div style={{ margin: "10%", height: "100%", }}>
          <AddItemForm />
        </div>
      </div>
    );
  
}

export default AdminHome;
