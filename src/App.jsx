import "./App.css";
import TodoItem from "./Components/TodoItem";
import Header from "./Components/Header";
import { Card } from "antd";
import Footer from "./Components/Footer";
import { useSelector } from "react-redux";

function App() {
  const todosLength = useSelector((state) => state.todos.length);
  return (
    <div className="todos-container">
      <Card
        title={
          <span>
            todos <span className="sub-title">list</span>
          </span>
        }
        size="large"
      >
        <Header />
        {todosLength ? (
          <>
            <TodoItem />
            <Footer />
          </>
        ) : (
          <h1
            style={{
              textAlign: "center",
              color: "red",
              fontSize: "28px",
              marginTop: "30px",
              textTransform: "uppercase",
            }}
          >
            empty list!
          </h1>
        )}
      </Card>
    </div>
  );
}

export default App;
