import React, {useState} from "react";
import {StatusBarElement} from "./statusBarElement";
import {Status, statusValues} from "../model/status";
import "./statusBar.css";

interface StatusBarProps {
    userId: number;
    userStatus: Status;
    updateUserCallback: (() => void);
    setUserCallback: (() => void);
}

export const StatusBar = ({userStatus}: StatusBarProps) => {

    return (
        <div className="breadcrumb__wrapper">
            <ul className="breadcrumb">
                {
                    statusValues.map(
                        value => <StatusBarElement
                            userStatus={userStatus}
                            targetStatus={Status[value as keyof typeof Status]}
                            callback={setUser}
                        />
                    )
                }
            </ul>
        </div>
    )
}