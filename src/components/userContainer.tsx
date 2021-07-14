import React from "react";
import {UserModel} from "../model/user";
import {Avatar} from "@material-ui/core";
import {StatusBar} from "./statusBar";
import "./userContainer.css";


export const UserContainer = ({user}: UserModel) => {
    return (
        <div className="userContainer">
            <h4 className="userContainerElement">{user.name}</h4>
            <Avatar className="userContainerElement" alt={user.name} src={user.avatar_url}/>
            <StatusBar user={user}/>
        </div>
    )
}