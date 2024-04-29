import React from "react";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useAppDispatch } from "@/lib/hooks";
import { useSelector } from "react-redux";
import { selectSearch, setSearch } from "@/lib/features/list";

const Search = () => {
    const dispatch = useAppDispatch();
    const search = useSelector(selectSearch);

    const handleSearchInputChange = (e: any) => {
        const searchTerm = e.target.value;
        dispatch(setSearch(searchTerm));
    };

    return (
        <div className="my-5 border rounded-md flex items-center px-2 w-[400px]">
            <Input
                placeholder="Search your Todo"
                className="border-0 outline-none ring-0"
                value={search}
                onChange={handleSearchInputChange}
            />
            <SearchIcon
                size="18px"
                strokeWidth="1px"
                className="text-gray-600"
            />
        </div>
    );
};

export default Search;
