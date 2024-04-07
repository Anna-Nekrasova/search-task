import { createContext } from "react";
import { SearchContextType } from "../types";

export const SearchContext = createContext<SearchContextType>({
    users: [], 
    getDataUsers: () => {},
    isLoading: false, 
    isError: false,
});
