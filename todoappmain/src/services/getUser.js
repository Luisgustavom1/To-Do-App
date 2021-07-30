import React from "react"

export default function getUsers(){
    const token = process.env.REACT_APP_TOKEN
    let datasUsers = []
    fetch('https://graphql.datocms.com/',
        {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
            query: '{ allUsers { usuario, password, createSlug } }'
            })
        }).then(res => {
            console.log(res.json())
            return res.json()
        })
        .then(datas => {
            datasUsers = datas.data.allUsers
            console.log(datasUsers)
        })
        .catch(err => console.log(err))
        return datasUsers
}
