import React from 'react';
import {IUserInterface} from "../interfaces/Userinterfaces";

interface IUser {
    user: IUserInterface
}

const User = ({user}: IUser) => {
    return (
        <div>
            <h4>{user.name}</h4>
            <p>{user.email}</p>
        </div>
    );
};

export default User;