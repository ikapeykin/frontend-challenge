import React, {useState} from "react";
import {Status, statusValues} from "../model/status";
import {pathEmployer} from "../api/mocked";
import "./statusBar.css";
import {User, UserModel, UpdateUser} from "../model/user";


interface StatusBarElementProps {
    user: User;
    targetStatus: string;
}

const updateUserStatus = (user: User, targetStatus: string) => {
    if (Status[user.status] !== targetStatus) {
        const userData: UpdateUser = {
            id: user.id,
            status: Status[targetStatus as keyof typeof Status],
        }
        pathEmployer(userData);
    }
}

const StatusBarElement = ({user, targetStatus}: StatusBarElementProps) => {
    return  (
        <li>
            <a
                href="#"
                className={Status[user.status] === targetStatus ? "active" : ""}
                onClick={() => updateUserStatus(user, targetStatus)}
            >{targetStatus}</a>
        </li>
    )
}


export const StatusBar = ({user}: UserModel) => {
    const [userData, setUser] = useState<User>(user);

    return (
        <div className="breadcrumb__wrapper">
            <ul className="breadcrumb">
                {
                    statusValues.map(value => <StatusBarElement user={userData} targetStatus={value} />)
                }
            </ul>
        </div>
    )
}