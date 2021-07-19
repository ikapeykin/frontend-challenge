import React, { useState } from 'react';
import { User } from '../model/user';
import { Status } from '../model/status';
import StatusBar from './StatusBar';
import { pathEmployer } from '../api/mocked';
import './userItem.css';

interface UserItemProps {
  user: User;
  onChangeUser: ((user: User) => void);
}

const UserItem = ({ user, onChangeUser }: UserItemProps) => {
  const [userData, setUser] = useState<User>(user);

  const onChangeStatus = (status: Status) => {
    const data = { ...userData, ...{ status } };
    setUser(data);
    onChangeUser(data);
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

export default UserItem;
