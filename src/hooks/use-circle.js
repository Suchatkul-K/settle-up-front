import { useContext } from "react";
import { CircleContext } from "../features/circle/context/CircleContext.jsx";

export default function useCircle() {
    return useContext(CircleContext)
}