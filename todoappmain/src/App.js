import './styles/global.css'
import './styles/addToDo.css'
import './styles/listToDo.css'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import AddToDo from './components/AddToDo'
import Login from './components/Login'

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path='/list' component={AddToDo}/>
          <Route path='/' component={Login}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
