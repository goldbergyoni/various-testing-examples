import React from 'react'

function UsersList() {
  const [usersList] = React.useState([{id:1 , name: 'Yoni Goldberg'} , {id:2 , name: 'John Doe'}]);
  return (
    <div>
        <h1>users</h1>
        <ul>
        {usersList.map((item, index) => (
            <li key={item.id} data-testid='user'>{item.name}</li>
          ))}
        </ul>
    </div>
  )
}

export default UsersList;