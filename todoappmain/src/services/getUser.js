export default class getUsers{
    constructor(token){
        this.token = token;
        this.datasUsers = [];
    }
    getDB(){
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
            this.datasUsers.push(...datas.data.allUsers)
            console.log(this.datasUsers.filter(x => x.usuario == 'luisao'))
        })
        .catch(err => console.log(err))
    }
    getUsers(){
        this.getDB()
    }
}
