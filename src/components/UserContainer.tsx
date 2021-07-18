import React, { useEffect, useState } from 'react';
import { User } from '../model/user';
import UserItem from './UserItem';
import { getEmployees } from '../api/mocked';
import './userContainer.css';

const UserContainer = () => {
  const [data, setData] = useState<User[]>([]);

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
            onChangeUser={(newData) => {
              const userIndex: number = data.findIndex((userData) => userData.id === user.id);
              const updateUserData = [...data];
              updateUserData[userIndex] = { ...updateUserData[userIndex], ...newData };
              setData(updateUserData);
            }}
          />
        ))
      }
    </div>
  );
};

export default UserContainer;
