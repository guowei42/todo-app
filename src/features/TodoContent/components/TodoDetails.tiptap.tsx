import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Card } from "antd";
import { Key, useEffect } from "react";
import { useGetProjectQuery } from "../../../api/todoApi/todoInfo";
import "../style/editor.css";

const extensions = [StarterKit];

const TodoDetailsTipTap = ({ id }: { id: Key }) => {
    const { data, isSuccess, isLoading} = useGetProjectQuery(id);
    const editor = useEditor({
        extensions,
        content: ""
    });
    
    useEffect(() => {
        if (editor && data) {
            editor.commands.setContent(data.details);
        }
    }, [editor, data]);

    return (
        <Card
            title={data?.title}
            style={{ border: "1px solid black" }}
            bordered
        >
            <EditorContent editor={editor} />
        </Card>
    );
};

export default TodoDetailsTipTap;
