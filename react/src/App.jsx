import Counter from "../components/Counter";
import Greeting from "../components/Greeting";
import "./App.css";
const names = ["Alice", "Bob", "Charlie", "David"];

function App() {
  return (
    <>
      <Counter />
      {names.map((item, index) => (
        <Greeting name={item} key={index} />
      ))}
    </>
  );
}

export default App;
