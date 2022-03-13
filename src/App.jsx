import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./counter";
function App() {
  let count = 2;
  return (
    <div>
      <Counter count={count} />
    </div>
  );
}

export default App;
