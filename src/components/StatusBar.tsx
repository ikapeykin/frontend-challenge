import React from 'react';
import StatusBarElement from './StatusBarElement';
import { Status, statusValues } from '../model/status';
import './statusBar.css';

interface StatusBarProps {
  userStatus: Status;
  onChangeStatus: ((newStatus: Status) => void);
}

const StatusBar = ({ userStatus, onChangeStatus }: StatusBarProps) => (
  <div className="breadcrumb__wrapper">
    <ul className="breadcrumb">
      {
        statusValues.map(
          (value) => (
            <StatusBarElement
              key={value}
              userStatus={userStatus}
              targetStatus={Status[value as keyof typeof Status]}
              onChangeStatus={onChangeStatus}
            />
          ),
        )
      }
    </ul>
  </div>
);

export default StatusBar;
