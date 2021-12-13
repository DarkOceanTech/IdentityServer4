import React, { useState } from 'react';
import Table from './Table.js';

const ActiveUsers = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            First: "User1FirstName",
            Last: 'User1FirstName',
            DisplayName: 'User1DisplayName',
            Username: 'User1Username'
        },
        {
            id: 2,
            First: "User2FirstName",
            Last: 'User2FirstName',
            DisplayName: 'User2DisplayName',
            Username: 'User2Username'
        }
    ]);

    return (
        <div className="w-100 px-4 text-white">
            <h1 className="">Active Users</h1>
            <div className="d-flex justify-content-between text-white my-5">
                <div>Add User</div>
                <div>User Template</div>
                <div>Add Multiple Users</div>
            </div>
            <Table users={users} />
        </div>
    )
}

export default ActiveUsers;