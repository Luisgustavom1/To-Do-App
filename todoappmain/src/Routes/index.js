import { Switch } from 'react-router-dom'

import AddToDo from '../components/AddToDo'
import Login from '../components/Login'
import MyRoute from './MyRoute'
export default function Routes(){
    return(
        <Switch>
          <MyRoute path='/list' component={AddToDo}/>
          <MyRoute path='/' exact component={Login}/>
        </Switch>
    )
}
