import React, { createContext, useState } from "react";
import { useEffect } from "react/cjs/react.production.min";

const StickySearchContext = createContext();

function StickSearchProvider(props) {
  const [hasFocused, setHasFocused] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState(true);
  const [loadingPercent, setLoadingPercent] = useState(0);
  const [clickedResult, setClickedResult] = useState(false);

  const vals = {
    search,
    setSearch,
    searchResults,
    setSearchResults,
    loadingSearch,
    setLoadingSearch,
    hasFocused,
    setHasFocused,
    loadingPercent,
    clickedResult,
    setClickedResult
  };

  return (
    <StickySearchContext.Provider value={vals}>
      {props.children}
    </StickySearchContext.Provider>
  );
}

export { StickySearchContext, StickSearchProvider };
