import { HomeOutlined } from "@ant-design/icons";
import { Layout} from "antd";
import { Outlet } from "react-router";

const App = () => {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Outlet />
        </Layout>
    );
};

export default App;
