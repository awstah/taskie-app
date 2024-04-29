import React from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { PenLineIcon } from "lucide-react";
import { TodoForm } from "@/components/form/todo-form";

export const UpdateTodo = ({ id }: any) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="icon" variant="ghost">
                    <PenLineIcon size="16px" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Update Todo</DialogTitle>
                    <DialogDescription>Update your todo.</DialogDescription>
                </DialogHeader>
                <TodoForm id={id} />
            </DialogContent>
        </Dialog>
    );
};
