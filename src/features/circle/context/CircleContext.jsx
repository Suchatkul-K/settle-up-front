import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getUserCircle } from "../../../api/circle";
import useAuth from "../../../hooks/use-auth";

export const CircleContext = createContext();

export default function CircleContextProvider({ children }) {
  const [circles, setCircles] = useState(null);
  const { loading, setLoading } = useAuth();

  useEffect(() => {
    getUserCircle()
      .then((res) => setCircles(res.data.circles))
      .catch((err) => {
        toast.error(err.response?.data.message);
      });

    
  }, [loading]);

  return (
    <CircleContext.Provider value={{ circles, setCircles}}>
      {children}
    </CircleContext.Provider>
  );
}
