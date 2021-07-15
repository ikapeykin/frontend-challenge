import React from "react";
import {Status} from "../model/status";

interface StatusBarElementProps {
    userStatus: Status;
    targetStatus: Status;
    onChangeStatus: ((newStatus: Status) => void);
}

export const StatusBarElement = ({userStatus, targetStatus, onChangeStatus}: StatusBarElementProps) => {
    return (
        <li>
            <a
                href="#"
                className={userStatus === targetStatus ? "active" : ""}
                onClick={() => onChangeStatus(targetStatus)}
            >{Status[targetStatus]}</a>
        </li>
    )
}