import { Editor } from "@tiptap/react";
import { Button } from "antd";
import styles from "../style/menubar.module.css";

const MenuBar = ({ editor }: { editor: Editor | null }) => {
    if (!editor) {
        return null;
    }

    return (
        <div className={styles.wrapper}>
            <Button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
            >
                bold
            </Button>
        </div>
    );
};

export default MenuBar;
