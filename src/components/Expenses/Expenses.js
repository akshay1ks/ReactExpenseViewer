import React, { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter"
import ExpensesChart from "./ExpensesChart"

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState(2019);

  const selectedYearChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(item => item.date.getFullYear().toString() === selectedYear);

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter onSelectedYearChange={selectedYearChangeHandler} selected={selectedYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
