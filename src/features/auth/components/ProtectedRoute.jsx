import React from 'react'
import useAuth from '../../../hooks/use-auth'
import { Navigate } from 'react-router-dom'
import CircleContextProvider from '../../circle/context/CircleContext'
import useMain from '../../../hooks/use-main'

export default function ProtectedRoute({ children }) {
    const { authUser } = useAuth()
    const { circleData } = useMain()

    // return circleData ? <Navigate to={`/circle/${circleData.circleId}/members`} /> :
    return authUser ? <CircleContextProvider>{children}</CircleContextProvider> : <Navigate to="/" />
}