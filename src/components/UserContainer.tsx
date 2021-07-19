import React, { useEffect, useState } from 'react';
import { User } from '../model/user';
import UserItem from './UserItem';
import { getEmployees } from '../api/mocked';
import './userContainer.css';

const UserContainer = () => {
  const [data, setData] = useState<User[]>([]);

  const onChangeUser = (user: User) => {
    const userIndex: number = data.findIndex((userData) => userData.id === user.id);
    const updatedUserData = [...data];
    updatedUserData[userIndex] = { ...updatedUserData[userIndex], ...user };
    setData(updatedUserData);
  };

  useEffect(() => {
    const fetched: User[] = getEmployees();
    setData(fetched);
  }, []);

  return (
    <div>
      {
        data.map((user) => (
          <UserItem
            user={user}
            onChangeUser={onChangeUser}
          />
        ))
      }
    </div>
  );
};

export default UserContainer;
