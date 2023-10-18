import { Button, Col, Layout, Row } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import TodoList from "./components/TodoList";
import TodoDetails from "./components/TodoDetails";

const TodoContent = () => {
    return (
        <Layout>
            <Row style={{ minHeight: "100vh" }}>
                <Col span={16} style={{ borderRight: "2px dashed black" }}>
                    <Content style={{ height: "100%", padding: "15px" }}>
                        <TodoDetails />
                    </Content>
                </Col>
                <Col span={8}>
                    <Layout style={{ height: "100%" }}>
                        <Content>
                            <TodoList />
                        </Content>
                        <Footer>
                            <Button>Add New</Button>
                        </Footer>
                    </Layout>
                </Col>
            </Row>
        </Layout>
    );
};

export default TodoContent;
