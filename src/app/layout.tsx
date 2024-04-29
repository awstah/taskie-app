import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { PersistProvider } from "@/providers/persist-provider";
import { Header } from "./__components__/header";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: "Taskie",
    description: "Taskie help you to manage your daily todos",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable
                )}
            >
                <PersistProvider>
                    <Header />
                    <main>{children}</main>
                </PersistProvider>
            </body>
        </html>
    );
}
