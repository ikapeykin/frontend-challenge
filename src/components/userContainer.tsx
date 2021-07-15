import React, {useState} from "react";
import {UpdateUser, User} from "../model/user";
import {Avatar} from "@material-ui/core";
import {StatusBar} from "./statusBar";
import "./userContainer.css";
import {pathEmployer} from "../api/mocked";

// interface UpdateUserStatusProps {
//     userId: number;
//     userStatus: Status;
//     targetStatus: Status;
//     callback: ((user: User) => void);
// }

// const updateUserStatus = ({userId, userStatus, targetStatus, callback}: UpdateUserStatusProps) => {
//     if (userStatus !== targetStatus) {
//         const userData: UpdateUser = {
//             id: userId,
//             status: targetStatus,
//         }
//         user.status = userData.status;
//         pathEmployer(userData);
//         callback(user);
//     }
// }

interface UserContainerProps {
    user: User;
}

export const UserContainer = ({user}: UserContainerProps) => {
    const [userData, setUser] = useState<User>(user);

    return (
        <div className="userContainer">
            <h4 className="userContainerElement">{user.name}</h4>
            <Avatar className="userContainerElement" alt={user.name} src={user.avatar_url}/>
            <StatusBar
                userStatus={userData.status}
                onChangeStatus={(newData) => {
                    let data = {...userData, ...{status: newData}}
                    setUser(data)
                }}
            />
        </div>
    )
}