"use client";
import React from "react";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Textarea } from "../ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/lib/hooks";
import { newTodo, selectListItems, updateTodo } from "@/lib/features/list";
import { v4 } from "uuid";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { DialogFooter } from "../ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { toast } from "sonner";

type Props = {
    id?: any;
};

export const formSchema = z.object({
    todo: z.string().min(2).max(100),
    priority: z.string(),
});

export const TodoForm = ({ id }: Props) => {
    const dispatch = useAppDispatch();
    const list = useSelector(selectListItems);
    const data = id ? list.find((item) => item.id === id) : null;
    const router = useRouter();
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            todo: data?.todo || "",
            priority: data?.priority || "medium",
        },
    });

    const todoHandle = (values: z.infer<typeof formSchema>) => {
        if (data) {
            try {
                dispatch(
                    updateTodo({
                        todo: values.todo,
                        priority: values.priority,
                        updatedAt: Date.now().toString(),
                        id: data.id,
                        status: data.status,
                        createdAt: data.createdAt,
                    })
                );
                toast("Task updated successfully!");
            } catch (error) {
                toast(`${error}`);
            }
        } else {
            try {
                dispatch(
                    newTodo({
                        todo: values.todo,
                        id: v4(),
                        status: "Pending",
                        priority: values.priority,
                        createdAt: Date.now().toString(),
                        updatedAt: Date.now().toString(),
                    })
                );
                toast("Task created successfully!");
            } catch (error) {
                toast(`${error}`);
            }
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(todoHandle)}>
                <FormField
                    control={form.control}
                    name="todo"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Todo</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Your Task e.g(My next meeting within an hour)"
                                    {...field}
                                    required
                                />
                            </FormControl>
                            <FormDescription>
                                Write your task here.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="priority"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Priority</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    required
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a priority" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Priority</SelectLabel>
                                            <SelectItem value="high">
                                                High
                                            </SelectItem>
                                            <SelectItem value="medium">
                                                Medium
                                            </SelectItem>
                                            <SelectItem value="low">
                                                Low
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-end mt-5">
                    <DialogFooter className="sm:justify-end">
                        <DialogClose asChild>
                            <Button type="submit">Save Changes</Button>
                        </DialogClose>
                    </DialogFooter>
                </div>
            </form>
        </Form>
    );
};
