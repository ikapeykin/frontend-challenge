import React, { useState } from 'react';
import { User } from '../model/user';
import StatusBar from './StatusBar';
import { pathEmployer } from '../api/mocked';
import './userItem.css';

interface UserItemProps {
  user: User;
}

const UserItem = ({ user }: UserItemProps) => {
  const [userData, setUser] = useState<User>(user);

  return (
    <div className="user__item__wrapper">
      <div className="user__item">
        <div className="user__item__element">
          <img className="user__item__avatar" alt={user.name} src={user.avatar_url} />
          <h4>{user.name}</h4>
        </div>
        <div className="user__item__element">
          <StatusBar
            userStatus={userData.status}
            onChangeStatus={(newData) => {
              const data = { ...userData, ...{ status: newData } };
              setUser(data);
              pathEmployer(data);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default UserItem;
