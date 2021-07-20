import React from 'react';
import { Status } from '../model/status';

interface StatusBarElementProps {
  userStatus: Status;
  targetStatus: Status;
  onChangeStatus: ((newStatus: Status) => void);
}

const StatusBarElement = ({ userStatus, targetStatus, onChangeStatus }: StatusBarElementProps) => (
  <li>
    <a
      href="/#"
      className={userStatus === targetStatus ? 'active' : ''}
      onClick={() => onChangeStatus(targetStatus)}
    >
      {Status[targetStatus]}
    </a>
  </li>
);

export default StatusBarElement;
