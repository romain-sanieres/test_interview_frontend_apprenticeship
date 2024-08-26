import Counter from "../components/Counter";
import Greeting from "../components/Greeting";
import Header from "../components/Header";
import "./App.css";
const names = ["Alice", "Bob", "Charlie", "David"];

function App() {
  return (
    <>
      <Header />
      <main>
        <Counter />
        {names.map((item, index) => (
          <Greeting name={item} key={index} />
        ))}
      </main>
    </>
  );
}

export default App;
