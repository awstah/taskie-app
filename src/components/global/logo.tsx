import { ScrollText } from "lucide-react";
import React from "react";

export const Logo = () => {
    return (
        <div className="flex items-center space-x-1 text-[#E53B5B]">
            <ScrollText strokeWidth="2.5px" size="28px" />
            <h3 className="font-bold text-xl">Taskie .</h3>
        </div>
    );
};
