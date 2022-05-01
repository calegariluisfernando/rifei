import React from "react";

import { createContext, ReactNode, useContext, useState } from "react";
import Loading from "../../components/Loading/Loading";

interface LoadingType {

    isLoading: boolean,
    toggle: (v: boolean) => void
}

const LoadingContext = createContext<LoadingType>({} as LoadingType);

function LoadingProvider({ children }: { children: ReactNode }) {

    const [isLoading, setIsLoading] = useState(false);

    const toggle = (v: boolean): void => {

        setIsLoading(v);
    }

    const value = { isLoading, toggle };

    return (
        <LoadingContext.Provider value={value}>
            {isLoading && <Loading />}
            {children}
        </LoadingContext.Provider>
    );
}

function useLoading() {

    return useContext(LoadingContext);
}

export default LoadingProvider;
export { useLoading };