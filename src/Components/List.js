import React from "react";


const users = [
    {id: 1, name: "Muhammad Islam"},
    {id: 2, name: "Muhammad Muzammal"},
    {id: 3, name: "Muhammad Hamza"},
    {id: 4, name: "Muhammad Talha"}
];

class List extends React.Component{
    render(){
        const renderedUsers = users.map(({id, name})=>{
            return <li key={id}>{name}</li>
        })
        return(
            <ul>
                {renderedUsers}
            </ul>
        )
    }
}

export default List;