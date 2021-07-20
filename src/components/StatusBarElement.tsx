import React from 'react';
import { Status } from '../model/status';

interface StatusBarElementProps {
  userStatus: Status;
  targetStatus: Status;
  onChangeStatus: ((newStatus: Status) => void);
}

const StatusBarElement = ({ userStatus, targetStatus, onChangeStatus }: StatusBarElementProps) => {
  const onChangeStatusHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onChangeStatus(targetStatus);
  };

  return (
    <li>
      <a
        href="/#"
        className={userStatus === targetStatus ? 'active' : ''}
        onClick={(e) => onChangeStatusHandler(e)}
      >
        {Status[targetStatus]}
      </a>
    </li>
  );
};
export default StatusBarElement;
