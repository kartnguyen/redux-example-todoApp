import "./App.css";
import TodoItem from "./Components/TodoItem";
import Header from "./Components/Header";
import { Card, Row } from "antd";
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
          </>
        ) : (
          <div className="todo-items">
            <Row
              align="center"
              justify="center"
              style={{
                borderBottom: "1px solid #ccc",
                padding: "16px 0",
              }}
            >
              <h1
                style={{
                  color: "red",
                  fontSize: "28px",
                  textTransform: "uppercase",
                }}
              >
                empty list!
              </h1>
            </Row>
          </div>
        )}
        <Footer />
      </Card>
    </div>
  );
}

export default App;
