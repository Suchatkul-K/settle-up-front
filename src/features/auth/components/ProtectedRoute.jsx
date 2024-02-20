import React from 'react'
import useAuth from '../../../hooks/use-auth'
import { Navigate } from 'react-router-dom'
import CircleContextProvider from '../../circle/context/CircleContext'
import useMain from '../../../hooks/use-main'

export default function ProtectedRoute({ children }) {
    const { authUser } = useAuth()
    const { circleId } = useMain()

    // console.log(authUser)
    // console.log(circleId)

//     return circleId ? <CircleContextProvider>{children}</CircleContextProvider> :
//    authUser ? <CircleContextProvider>{children}</CircleContextProvider> : <Navigate to="/" />
    return circleId ? children :
    authUser ? children : <Navigate to="/" />

    // return authUser? children : <Navigate to="/" />
}
{/* <Navigate to={`/circle/${circleData.id}/`} /> */}