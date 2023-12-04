import { HomeOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { Link } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const menuItems: MenuItem[] = [
    {
        key: 1,
        icon: <HomeOutlined />,
        label: <Link to="/">Home</Link>,
    },
];

const HomeSider = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider
            breakpoint="md"
            theme="light"
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
        >
            <Menu
                theme="light"
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={menuItems}
            />
        </Sider>
    );
};

export default HomeSider;
