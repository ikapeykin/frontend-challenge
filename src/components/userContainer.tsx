import React, {useState} from "react";
import {User} from "../model/user";
import {StatusBar} from "./statusBar";
import {pathEmployer} from "../api/mocked";
import "./userContainer.css";


interface UserContainerProps {
    user: User;
}

export const UserContainer = ({user}: UserContainerProps) => {
    const [userData, setUser] = useState<User>(user);

    return (
        <div className="userContainerWrapper">
            <div className="userContainer">
                <div className="userContainerElement">
                    <img className="userContainerAvatar" alt={user.name} src={user.avatar_url}/>
                    <h4>{user.name}</h4>
                </div>
                <div className="userContainerElement">
                    <StatusBar
                        userStatus={userData.status}
                        onChangeStatus={(newData) => {
                            const data = {...userData, ...{status: newData}}
                            setUser(data)
                            pathEmployer(data);
                        }}
                    />
                </div>
            </div>
        </div>
    )
}