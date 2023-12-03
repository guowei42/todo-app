import { todoApi } from ".";
import { TodoInfo } from "../../types/TodoInfo";

const todoInfo = todoApi.injectEndpoints({
    endpoints: (build) => ({
        getProjects: build.query<TodoInfo[], void>({
            query: () => {
                return "TodoInfo?parent";
            },
        }),
    }),
});

export const { useGetProjectsQuery } = todoInfo;
