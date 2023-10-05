import { ClearOutlined } from "@ant-design/icons";
import { Button, Row, Col, Switch, Select } from "antd";
import { useSelector } from "react-redux";

const TodoItem = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div style={{ margin: "32px 0" }}>
      {todos.map((todo) => (
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
              checked={todo.completed}
              checkedChildren="Completed"
              unCheckedChildren="Active"
            ></Switch>
          </Col>
          <Col flex="auto" offset={1} style={{ alignSelf: "center" }}>
            <h4>{todo.text}</h4>
          </Col>
          <Col flex="100px">
            <Select
              style={{ width: "100%", height: "100%" }}
              options={[
                { value: "", label: "" },
                { value: "red", label: "Red" },
                { value: "blue", label: "Blue" },
                { value: "green", label: "Green" },
                { value: "orange", label: "Orange" },
              ]}
              placeholder="Color"
            />
          </Col>
          <Col flex="100px" offset={1}>
            <Button style={{ width: "100%", height: "100%" }}>
              <ClearOutlined />
            </Button>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default TodoItem;
