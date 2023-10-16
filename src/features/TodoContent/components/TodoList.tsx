import { Card } from "antd";

const TodoList = () => {
    return (
        <>
            <div style={{padding: "20px"}}>
                <Card title="Default size card" style={{ width: "100%" }}>
                    <p>Card content</p>
                </Card>
            </div>
            <div style={{padding: "20px"}}>
                <Card title="Default size card" style={{ width: "100%" }}>
                    <p>Card content</p>
                </Card>
            </div>
        </>
    );
};

export default TodoList;
