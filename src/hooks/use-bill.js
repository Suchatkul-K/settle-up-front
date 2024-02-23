import { useContext } from "react";
import { BillContext } from "../features/bill/context/BillContext";

export default function useBill() {
  return useContext(BillContext);
}
