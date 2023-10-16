import { Col, Layout, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import TodoList from "./components/TodoList";
import TodoDetails from "./components/TodoDetails";

const TodoContent = () => {
    return (
        <Layout>
            <Row>
                <Col span={8} style={{border: "1px solid red"}}>
                    <Content><TodoList/></Content>
                </Col>
                <Col span={16} style={{border: "1px solid red"}}>
                    <Content><TodoDetails/></Content>
                </Col>
            </Row>
        </Layout>
    );
};

export default TodoContent;
