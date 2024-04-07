import { useContext } from "react";
import { SearchContext } from "./SearchContext";
import { UserCard } from "../UserCard/UserCard";

import "./style.css";

export function SearchResults() {
  const { users, isLoading, isError } = useContext(SearchContext);

  if (isError) {
    return <span className="usersList">Error Loading</span>
  }

  return (
    <div className="usersList">

      {isLoading 
      ? <span>Loading...</span>
      : users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))
      }

    </div>
  );
}
