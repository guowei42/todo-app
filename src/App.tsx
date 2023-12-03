import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router";

const App = () => {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Content>
                <Outlet/>
            </Content>
        </Layout>
    );
};

export default App;
