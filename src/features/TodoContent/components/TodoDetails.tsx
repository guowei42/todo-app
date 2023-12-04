import { Card, Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useGetProjectQuery } from "../../../api/todoApi/todoInfo";
import { Key } from "react";

const TodoDetails = ({ id }: { id: Key }) => {
    const { data, isSuccess } = useGetProjectQuery(id);

    return (
        <>
            {isSuccess && (
                <Card
                    title={data?.title}
                    style={{ height: "100%", border: "1px solid black" }}
                    bordered
                >
                    <Form initialValues={{ details: data?.details }}>
                        <Form.Item name="details">
                            <TextArea
                                style={{ height: "80vh", resize: "none" }}
                            />
                        </Form.Item>
                    </Form>
                </Card>
            )}
        </>
    );
};

export default TodoDetails;
