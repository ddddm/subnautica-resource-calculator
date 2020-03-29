import React, { useContext, useState, useCallback, useRef } from "react";

import { assignColor } from "../data/tools";
import ItemsContext from "../itemsContext";
import ItemList from "./ItemList";
import styles from "./Search.module.css";
import { cn } from "../utils";

const getList = materials =>
  Array.from(materials).map(element => ({
    token: element[0],
    name: element[1],
    color: assignColor(element[0])
  }));
const filterItemList = (term, itemsList) => {
  const t = term.toLowerCase();
  return itemsList.filter(({ name }) => name.toLowerCase().indexOf(t) !== -1);
};

const hasTerm = term => {
  return Boolean(term);
};

export default function Search({ className, onItemSelect }) {
  const { materials } = useContext(ItemsContext);
  const { current: itemsList } = useRef(getList(materials));
  const [term, updateTerm] = useState();
  const [isSearchResultsShown, toggleSearchResults] = useState(false);

  const list = (hasTerm(term)
    ? filterItemList(term, itemsList)
    : itemsList
  ).slice(0, 5);

  const handleSearch = useCallback(event => updateTerm(event.target.value), []);
  const handleItemSelection = useCallback(
    item => {
      onItemSelect(item);
      toggleSearchResults(false);
    },
    [onItemSelect, toggleSearchResults]
  );
  const handleSearchFocus = useCallback(() => {
    toggleSearchResults(true);
  }, [toggleSearchResults]);
  return (
    <div className={cn(className, styles.container)}>
      <input
        className={styles.input}
        onChange={handleSearch}
        onFocus={handleSearchFocus}
      />
      {isSearchResultsShown && (
        <ItemList
          className={styles.list}
          onItemSelect={handleItemSelection}
          list={list}
        />
      )}
    </div>
  );
}
