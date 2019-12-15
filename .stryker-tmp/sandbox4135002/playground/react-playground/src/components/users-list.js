import React from 'react'

function UsersList(props) {
  return (
    <div>
        <h1>users</h1>
        <ul>
        {props.users.map((item, index) => {
            if(item.vip){
                return  (
                    <li key={item.id} data-testid='user'>{item.name}</li>
                  )
            }
           })}
        </ul>
    </div>
  )
        };

export default UsersList;