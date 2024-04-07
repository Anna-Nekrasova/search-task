import { SearchContext } from "../SearchResults/SearchContext";
import "./styles.css";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export function SearchForm() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { getDataUsers } = useContext(SearchContext);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      getDataUsers(searchQuery);
    }, 1000)
    return () => clearTimeout(delayDebounceFn)
  }, [searchQuery]);

  return (
    <div className="searchForm">
      <form>
        <input 
          type="text" 
          placeholder="Name..." 
          onChange={ (e) => setSearchQuery(e.target.value) } 
          required 
        />
      </form>
    </div>
  );
}
