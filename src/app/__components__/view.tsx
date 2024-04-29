import React from "react";
import { TableView } from "./table-view";
import { ListView } from "./list-view";

type Item = {
    id: string;
    todo: string;
    status: string;
    priority: string;
    createdAt: string;
    updatedAt: string;
    isTrashed: boolean;
};

const ViewList = ({ view, list }: any) => {
    return (
        <>
            {view === "table" ? (
                <TableView list={list} />
            ) : (
                <div className="grid gap-4">
                    {list.map((item: Item) => (
                        <ListView item={item} key={item.id} />
                    ))}
                </div>
            )}
        </>
    );
};

export default ViewList;
