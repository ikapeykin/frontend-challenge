import React, {useEffect, useState} from "react";
import {User} from "./model/user";
import {getEmployees} from "./api/mocked";
import {UserContainer} from "./components/UserContainer";
import "./App.css";

function App() {
    const [data, setData] = useState<User[]>([]);

    useEffect(() => {
        const fetched: User[] = getEmployees();
        setData(fetched);
    }, [])

    return (
        <div className="App">
            {data.map(user => <UserContainer user={user}/>)}
        </div>
    );
}

export default App;
