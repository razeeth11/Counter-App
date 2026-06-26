import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { CounterDisplay } from "./components/CounterDisplay/CounterDisplay";
import { CounterControls } from "./components/CounterControls/CounterControls";

function App() {
  const countFromLocalStorage = JSON.parse(localStorage.getItem("count"));
  const [count, setCount] = useState(countFromLocalStorage || 0);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <>
      <div className="App">
        <Header />
        <CounterDisplay count={count} />
        <CounterControls setCount={setCount} />
      </div>
    </>
  );
}

export default App;
