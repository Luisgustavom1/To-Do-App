import './styles/global.css'
import './styles/addToDo.css'
import './styles/listToDo.css'

import AddToDo from './components/AddToDo'
import ListToDo from './components/listToDo'

function App() {
  return (
    <main>
      <AddToDo/>
      <ListToDo/>
    </main>
  );
}

export default App;
