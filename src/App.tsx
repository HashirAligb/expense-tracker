import Header from "./components/Header";
import ExpenseSummary from "./components/ExpenseSummary";
import ExpenseCard from "./components/ExpenseCard";
import type { Expense } from "./types/expense";

import "./App.css";

export default function App() {
  const expenses: Expense[] = [
    { id: "1", title: "Groceries", amount: 42.35, date: "2025-09-10", category: "Food" },
    { id: "2", title: "MetroCard", amount: 20, date: "2025-09-12", category: "Transit" },
  ];

  return (
    <main style={{ maxWidth: 560, margin: "2rem auto", padding: 16 }}>
      <Header />
      <ExpenseSummary />
      {expenses.map((e) => (
        <ExpenseCard
          key={e.id}
          title={e.title}
          amount={e.amount}
          date={e.date}
          category={e.category}
        />
      ))}
    </main>
  );
}
