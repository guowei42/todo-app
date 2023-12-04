import { Card } from "antd";
import { useGetChildListQuery } from "../../../api/todoApi/todoInfo";
import { Key } from "react";
import { useNavigate } from "react-router";

const TodoList = ({ id }: { id: Key }) => {
    const { data, isSuccess } = useGetChildListQuery(id);
    const navigate = useNavigate();

    const gotoProject = (id: Key) => navigate(`/project/${id}`);

    return (
        <>
            {isSuccess && data.map((e) => (
                <div style={{ padding: "20px" }} key={e.id}>
                    <Card
                        title={e.title}
                        style={{ width: "100%" }}
                        onClick={() => gotoProject(e.id)}
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
