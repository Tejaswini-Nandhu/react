import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MockApiComponent = () => {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    axios.get('https://mkboru2zwb.execute-api.us-east-1.amazonaws.com/dev/react-test-api').then((response)=> setUsers(response.data.users)).catch((error)=>console.error('Error fetching data:',error));
  }, []);
  console.log("test output of users",users);
  return(
    <div>
      <h1>Mock API users</h1>
      <ul>
        {users.map((user)=> (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MockApiComponent;