import React, {useState} from "react";
import {User} from "../model/user";
import {Avatar} from "@material-ui/core";
import {StatusBar} from "./statusBar";
import "./userContainer.css";
import {pathEmployer} from "../api/mocked";

interface UserContainerProps {
    user: User;
}

export const UserContainer = ({user}: UserContainerProps) => {
    const [userData, setUser] = useState<User>(user);

    return (
        <div className="userContainer">
            <div className="userContainerElement">
                <Avatar className="userContainerAvatar" alt={user.name} src={user.avatar_url}/>
                <h4>{user.name}</h4>
            </div>
            <div className="userContainerElement">
                <StatusBar
                    userStatus={userData.status}
                    onChangeStatus={(newData) => {
                        let data = {...userData, ...{status: newData}}
                        setUser(data)
                        pathEmployer(data);
                    }}
                />
            </div>
        </div>
    )
}