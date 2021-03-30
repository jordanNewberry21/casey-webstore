import React from 'react';
import { useSelector } from 'react-redux';
import AdminHome from '../AdminHome/AdminHome';
import UserPageStandard from './UserPageStandard';



function UserPage (props) {
    
  // grabbing the application info from the redux store
  const user = useSelector((store) => store.user);

  return (
    <div>
      {
        user.admin ?
        <AdminHome /> :
        <UserPageStandard />
      }
    </div>
  );
  
}

export default UserPage;
