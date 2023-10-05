import "./App.css";
import TodoItem from "./Components/TodoItem";
import Header from "./Components/Header";
import { Card } from "antd";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="todos-container">
      <Card title="Todos List" size="large">
        <Header />
        <TodoItem />
        <Footer />
      </Card>
    </div>
  );
}

export default App;
