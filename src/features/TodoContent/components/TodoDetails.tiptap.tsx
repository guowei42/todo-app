import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Card } from "antd";
import { Key, useEffect } from "react";
import { useGetProjectQuery } from "../../../api/todoApi/todoInfo";
import "../style/editor.css";
import MenuBar from "./MenuBar.tiptap";

const extensions = [StarterKit];

const TodoDetailsTipTap = ({ id }: { id: Key }) => {
    const { data } = useGetProjectQuery(id);
    const editor = useEditor({
        extensions,
        content: "",
    });

    useEffect(() => {
        if (editor && data) {
            editor.commands.setContent(data.details);
        }
    }, [editor, data]);

    return (
        <Card
            title={data?.title}
            style={{ border: "2px solid black" }}
            bordered
        >
            <Card
                title={<MenuBar editor={editor} />}
                style={{ border: "1px solid black"}}
                bodyStyle={{padding: "0 24px"}}
                bordered
            >
                <EditorContent editor={editor} />
            </Card>
        </Card>
    );
};

export default TodoDetailsTipTap;
