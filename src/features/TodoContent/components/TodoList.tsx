import { Card } from "antd";
import { useGetChildListQuery } from "../../../api/todoApi/todoInfo";
const Roots = [
    {
        id: "72e07c05-ce00-43a6-995d-ec6b05a929ff",
        title: "House Listing",
    },
    {
        id: "22a36016-88c1-48b0-83da-c078ec1c416b",
        title: "House Details",
    },
    {
        id: "98f33552-bf02-453b-84d5-2bf99b6a3f49",
        title: "House Payment",
    },
];
const TodoList = () => {
    const {data, isSuccess} = useGetChildListQuery()
    return (
        <>
            {Roots.map((e) => (
                <div style={{ padding: "20px" }} key={e.id}>
                    <Card
                        title={e.title}
                        style={{ width: "100%" }}
                        bordered
                        hoverable
                    >
                        <p>Card content</p>
                    </Card>
                </div>
            ))}
        </>
    );
};

export default TodoList;
