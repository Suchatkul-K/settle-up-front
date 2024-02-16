import React, { createContext, useEffect, useState } from 'react'
import { getCircleByCircleId } from '../../../api/main'
import { useParams } from 'react-router-dom'
import { storeToken } from '../../../utils/local-storage'

export const MainContext = createContext()

export default function MainContextProvider({children}) {
    const [circleData,setCircleData] = useState({id: 0, circleName: '', bills: [], members: []})
    const param = useParams()
    useEffect(()=>{
        getCircleByCircleId(param.circleId)
            .then(res => {
                // console.log(res)
                storeToken(res.data.accessToken)
                setCircleData(res.data.circleData)
                // console.log(circleData)
            })
            .catch(err => console.log(err))
    },[])
  return (
    <MainContext.Provider value={{ circleData }}>
        {children}
    </MainContext.Provider>
  )
}