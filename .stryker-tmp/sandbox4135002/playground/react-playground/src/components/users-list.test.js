import React from 'react';
import { cleanup, render } from "@testing-library/react";
import UsersList from "./users-list";

afterEach(cleanup);
test('When flagging to show only VIP, should display only VIP members', () => {
  //Arrange
  const allUsers = [{id:1 , name: 'Yoni Goldberg', vip: false}, 
   {id:2 , name: 'John Doe', vip: true}];

  //Act
  const {getAllByTestId} = render(<UsersList users={allUsers} showOnlyVIP={true}/>);

  //Assert
  // Extract the data from the UI, query using non-graphical selectors
  const allRenderedUsers = getAllByTestId('user').map(uiElement => uiElement.textContent);
  const allRealVIPUsers = allUsers.filter((user) => user.vip).map((user) => user.name);
  //Now comparing pure input data with pure output data
  expect(allRenderedUsers).toEqual(allRealVIPUsers);
});

test('When flagging to show only VIP, should display only VIP members', () => {
  //Arrange
  const allUsers = [{id:1 , name: 'Yoni Goldberg', vip: false}, 
   {id:2 , name: 'John Doe', vip: true}];

  //Act
  const {getAllByTestId} = render(<UsersList users={allUsers} showOnlyVIP={true}/>);

  //Assert
  //Mix UI & data in assertion
  expect(getAllByTestId('user')).toEqual('[<li data-testid="user">John Doe</li>]');
});

