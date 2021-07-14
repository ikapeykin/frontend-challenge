import React from "react";
import {User} from "../model/user";
import {Avatar} from "@material-ui/core";
import {StatusBar} from "./statusBar";


export const UserContainer = ({name, status, avatar_url}: User) => {
    return (
        <div className="userContainer">
            <Avatar className="userContainerElement" alt={name} src={avatar_url}/>
            <h3 className="userContainerElement">{name}</h3>
            <StatusBar status={status}/>
        </div>
    )
}