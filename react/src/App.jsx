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
        <p className="list-title">Names List</p>
        <div className="greeting-list">
          {names.map((item, index) => (
            <Greeting name={item} key={index} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
