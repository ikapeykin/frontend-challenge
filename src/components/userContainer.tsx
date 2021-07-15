import React, {useState} from "react";
import {UpdateUser, User, UserModel} from "../model/user";
import {Avatar} from "@material-ui/core";
import {StatusBar} from "./statusBar";
import "./userContainer.css";
import {Status} from "../model/status";
import {pathEmployer} from "../api/mocked";

interface UpdateUserStatusProps {
    userId: number;
    userStatus: Status;
    targetStatus: Status;
    callback: ((user: User) => void);
}

export const UserContainer = ({user}: UserModel) => {
    const [userData, setUser] = useState<User>(user);

    const updateUserStatus = ({userId, userStatus, targetStatus, callback}: UpdateUserStatusProps) => {
        if (userStatus !== targetStatus) {
            const userData: UpdateUser = {
                id: userId,
                status: targetStatus,
            }
            user.status = userData.status;
            pathEmployer(userData);
            callback(user);
        }
    }

    return (
        <div className="userContainer">
            <h4 className="userContainerElement">{user.name}</h4>
            <Avatar className="userContainerElement" alt={user.name} src={user.avatar_url}/>
            <StatusBar userId={userData.id} userStatus={userData.status}/>
        </div>
    )
}