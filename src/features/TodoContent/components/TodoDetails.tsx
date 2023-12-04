import { Card, Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useGetProjectQuery } from "../../../api/todoApi/todoInfo";
import { Key, useEffect } from "react";
import { useForm } from "antd/es/form/Form";

const TodoDetails = ({ id }: { id: Key }) => {
    const { data, isSuccess } = useGetProjectQuery(id);
    const [form] = useForm();

    useEffect(() => {
        if (isSuccess) {
            form.setFieldsValue({ details: data.details });
        }
    }, [isSuccess, data, form]);

    return (
        <Card
            title={data?.title}
            style={{ height: "100%", border: "1px solid black" }}
            bordered
        >
            <Form form={form}>
                <Form.Item name="details">
                    <TextArea style={{ height: "80vh", resize: "none" }} />
                </Form.Item>
            </Form>
        </Card>
    );
};

export default TodoDetails;
