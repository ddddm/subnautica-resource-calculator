import React, { useContext, useState, useCallback, useRef } from "react";

import ItemsContext from "./itemsContext";
import Search from "./ItemList/Search";
import ItemList from "./ItemList/ItemList";
import RecipeDetails from "./Recipe/RecipeDetails";

import "./globalStyles.css";
import styles from "./App.module.css";

const getList = materials =>
  Array.from(materials).map(element => ({
    token: element[0],
    name: element[1]
  }));

const filterItemList = (term, itemsList) => {
  const t = term.toLowerCase();
  return itemsList.filter(({ name }) => name.toLowerCase().indexOf(t) !== -1);
};

const hasTerm = term => {
  return Boolean(term);
};

export default function App() {
  const { materials } = useContext(ItemsContext);
  const { current: itemsList } = useRef(getList(materials));

  const [term, updateTerm] = useState();
  const [selectedItem, selectItem] = useState();
  const [isSearchResultsShown, toggleSearchResults] = useState(false);

  const list = (hasTerm(term)
    ? filterItemList(term, itemsList)
    : itemsList
  ).slice(0, 10);

  const handleSearch = useCallback(event => updateTerm(event.target.value), []);
  const handleItemSelection = useCallback(
    item => {
      selectItem(item);
      toggleSearchResults(false);
    },
    [selectItem, toggleSearchResults]
  );
  const handleSearchFocus = useCallback(() => {
    toggleSearchResults(true);
  }, [toggleSearchResults]);

  return (
    <>
      <Search
        className={styles.search}
        onSearch={handleSearch}
        term={term}
        onFocus={handleSearchFocus}
      />
      {isSearchResultsShown && (
        <ItemList
          className={styles.list}
          list={list}
          onItemSelect={handleItemSelection}
        />
      )}
      <RecipeDetails className={styles.details} selectedToken={selectedItem} />
    </>
  );
}
