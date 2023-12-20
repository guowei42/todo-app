import { DeleteTwoTone, EditTwoTone, SaveOutlined } from "@ant-design/icons";
import { EditorState } from "@tiptap/pm/state";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { Key, useEffect } from "react";
import {
    useGetProjectQuery,
    useUpdateProjectDetailMutation,
} from "../../../api/todoApi/todoInfo";
import cardStyles from "../style/card.module.css";
import "../style/editor.css";
import MenuBar from "./MenuBar.tiptap";

const extensions = [StarterKit];

const TodoDetailsTipTap = ({ id }: { id: Key }) => {
    const { data } = useGetProjectQuery(id);
    const [updateProjectDetail] = useUpdateProjectDetailMutation();
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
        <>
            {editor && (
                <Card
                    title={data?.title}
                    bodyStyle={{ paddingTop: 0 }}
                    style={{ border: "2px solid black" }}
                    actions={[
                        <SaveOutlined
                            key="save"
                            className={`${cardStyles.icon} ${cardStyles.saveIcon}`}
                            onClick={() =>
                                updateProjectDetail({
                                    id: id,
                                    newData: editor.getHTML(),
                                })
                            }
                        />,
                        <EditTwoTone key="edit" className={cardStyles.icon} />,
                        <DeleteTwoTone
                            key="delete"
                            className={`${cardStyles.icon} ${cardStyles.deleteIcon}`}
                            twoToneColor="#f5222d"
                        />,
                    ]}
                    bordered
                >
                    <Meta title={<MenuBar editor={editor} />} />
                    <EditorContent editor={editor} />
                </Card>
            )}
        </>
    );
};

export default TodoDetailsTipTap;
