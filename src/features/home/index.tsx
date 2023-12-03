import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import { useGetProjectsQuery } from "../../api/todoApi/todoInfo";

const Home = () => {
    const { data, isSuccess } = useGetProjectsQuery();
    const navigate = useNavigate();
    const gotoProject = () => navigate("project");

    return (
        <div>
            {isSuccess &&
                data.map((project) => (
                    <Card
                        title={project.title}
                        hoverable
                        onClick={gotoProject}
                        style={{ width: "200px", margin: "50px" }}
                    >
                        <p>{project.summary}</p>
                    </Card>
                ))}
        </div>
    );
};

export default Home;
