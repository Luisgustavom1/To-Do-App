import { useState } from "react";
import AppContext from "./appContext";

export default function AppProvider({children}){
    const [tasks, setTasks] = useState([])
    function setToTasks(value){
        setTasks(value)
    }
    return(
        <AppContext.Provider value={{tasks, setToTasks}}>
            {children}
        </AppContext.Provider>
    )
}
