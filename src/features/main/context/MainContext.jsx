import React, { createContext, useEffect, useState } from 'react'
import { getCircleByCircleId, getCircleMemberByCircleId } from '../../../api/main'
import { useParams } from 'react-router-dom'
import { storeToken } from '../../../utils/local-storage'

export const MainContext = createContext()

export default function MainContextProvider({children}) {
    const [circleData,setCircleData] = useState(null)
    const [circleMember,setCircleMember] = useState(null)
    const { circleId } = useParams()
    // console.log( circleId ) 

    useEffect(()=>{
        if( circleId )
        {getCircleByCircleId(circleId)
            .then(res => {
                // console.log(res)
                storeToken(res.data.accessToken)
                setCircleData(res.data.circleData)
                // console.log(circleData)
            })
            .catch(err => console.log(err))
          
          getCircleMemberByCircleId(circleId)
            // .then(res => console.log(res.data.members))
            .then(res => setCircleMember(res.data.members))
            .catch(err => console.log(err))
          }

    },[circleId])
    
  return (
    <MainContext.Provider value={{ circleData, circleId, circleMember }}>
        {children}
    </MainContext.Provider>
  )
}