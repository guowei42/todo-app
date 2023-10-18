import { Card } from "antd";
import TextArea from "antd/es/input/TextArea";

const TodoDetails = () => {
    return (
        <>
            <Card title="Default size card" style={{height: "100%", border: "1px solid black" }} bordered>
                <TextArea style={{ height: "80vh", resize: 'none' }}>Card content</TextArea>
            </Card>
        </>
    );
};

export default TodoDetails;
