import { Button } from "@/components/ui/button";
import { changeStatus, deleteTodo } from "@/lib/features/list";
import { useAppDispatch } from "@/lib/hooks";
import { CheckCheckIcon, Trash2Icon } from "lucide-react";
import React from "react";
import { UpdateTodo } from "./update-todo";
import { toast } from "sonner";

const ActionButton = ({ id }: any) => {
    const dispatch = useAppDispatch();

    const onComplete = () => {
        dispatch(changeStatus(id));
        toast("Task Completed successfully!");
    };
    const onDelete = () => {
        dispatch(deleteTodo(id));
        toast("Task deleted successfully!");
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
