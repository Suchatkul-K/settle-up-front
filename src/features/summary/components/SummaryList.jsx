import React from "react";
import SummaryItem from "./SummaryItem";
import useMain from "../../../hooks/use-main";
import * as constance from "../../../constance";

function SummaryList() {
  const { circleId, circleMember, circleBill, memberExpense } = useMain();
  // console.log("circleMember :", circleMember);
  // console.log("circleBill :", circleBill);
  console.log(memberExpense)

  // Separate debtors and creditors
  const debtors = [];
  const creditors = [];
  for (const [member, amount] of Object.entries(memberExpense)) {
      if (amount < 0) {
          debtors.push({ member: parseInt(member), amount: -amount });
      } else if (amount > 0) {
          creditors.push({ member: parseInt(member), amount });
      }
  }

  // Sort debtors and creditors
  debtors.sort((a, b) => a.amount - b.amount);
  creditors.sort((a, b) => b.amount - a.amount);

  // Initialize transactions array
  const transactions = [];

  // Pair debtors with creditors and settle debts
  let loop = 1
  while (debtors.length > 0 && creditors.length > 0) {
      const debtor = debtors[0];
      const creditor = creditors[0];
      const amount = Math.min(debtor.amount, creditor.amount);
      transactions.push({ from: debtor.member, to: creditor.member, amount, id: loop });
      debtor.amount -= amount;
      creditor.amount -= amount;
      if (debtor.amount === 0) debtors.shift();
      if (creditor.amount === 0) creditors.shift();
      loop++;
  }

  console.log(transactions)

  return (
    <div className="card-body">
      {transactions?.map(el => (<SummaryItem key={el.id} from={el.from} to={el.to} amount={el.amount}/>))}
    </div>
  );
}

export default SummaryList;
