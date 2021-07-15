import React, {useEffect, useState} from 'react';
import {User} from "./model/user";
import {getEmployees} from "./api/mocked";
import {UserContainer} from "./components/userContainer";
import './App.css';

function App() {
    const [data, setData] = useState<User[]>([]);

    useEffect(() => {
        const fetched: User[] = getEmployees();
        setData(fetched);
    }, [])

    return (
        <div className="App">
            {data.map((user, ind) => <UserContainer updateUser={(newData) => {
                data[ind] = {...data[ind], ...newData}
                setData(data)
            }} user={user}/>)}
        </div>
    );
}

export default App;
