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
import { PlusIcon } from "lucide-react";
import { TodoForm } from "@/components/form/todo-form";

export const Todo = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="sm" className="space-x-2">
                    <PlusIcon />
                    <span>New</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Todo</DialogTitle>
                    <DialogDescription>Your daily todo.</DialogDescription>
                </DialogHeader>
                <TodoForm />
            </DialogContent>
        </Dialog>
    );
};
