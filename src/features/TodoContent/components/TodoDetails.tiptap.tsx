import { BubbleMenu, EditorContent, FloatingMenu, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Card } from "antd";
import { useGetProjectQuery } from "../../../api/todoApi/todoInfo";
import { Key } from "react";
import "../style/editor.css"

const extensions = [StarterKit];

const content = "<p>Hello World!</p>";

const TodoDetailsTipTap = ({ id }: { id: Key }) => {
    const { data, isSuccess } = useGetProjectQuery(id);
    const editor = useEditor({
        extensions,
        content,
    });

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
