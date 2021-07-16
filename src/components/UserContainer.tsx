import React, { useState } from 'react';
import { User } from '../model/user';
import StatusBar from './StatusBar';
import { pathEmployer } from '../api/mocked';
import './userContainer.css';

interface UserContainerProps {
  user: User;
}

const UserContainer = ({ user }: UserContainerProps) => {
  const [userData, setUser] = useState<User>(user);

  return (
    <div className="user__container__wrapper">
      <div className="user__container">
        <div className="user__container__element">
          <img className="user__container__avatar" alt={user.name} src={user.avatar_url} />
          <h4>{user.name}</h4>
        </div>
        <div className="user__container__element">
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

export default UserContainer;
