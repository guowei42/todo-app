import { Key } from "react";

export interface TodoInfo {
    id: Key,
    parent: Key,
    title: string,
    summary: string,
    details: string
}