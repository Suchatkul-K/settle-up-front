import React from 'react'
// import useAuth from '../../../hooks/use-auth'
import { Navigate } from 'react-router-dom'
import CircleContextProvider from '../../circle/context/CircleContext'
import useMain from '../../../hooks/use-main'

export default function ProtectCircle({ children }) {
    // const { authUser } = useAuth()
    const { circleData, circleId } = useMain()
    console.log(circleId)

    // return circleData ? <Navigate to={`/circle/${circleData.circleId}/members`} /> : <Navigate to="/home" />
    return circleId ? children : <Navigate to="/home" />
}