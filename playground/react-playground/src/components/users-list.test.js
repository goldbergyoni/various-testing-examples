import React from 'react';
import { cleanup, render } from "@testing-library/react";
import UsersList from "./users-list";

afterEach(cleanup);
test('When flagging to show only VIP, should display only VIP members', () => {
  //Arrange
  const allUsers = [{id:1 , name: 'Yoni Goldberg'} , {id:2 , name: 'John Doe'}];

  //Act
  const {getAllByTestId} = render(<UsersList users={allUsers}/>);
  const allRenderedUsers = getAllByTestId('user').map(li => li.textContent);
  const allRealVIPUsers = allUsers.map((aUser) => aUser.name);

  //Assert
  expect(allRenderedUsers).toEqual(allRealVIPUsers);
});