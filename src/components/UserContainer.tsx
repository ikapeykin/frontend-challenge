import React, { useEffect, useState } from 'react';
import { User } from '../model/user';
import UserItem from './UserItem';
import { getEmployees } from '../api/mocked';

const UserContainer = () => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const fetched: User[] = getEmployees();
    setData(fetched);
  }, []);

  return (
    <>
      {
        data.map((user) => (
          <UserItem
            key={user.id}
            user={user}
          />
        ))
      }
    </>
  );
};

export default UserContainer;
