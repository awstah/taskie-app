"use client";
import React from "react";
import Search from "./search";

import { ListIcon, TableIcon } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useAppDispatch } from "@/lib/hooks";
import { selectView, setView } from "@/lib/features/view";
import { useSelector } from "react-redux";
import { selectFilters, setFilterPriority } from "@/lib/features/list";

const Filters = () => {
    const dispatch = useAppDispatch();
    const view = useSelector(selectView);
    const filters = useSelector(selectFilters);

    const setViewHandler = (value: any) => {
        dispatch(
            setView({
                isTableView: value,
            })
        );
    };

    const setPriorityHandler = (value: any) => {
        dispatch(setFilterPriority(value));
    };

    return (
        <div className="flex items-center space-x-3">
            <Search />
            <ToggleGroup
                value={filters.priority}
                type="single"
                onValueChange={setPriorityHandler}
            >
                <ToggleGroupItem
                    value="high"
                    aria-label="Toggle table"
                    aria-checked="false"
                >
                    <span className="text-xs">High</span>
                </ToggleGroupItem>
                <ToggleGroupItem value="medium" aria-label="Toggle list">
                    <span className="text-xs">Medium</span>
                </ToggleGroupItem>
                <ToggleGroupItem value="low" aria-label="Toggle list">
                    <span className="text-xs">Low</span>
                </ToggleGroupItem>
            </ToggleGroup>

            <ToggleGroup
                value={view}
                type="single"
                onValueChange={setViewHandler}
            >
                <ToggleGroupItem
                    value="table"
                    aria-label="Toggle table"
                    aria-checked="false"
                >
                    <TableIcon className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="list" aria-label="Toggle list">
                    <ListIcon className="h-4 w-4" />
                </ToggleGroupItem>
            </ToggleGroup>
        </div>
    );
};

export default Filters;
