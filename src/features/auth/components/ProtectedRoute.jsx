import React from 'react'
import useAuth from '../../../hooks/use-auth'
import { Navigate } from 'react-router-dom'
import CircleContextProvider from '../../circle/context/CircleContext'

export default function ProtectedRoute({ children }) {
    const { authUser } = useAuth()
    return authUser ? <CircleContextProvider>{children}</CircleContextProvider> : <Navigate to="/" />
}