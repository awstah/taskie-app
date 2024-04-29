import { Button } from "@/components/ui/button";
import { changeStatus, deleteTodo } from "@/lib/features/list";
import { useAppDispatch } from "@/lib/hooks";
import { CheckCheckIcon, Trash2Icon } from "lucide-react";
import React from "react";
import { UpdateTodo } from "./update-todo";

const ActionButton = ({ id }: any) => {
    const dispatch = useAppDispatch();

    const onComplete = () => {
        dispatch(changeStatus(id));
        console.log(id);
    };
    const onDelete = () => {
        dispatch(deleteTodo(id));
        console.log(id);
    };
    return (
        <>
            <Button onClick={onDelete} size="icon" variant="ghost">
                <Trash2Icon size="16px" />
            </Button>
            <UpdateTodo id={id} />
            <Button onClick={onComplete} size="icon" variant="ghost">
                <CheckCheckIcon size="16px" />
            </Button>
        </>
    );
};

export default ActionButton;
