"use client";

import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/lib/store";
import { Provider } from "react-redux";
import { Toaster } from "@/components/ui/sonner";

// ... normal setup, create store and persistor, import components etc.

export const PersistProvider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
                <Toaster />
            </PersistGate>
        </Provider>
    );
};
