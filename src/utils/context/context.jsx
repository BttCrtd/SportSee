import { createContext, useState } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext()

export function UserProvider({ children }) {
  const [userId, setUserId] = useState('12')

  const toggleUserId = () => {
    setUserId((v) => (v === '12' ? '18' : '12'))
  }

  return (
    <UserContext.Provider value={{ userId, toggleUserId }}>
      {children}
    </UserContext.Provider>
  )
}
