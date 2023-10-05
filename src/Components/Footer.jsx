import { Button, Checkbox, Col, Row } from "antd";

const Footer = () => {
  return (
    <div>
      <Row align={"top"} justify={"space-around"}>
        <Col flex={1}>
          <Button type="primary">Make All Todo Completed</Button>
          <Button type="primary" danger>
            Delete All Todo
          </Button>
        </Col>
        <Col flex={1}>
          Remanining todos
          <Button type="default">1</Button>
          todo left
        </Col>
        <Col flex={1}>
          Filter by status
          <Checkbox>asdasd</Checkbox>
        </Col>
        <Col flex={1}>
          Filter by color
          <Checkbox>asdasd</Checkbox>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
