import { useState } from "react";
import AppContext from "./appContext";

export default function AppProvider({children}){
    const [tasks, setTasks] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    function setToTasks(value){
        setTasks(value)
    }
    function setToIsLoggedIn(value){
        setIsLoggedIn(value)
    }
    return(
        <AppContext.Provider value={{tasks, setToTasks, isLoggedIn, setToIsLoggedIn}}>
            {children}
        </AppContext.Provider>
    )
}
