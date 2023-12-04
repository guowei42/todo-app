import { Button, Col, Layout, Row } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Key } from "react";
import { useNavigate, useParams } from "react-router";
import TodoDetails from "./components/TodoDetails";
import TodoList from "./components/TodoList";

const TodoContent = () => {
    let { id } = useParams();
    const navigate = useNavigate();

    const gotoHome = () => navigate("/");

    return (
        <Content>
            <Row style={{ minHeight: "100vh" }}>
                <Col span={16} style={{ borderRight: "2px dashed black" }}>
                    <Header style={{ background: "white" }}>
                        <Button onClick={gotoHome}>Home</Button>
                    </Header>
                    <Content style={{ height: "100%", padding: "15px" }}>
                        <TodoDetails id={id as Key} />
                    </Content>
                </Col>
                <Col span={8}>
                    <Layout style={{ height: "100%" }}>
                        <Content>
                            <TodoList id={id as Key} />
                        </Content>
                        <Footer>
                            <Button>Add New</Button>
                        </Footer>
                    </Layout>
                </Col>
            </Row>
        </Content>
    );
};

export default TodoContent;
