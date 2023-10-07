import { CloseOutlined } from "@ant-design/icons";
import { Button, Row, Col, Switch, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";

const TodoItem = () => {
  const dispatch = useDispatch();
  const filteredTodos = useSelector((state) => {
    const filteredByStatus = state.todos.filter((item) => {
      if (state.filters.status === "All") {
        return true;
      } else if (state.filters.status === "Active") {
        return !item.completed;
      } else if (state.filters.status === "Completed") {
        return item.completed;
      }
      return true;
    });

    const filteredByColor = filteredByStatus.filter((item) => {
      if (state.filters.colors.length === 0) {
        return true;
      } else {
        return state.filters.colors.includes(item.color);
      }
    });

    return filteredByColor;
  });

  const onRemoved = (id) => {
    if (confirm("Are you sure you want to remove this todo?"))
      dispatch({ type: "todos/removed", payload: { id } });
  };
  const setColor = ({ id, color }) => {
    if (color !== filteredTodos.find((todo) => todo.id === id).color) {
      dispatch({ type: "todos/colored", payload: { id, color } });
    }
  };

  const toggleState = (id) => {
    dispatch({ type: "todos/toggle", payload: { id } });
  };

  return (
    <div className="todo-items">
      {filteredTodos.map((todo) => (
        <Row
          key={todo.id}
          align="center"
          justify="center"
          style={{
            borderBottom: "1px solid #ccc",
            margin: "12px 0",
            padding: "16px 0",
          }}
        >
          <Col flex="50px" style={{ alignSelf: "center" }}>
            <Switch
              onChange={() => toggleState(todo.id)}
              checked={todo.completed}
              checkedChildren="Completed"
              unCheckedChildren="Active"
            ></Switch>
          </Col>
          <Col flex="auto" offset={1} style={{ alignSelf: "center" }}>
            <h3
              style={{
                color: todo.color,
                textDecoration: todo.completed ? "line-through" : "",
              }}
            >
              {todo.text}
            </h3>
          </Col>
          <Col flex="100px">
            <Select
              defaultValue={todo.color}
              popupMatchSelectWidth={false}
              style={{ width: 95 }}
              options={[
                { value: "Red", label: "Red" },
                { value: "Blue", label: "Blue" },
                { value: "Green", label: "Green" },
                { value: "Orange", label: "Orange" },
              ]}
              placeholder="Color"
              onChange={(color) => setColor({ id: todo.id, color })}
            />
          </Col>
          <Col>
            <Button onClick={() => onRemoved(todo.id)}>
              <CloseOutlined />
            </Button>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default TodoItem;
