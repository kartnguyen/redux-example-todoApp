import { Button, Checkbox, Col, Radio, Row, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { colors, status } from "../assets/service.js";

const Footer = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const remanining = todos.filter((todo) => todo.completed !== true).length;

  const completedList = todos.filter((todo) => todo.completed === true).length;

  const onMarkAllDone = () => {
    dispatch({ type: "todos/markalldone" });
  };

  const onDeleteAllCompleted = () => {
    dispatch({ type: "todos/deleteallcompleted" });
  };

  const onDeleteAll = () => {
    if (confirm("Do you want to delete all todos?"))
      dispatch({ type: "todos/deleteall" });
  };

  const onChangeStatus = (status) => {
    dispatch({ type: "filter/changestatus", payload: { status } });
  };

  const onChangeColor = (color) => {
    dispatch({ type: "filter/changecolor", payload: { color } });
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
          <Radio.Group
            defaultValue={"All"}
            onChange={(e) => onChangeStatus(e.target.value)}
          >
            <Space direction="vertical">
              {status.map((status) => (
                <Radio key={status} value={status}>
                  {status}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        </Col>
        <Col span={6}>
          <h4>Filter by color</h4>
          <div className="filter">
            {colors.map((color) => (
              <Checkbox
                className={color}
                key={color}
                onChange={() => onChangeColor(color)}
              >
                <span style={{ color: color }}>{color}</span>
              </Checkbox>
            ))}
          </div>
        </Col>
        <Col span={6} align="right">
          <Button
            type="primary"
            block
            onClick={onMarkAllDone}
            disabled={remanining ? false : true}
          >
            Mark All Completed
          </Button>
          <Button
            type="primary"
            danger
            style={{ margin: "8px 0" }}
            block
            onClick={onDeleteAllCompleted}
            disabled={completedList ? false : true}
          >
            Delete All Completed
          </Button>
          <Button
            type="primary"
            danger
            block
            onClick={onDeleteAll}
            disabled={todos.length ? false : true}
          >
            Delete All Todos
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
