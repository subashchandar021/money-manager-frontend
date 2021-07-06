import { useContext } from "react";
import { TransactionTrackerContext } from "./context/context.js";
import { incomeCategories,expenseCategories, resetCategories } from "./constants/categories.js";

const useTransactions=(title)=>{
    resetCategories();
    const {transactions}=useContext(TransactionTrackerContext);
    const transactionsPerType =transactions.filter((t)=>t.type===title);
    const total = transactionsPerType.reduce((acc,currVal)=>acc+=currVal.amount,0);
    const categories =title ==='Income'? incomeCategories :expenseCategories;
    console.log({transactionsPerType,total,categories});

    transactionsPerType.forEach((t)=>{
        const category =categories.find((c)=>c.type===t.categories)

        if(category)categories.amount += t.amount;
    });
    const filteredCategories = categories.filter((c)=>c.amount>0);
    return {total,filteredCategories}
}
export default useTransactions;