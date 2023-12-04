import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import { useGetProjectsQuery } from "../../api/todoApi/todoInfo";
import { Key } from "react";

const Home = () => {
    const { data, isSuccess } = useGetProjectsQuery();
    const navigate = useNavigate();
    const gotoProject = (id: Key) => navigate(`project/${id}`);

    return (
        <div>
            {isSuccess &&
                data.map((project) => (
                    <Card
                        key={project.id}
                        title={project.title}
                        hoverable
                        onClick={() => gotoProject(project.id)}
                        style={{ width: "200px", margin: "50px" }}
                    >
                        <p>{project.summary}</p>
                    </Card>
                ))}
                
        </div>
    );
};

export default Home;
