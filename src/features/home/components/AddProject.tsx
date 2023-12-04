import { Card, Form, Input, Modal, Tooltip } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";

const AddProject = () => {
    const [modalOpen, setModal2Open] = useState(false);

    return (
        <>
            <Tooltip title="Add New Project">
                <Card
                    key={"AddCard"}
                    onClick={() => setModal2Open(true)}
                    hoverable
                    style={{
                        width: "200px",
                        margin: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "3px dotted black",
                    }}
                >
                    <PlusCircleOutlined
                        style={{
                            fontSize: "48px",
                        }}
                    />
                </Card>
            </Tooltip>
            <Modal
                title="Add New Project"
                centered
                open={modalOpen}
                onOk={() => setModal2Open(false)}
                onCancel={() => setModal2Open(false)}
            >
                <Form
                    labelCol={{ flex: "130px" }}
                    labelAlign="left"
                    style={{ maxWidth: 450 }}
                >
                    <Form.Item label="New Project Name">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Project summary">
                        <TextArea maxLength={50} showCount autoSize={{maxRows: 2}}/>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default AddProject;
