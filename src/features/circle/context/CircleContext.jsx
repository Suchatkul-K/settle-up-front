import React, { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { getUserCircle } from '../../../api/circle';

export const CircleContext = createContext()

export default function CircleContextProvider({ children }) {
    
    const [circles, setCircles] = useState([]);

    useEffect(() => {
        try {
          getUserCircle()
            .then((res) => setCircles(res.data.circles))
            .catch((err) => {
              toast.error(err.response?.data.message);
            });
        } catch (err) {
          toast.error(err.response?.data.message);
        }
      }, []);

  return (
    <CircleContext.Provider value={{ circles, setCircles }}>
        {children}
    </CircleContext.Provider>
  )
}
