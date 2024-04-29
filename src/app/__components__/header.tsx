"use client";
import { Logo } from "@/components/global/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Todo } from "./todo";

export const Header = () => {
    const pathname = usePathname();
    return (
        <div className="flex items-center w-full h-16 justify-between p-4 2xl:px-0 2xl:container 2xl:mx-auto">
            <Logo />
            {pathname === "/board" ? (
                <Todo />
            ) : (
                <Link href="/board">
                    <Button size="sm">Get Started</Button>
                </Link>
            )}
        </div>
    );
};
