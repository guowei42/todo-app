import { Card, Flex } from "antd";
import { Content } from "antd/es/layout/layout";
import { Key } from "react";
import { useNavigate } from "react-router-dom";
import { useGetProjectsQuery } from "../../api/todoApi/todoInfo";
import AddProject from "./components/AddProject";

const Home = () => {
    const { data, isSuccess } = useGetProjectsQuery();

    const navigate = useNavigate();
    const gotoProject = (id: Key) => navigate(`project/${id}`);
    /**
     * <HomeSider /> is for the sider here but not sure its use as of now
     */
    return (
        <>
            <Content>
                <Flex>
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
                    <AddProject />
                </Flex>
            </Content>
        </>
    );
};

export default Home;
