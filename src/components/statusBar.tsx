import React, {useState} from "react";
import {Status, statusValues} from "../model/status";
import {pathEmployer} from "../api/mocked";
import "./statusBar.css";
import {UpdateUser, User, UserModel} from "../model/user";

interface StatusBarElementProps {
    user: User;
    targetStatus: string;
    callback: ((user: User) => void);
}


export const StatusBar = ({user}: UserModel) => {
    const [userData, setUser] = useState<User>(user);
    const [count, setClick] = useState<number>(0);

    const updateUserStatus = ({user, targetStatus, callback}: StatusBarElementProps) => {
        if (Status[user.status] !== targetStatus) {
            const userData: UpdateUser = {
                id: user.id,
                status: Status[targetStatus as keyof typeof Status],
            }
            console.log(user);
            user.status = userData.status;
            pathEmployer(userData);
            callback(user);
            console.log(user);
        }
    }


    const StatusBarElement = ({user, targetStatus, callback}: StatusBarElementProps) => {
        return (
            <li>
                <a
                    href="#"
                    className={Status[user.status] === targetStatus ? "active" : ""}
                    onClick={() => updateUserStatus({user, targetStatus, callback})}
                >{targetStatus}</a>
            </li>
        )
    }

    return (
        <div className="breadcrumb__wrapper">
            <ul className="breadcrumb">
                {
                    statusValues.map(
                        value => <StatusBarElement user={userData} targetStatus={value} callback={setUser}/>
                    )
                }
            </ul>
            <button onClick={() => setClick(count + 1)}>{count}</button>
        </div>
    )
}