import { createContext, useState, useEffect, useContext } from 'react'
import usersService from '../services/users'

const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        usersService
        .getUserById(3)
        .then (data => {setUser(data)})
    },[])

    if (!user) return null;

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
        )
    }

    export const useUser = () => useContext(UserContext)
