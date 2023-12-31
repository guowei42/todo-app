import { Key } from "react";
import { todoApi } from ".";
import { TodoInfo } from "../../types/TodoInfo";

const todoInfo = todoApi.injectEndpoints({
    endpoints: (build) => ({
        getProjects: build.query<TodoInfo[], void>({
            query: () => {
                return "TodoInfo?parent";
            },
        }),
        getProject: build.query<TodoInfo, Key>({
            query: (id: Key) => {
                return `TodoInfo/${id}`;
            },
        }),
        getChildList: build.query<TodoInfo[], Key>({
            query: (id: Key) => {
                return `TodoInfo?parent=${id}`;
            },
        }),
        updateProjectDetail: build.mutation<
            string,
            { id: Key; newData: string | null }
        >({
            query: ({ id, newData }) => {
                return {
                    url: `TodoInfo/${id}`,
                    method: "PATCH",
                    body: { details: newData },
                };
            },
        }),
    }),
});

export const {
    useGetProjectsQuery,
    useGetChildListQuery,
    useGetProjectQuery,
    useUpdateProjectDetailMutation,
} = todoInfo;
