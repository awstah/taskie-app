import { CircleSlash } from "lucide-react";
import React from "react";

const NotFound = () => {
    return (
        <div className="w-full text-center h-44 bg-gray-100 mt-5 text-sm flex flex-col space-y-3 items-center justify-center">
            <CircleSlash className="text-gray-400" size="34px" />
            <span className="text-gray-400">No Todo Found!</span>
        </div>
    );
};

export default NotFound;
