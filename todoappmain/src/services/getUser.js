import React from "react"

export default class GetUser extends React.Component{
    constructor(props, TOKEN){
        super(props)
        this.token = TOKEN;
        this.state = {
            datasUsers: ''
        }
    }

    getUsers(){
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
                }, () => { console.log(this.state.datasUsers) })
            })
            .catch(err => console.log(err))
    }
}
