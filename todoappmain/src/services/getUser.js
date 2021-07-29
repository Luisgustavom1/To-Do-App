import React from "react"

export default class GetUser{
    constructor(TOKEN){
        this.token = TOKEN;
        this.state = {datasUsers: ''}
    }

    componentDidUpdate(){
        fetch('https://graphql.datocms.com/',
    {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.token}`
        },
        body: JSON.stringify({
        query: '{ allUsers { usuario, password, createSlug } }'
        })
    }).then(res => res.json())
        .then(datas => {
            this.setState({
                datasUsers: datas.data.allUsers
            })
        })
        .catch(err => console.log(err))
    }
}
