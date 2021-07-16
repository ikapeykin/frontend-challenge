import React from "react";
import {StatusBarElement} from "./StatusBarElement";
import {Status, statusValues} from "../model/status";
import "./statusBar.css";

interface StatusBarProps {
    userStatus: Status;
    onChangeStatus: ((newStatus: Status) => void);
}

export const StatusBar = ({userStatus, onChangeStatus}: StatusBarProps) => {

    return (
        <div className="breadcrumb__wrapper">
            <ul className="breadcrumb">
                {
                    statusValues.map(
                        value => <StatusBarElement
                            userStatus={userStatus}
                            targetStatus={Status[value as keyof typeof Status]}
                            onChangeStatus={onChangeStatus}
                        />
                    )
                }
            </ul>
        </div>
    )
}