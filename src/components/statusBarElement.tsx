import React from "react";
import {Status} from "../model/status";
import {User} from "../model/user";

interface StatusBarElementProps {
    userStatus: Status;
    targetStatus: Status;
    callback: ((userStatus: Status, targetStatus: Status) => void);
}

export const StatusBarElement = ({userStatus, targetStatus, callback}: StatusBarElementProps) => {
    return (
        <li>
            <a
                href="#"
                className={userStatus === targetStatus ? "active" : ""}
                onClick={() => callback({userStatus, targetStatus})}
            >{targetStatus}</a>
        </li>
    )
}