import React, { useState } from 'react';

const Table = ({ users }) => {

    const renderTableHeader = (users) => {
        let header = Object.keys(users[0])
        return header.map((key, index) => {
            return
            <thead>
                <th key={index}>
                    {key}
                </th>
            </thead>
        });
    }

    const renderTableData = (users) => {
        return users.map((user) => {
            return (
                <tr key={user.id}>
                    <th scope="row">{user.id}</th>
                    <td>{user.First}</td>
                    <td>{user.Last}</td>
                    <td>{user.DisplayName}</td>
                    <td>{user.Username}</td>
                </tr>
            );
        });
    }

    return (
        <div className="table-responsive">
            <table className="table table-hover p-4 text-white">
                {renderTableHeader(users)}
                <tbody>
                    {renderTableData(users)}
                </tbody>
            </table>
        </div>

    )
}

export default Table;