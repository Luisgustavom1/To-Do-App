import { createContext } from 'react';

const AppContext = createContext({
    tasks: null,
    setToTasks: () => {},
    isLoggedIn: false,
    setToIsLoggendIn: () => {}
});

export default AppContext