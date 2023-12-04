import { Card } from "antd";
import { useGetChildListQuery } from "../../../api/todoApi/todoInfo";
import { Key } from "react";

const TodoList = ({ id }: { id: Key }) => {
    const { data, isSuccess } = useGetChildListQuery(id);
    return (
        <>
            {isSuccess && data.map((e) => (
                <div style={{ padding: "20px" }} key={e.id}>
                    <Card
                        title={e.title}
                        style={{ width: "100%" }}
                        bordered
                        hoverable
                    >
                        {e.summary}
                    </Card>
                </div>
            ))}
        </>
    );
};

export default TodoList;
