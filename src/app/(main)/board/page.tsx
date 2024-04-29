"use client";
import React, { useEffect, useState } from "react";
import Filters from "@/app/__components__/filter";

import { useSelector } from "react-redux";
import { ListItem, selectSearchedListItems } from "@/lib/features/list";
import { selectView } from "@/lib/features/view";
import ViewList from "@/app/__components__/view";
import NotFound from "@/components/global/not-found";

const Page = () => {
    const [list, setList] = useState<ListItem[]>([]);
    const view = useSelector(selectView);
    const searchedListItems = useSelector(selectSearchedListItems);

    useEffect(() => {
        return setList(searchedListItems);
    }, [searchedListItems]);

    return (
        <div className="px-4 2xl:px-0 2xl:container 2xl:mx-auto mt-4">
            <div className="flex items-center justify-end">
                <Filters />
            </div>
            {list.length > 0 ? (
                <ViewList view={view} list={list} />
            ) : (
                <NotFound />
            )}
        </div>
    );
};

export default Page;
