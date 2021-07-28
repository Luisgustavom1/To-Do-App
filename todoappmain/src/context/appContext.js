import { createContext } from 'react';

const AppContext = createContext({
    tasks: null,
    setToTasks: () => {},
});

export default AppContext