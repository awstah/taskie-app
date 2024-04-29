import { Badge } from "@/components/ui/badge";
import React from "react";
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
export const ListView = ({ item }: any) => {
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
        <div className="w-full min-h-28 shadow p-4 flex items-end justify-between border-l-4 border-primary">
            <div className="space-y-4 flex-1 pr-10">
                <p className="text-xl font-medium">{item.todo}</p>
                <div className="flex space-x-2">
                    <Badge variant={vart()}>{item.priority}</Badge>
                    <Badge variant={status()}>{item.status}</Badge>
                </div>
            </div>
            <div className="flex space-x-2">
                <ActionButton id={item.id} />
            </div>
        </div>
    );
};
