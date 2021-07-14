import React from "react";
import {Status} from "../model/status";
import "./statusBar.css";

interface StatusBarProps {
    status: Status
}

export const StatusBar = ({status}: StatusBarProps) => {
    console.log(Status[status]);

    return (
        <div>
            <ul className="breadcrumb">
                <li><a className={status === 0 ? "active" : ""} href="#1">ADDED</a></li>
                <li><a className={status === 1 ? "active" : ""} href="#2">INCHECK</a></li>
                <li><a className={status === 2 ? "active" : ""} href="#3">APPROVED</a></li>
                <li><a className={status === 3 ? "active" : ""} href="#4">ACTIVE</a></li>
                <li><a className={status === 4 ? "active" : ""} href="#5">INACTIVE</a></li>
            </ul>
        </div>
    )
}