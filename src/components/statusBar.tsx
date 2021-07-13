import React from "react";
import {Status} from "../model/status";
import "./statusBar.css";

interface StatusBarProps {
    status: Status
}

export const StatusBar = ({status}: StatusBarProps) => {
    console.log(Status[status]);

    return (
        <div className="statusBar">
            {/*<ul className="statusBarList">*/}
            {/*    <li className="statusBarElement firstStatusBarElement">ADDED</li>*/}
            {/*    <li className="statusBarElement middleStatusBarElement">IN-CHECK</li>*/}
            {/*    <li className="statusBarElement middleStatusBarElement">APPROVED</li>*/}
            {/*    <li className="statusBarElement middleStatusBarElement">ACTIVE</li>*/}
            {/*    <li className="statusBarElement lastStatusBarElement">INACTIVE</li>*/}
            {/*</ul>*/}
            <ul className="testStatus">
                <li className="testStatus">ADDED</li>
                <li className="testStatusNoGood">IN-CHECK</li>
                <li className="testStatusNoGood">APPROVED</li>
                <li className="testStatusNoGood">ACTIVE</li>
                <li className="testStatus">INACTIVE</li>
            </ul>
        </div>
    )
}