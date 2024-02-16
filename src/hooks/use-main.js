import { useContext } from "react";
import { MainContext } from "../features/main/context/MainContext.jsx";

export default function useMain() {
    return useContext(MainContext)
}