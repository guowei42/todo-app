import { Button, Col, Layout, Row } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Key } from "react";
import { useNavigate, useParams } from "react-router";
import TodoDetails from "./components/TodoDetails";
import TodoList from "./components/TodoList";
import TodoDetailsTipTap from "./components/TodoDetails.tiptap";

const TodoContent = () => {
    let { id } = useParams();
    const navigate = useNavigate();

    const gotoHome = () => navigate("/");

    return (
        <Content>
            <Row style={{ minHeight: "100vh" }}>
                <Col span={16} style={{ borderRight: "2px dashed black" }}>
                    <Layout style={{ height: "100vh" }}>
                        <Header style={{ background: "white" }}>
                            <Button onClick={gotoHome}>Home</Button>
                        </Header>
                        <Content style={{ padding: "15px" }}>
                            {/* <TodoDetails id={id as Key} /> */}
                            <TodoDetailsTipTap id={id as Key} />
                        </Content>
                    </Layout>
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
