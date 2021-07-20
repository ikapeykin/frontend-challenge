import React, { useState, memo } from 'react';
import { User } from '../model/user';
import { Status } from '../model/status';
import StatusBar from './StatusBar';
import { pathEmployer } from '../api/mocked';
import './userItem.css';

interface UserItemProps {
  user: User;
}

const UserItem = ({ user }: UserItemProps) => {
  const [userData, setUser] = useState<User>(user);

  const onChangeStatus = (status: Status) => {
    const data = { ...userData, status };
    setUser(data);
    pathEmployer(data);
  };

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
            onChangeStatus={onChangeStatus}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(UserItem);
