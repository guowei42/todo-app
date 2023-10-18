import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import TodoContent from "./features/TodoContent";

const App = () => {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Content>
                <TodoContent />
            </Content>
        </Layout>
    );
};

export default App;
