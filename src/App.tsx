import { useState } from "react";
import { SearchForm } from "./components/SearchFrom/SearchForm";
import { SearchContext } from "./components/SearchResults/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { SearchContextType, UserType } from "./components/types";
import { API_URL } from "./components/constants";

export default function App() {
  const [users, setUsers] = useState<UserType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  const getDataUsers = (query: string) => {
    setIsLoading(true);
    fetch(API_URL(query))
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((err) => setIsError(err))
      .finally(() => setIsLoading(false));
  }

  const searchContextProviderValue: SearchContextType = {
    users,
    getDataUsers,
    isLoading,
    isError,
  }

  return (
    <SearchContext.Provider value={searchContextProviderValue}>
      <SearchForm />
      <SearchResults />
    </SearchContext.Provider>
  );
}
