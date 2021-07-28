import './styles/global.css'
import './styles/addToDo.css'
import './styles/listToDo.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Routes from './Routes'
import 'react-toastify/dist/ReactToastify.css'
import AppProvider from './context/appProvider'

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ToastContainer autoClose={2000} className='toast-container'/>
        <Routes/>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
