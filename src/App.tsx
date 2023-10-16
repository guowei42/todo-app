import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import TodoContent from "./features/TodoContent";

const App = () => {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider>
                <Menu />
            </Sider>
            <Layout>
                <Content>
                    <TodoContent />
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;
