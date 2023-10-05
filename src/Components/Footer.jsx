import { Button, Checkbox, Col, Radio, Row, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";

const Footer = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const remanining = todos.filter((todo) => todo.completed !== true).length;

  const onMarkAllDone = () => {
    dispatch({ type: "todos/markalldone", paypload: "" });
  };

  const onDeleteAllCompleted = () => {
    const completedList = todos.filter(
      (todo) => todo.completed === true
    ).length;
    dispatch({ type: "todos/deleteallcompleted" });
    if (completedList === 0) {
      alert("There are no completed todo!!!");
      return;
    }
  };

  const onDeleteAll = () => {
    if (confirm("Do you want to delete all todos?"))
      dispatch({ type: "todos/deleteall" });
  };

  return (
    <div className="footer">
      <Row align={"top"} justify={"space-around"} wrap={false}>
        <Col span={6}>
          {remanining > 0 ? (
            <>
              <h4>Remanining todos</h4>
              <p>
                <span style={{ fontWeight: 600, color: "red" }}>
                  {remanining}
                </span>{" "}
                todo left
              </p>
            </>
          ) : (
            <h4>All Completed!!!</h4>
          )}
        </Col>
        <Col span={6}>
          <h4>Filter by status</h4>
          <Radio.Group value={"all"}>
            <Space direction="vertical">
              <Radio value={"all"}>All</Radio>
              <Radio value={"active"}>Active</Radio>
              <Radio value={"completed"}>Completed</Radio>
            </Space>
          </Radio.Group>
        </Col>
        <Col span={6}>
          <h4>Filter by color</h4>
          <div className="filter">
            <Checkbox className="red">
              <span style={{ color: "red" }}>Red</span>
            </Checkbox>
            <Checkbox className="blue">
              <span style={{ color: "blue" }}>Blue</span>
            </Checkbox>
            <Checkbox className="green">
              <span style={{ color: "green" }}>Green</span>
            </Checkbox>
            <Checkbox className="orange">
              <span style={{ color: "orange" }}>Orange</span>
            </Checkbox>
          </div>
        </Col>
        <Col span={6} align="right">
          <Button type="primary" block onClick={onMarkAllDone}>
            Mark All Completed
          </Button>
          <Button
            type="primary"
            danger
            style={{ margin: "8px 0" }}
            block
            onClick={onDeleteAllCompleted}
          >
            Delete All Completed
          </Button>
          <Button type="primary" danger block onClick={onDeleteAll}>
            Delete All Todos
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
