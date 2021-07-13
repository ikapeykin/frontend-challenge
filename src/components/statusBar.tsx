import React from "react";
import {Status} from "../model/status";
import "./statusBar.css";

interface StatusBarProps {
    status: Status
}

export const StatusBar = ({status}: StatusBarProps) => {
    return (
        <div className="statusBar">
            <ul className="statusBarList">
                <li className="statusBarElement firstBarElement">ADDED</li>
                <li className="statusBarElement secondBarElement">IN-CHECK</li>
                <li className="statusBarElement thirdBarElement">APPROVED</li>
                <li className="statusBarElement fourthBarElement">ACTIVE</li>
                <li className="statusBarElement lastBarElement">INACTIVE</li>
            </ul>
        </div>
    )
}