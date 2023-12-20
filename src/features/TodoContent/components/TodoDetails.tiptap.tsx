import { SaveTwoTone, EditTwoTone, DeleteTwoTone } from "@ant-design/icons";
import { EditorState } from "@tiptap/pm/state";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Card } from "antd";
import { Key, useEffect } from "react";
import {
    useGetProjectQuery,
    useUpdateProjectDetailMutation,
} from "../../../api/todoApi/todoInfo";
import "../style/editor.css";
import MenuBar from "./MenuBar.tiptap";

const extensions = [StarterKit];

const TodoDetailsTipTap = ({ id }: { id: Key }) => {
    const { data } = useGetProjectQuery(id);
    const [updateProjectDetail, result] = useUpdateProjectDetailMutation();
    const editor = useEditor({
        extensions,
        content: "",
    });

    // code from: https://github.com/ueberdosis/tiptap/issues/491#issuecomment-1806831136
    const resetEditorContent = () => {
        if (editor) {
            const currentSelection = editor.state.selection;
            editor.commands.setContent(editor.getJSON());
            const newEditorState = EditorState.create({
                doc: editor.state.doc,
                plugins: editor.state.plugins,
                selection: currentSelection,
            });
            editor.view.updateState(newEditorState);
        }
    };

    useEffect(() => {
        if (editor && data) {
            editor.commands.setContent(data.details);
            resetEditorContent();
        }
    }, [editor, data]);

    return (
        <Card
            title={data?.title}
            style={{ border: "2px solid black" }}
            bordered
        >
            {editor && (
                <Card
                    title={<MenuBar editor={editor} />}
                    actions={[
                        <SaveTwoTone
                            key="save"
                            style={{ fontSize: "1.5rem" }}
                            twoToneColor=" #52c41a"
                            onClick={() =>
                                updateProjectDetail({
                                    id: id,
                                    newData: editor.getHTML(),
                                })
                            }
                        />,
                        <EditTwoTone
                            key="edit"
                            style={{ fontSize: "1.5rem" }}
                        />,
                        <DeleteTwoTone
                            key="delete"
                            style={{ fontSize: "1.5rem" }}
                            twoToneColor="#f5222d"
                        />,
                    ]}
                    style={{ border: "1px solid black" }}
                    bodyStyle={{ padding: "0 24px" }}
                    bordered
                >
                    <EditorContent editor={editor} />
                </Card>
            )}
        </Card>
    );
};

export default TodoDetailsTipTap;
