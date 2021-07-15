import {User} from "../model/user";
import {Status} from "../model/status";

export let usersMockData: User[] = [
    {id: 1, name: "Lev Joe", avatar_url: "https://cdn.fakercloud.com/avatars/nilshelmersson_128.jpg", status: Status.ADDED},
    {id: 2, name: "Dav Poe", avatar_url: "https://cdn.fakercloud.com/avatars/claudioguglieri_128.jpg", status: Status.INCHECK},
    {id: 3, name: "Alex Toe", avatar_url: "https://cdn.fakercloud.com/avatars/robinlayfield_128.jpg", status: Status.APPROVED},
    {id: 4, name: "Beer Poul", avatar_url: "https://cdn.fakercloud.com/avatars/creartinc_128.jpg", status: Status.ACTIVE},
    {id: 5, name: "Brent Mots", avatar_url: "https://cdn.fakercloud.com/avatars/cadikkara_128.jpg", status: Status.INACTIVE},
];

export const getEmployees = () => {
    return [...usersMockData];  // Protecting data from being overwritten by the GET method
}

export const pathEmployer = (user: User) => {
    const userIndex: number = usersMockData.findIndex(userMock => userMock.id === user.id);
    // Just join 2 objects
    usersMockData[userIndex] = {...usersMockData[userIndex], ...user};
}