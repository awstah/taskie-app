import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import ActionButton from "./action-btn";

type Item = {
    id: string;
    todo: string;
    status: string;
    priority: string;
    createdAt: string;
    updatedAt: string;
    isTrashed: boolean;
};

export const TableView = ({ list }: any) => {
    return (
        <Table>
            <TableCaption>A list of your daily todo.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="">Todo</TableHead>
                    <TableHead className="w-[100px]">Status</TableHead>
                    <TableHead className="w-[100px]">Priority</TableHead>
                    <TableHead className=" w-[100px]">action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {list?.map((item: Item) => (
                    <ItemRow item={item} key={item.id} />
                ))}
            </TableBody>
        </Table>
    );
};

const ItemRow = ({ item }: any) => {
    console.log(item);
    const vart = () => {
        if (item.priority === "high") {
            return "destructive";
        } else if (item.priority === "low") {
            return "secondary";
        } else {
            return "default";
        }
    };
    const status = () => {
        if (item.status === "Pending") {
            return "secondary";
        } else {
            return "success";
        }
    };

    return (
        <TableRow key={item.id}>
            <TableCell className="font-medium">{item.todo}</TableCell>
            <TableCell className="">
                <Badge variant={status()} className="uppercase">
                    {item.status}
                </Badge>
            </TableCell>
            <TableCell className="">
                <Badge variant={vart()} className="uppercase">
                    {item.priority}
                </Badge>
            </TableCell>
            <TableCell className="flex justify-end">
                <ActionButton id={item.id} />
            </TableCell>
        </TableRow>
    );
};
