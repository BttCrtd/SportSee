import { useContext } from 'react'
import { UserContext } from './context/context'

export const useUser = () => useContext(UserContext)
