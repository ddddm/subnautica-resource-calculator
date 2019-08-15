import React, { useContext, useState } from "react";

import ItemsContext from "./itemsContext";
import Search from "./ItemList/Search";
import ItemList from "./ItemList/ItemList";
import RecipeDetails from "./Recipe/RecipeDetails";

import "./globalStyles.css";
import styles from "./App.module.css";

function filterItemList(term, itemsList) {
  const t = term.toLowerCase();
  return itemsList.filter(({ name }) => name.toLowerCase().indexOf(t) !== -1);
}

function hasTerm(term) {
  return Boolean(term);
}

export default function App() {
  const { materials } = useContext(ItemsContext);
  const getList = () =>
    Array.from(materials).map(element => ({
      token: element[0],
      name: element[1]
    }));
  const itemsList = getList(materials);
  const [term, updateTerm] = useState();
  const [selectedItem, selectItem] = useState();
  const handleSearch = event => updateTerm(event.target.value);
  const list = hasTerm(term) ? filterItemList(term, itemsList) : itemsList;
  const renderList = list.slice(0, 10);

  return (
    <>
      <Search
        className={styles.search}
        onSearch={handleSearch}
        term={term}
        list={list}
      />
      <ItemList
        className={styles.list}
        list={renderList}
        onItemSelect={selectItem}
      />
      <RecipeDetails className={styles.details} selectedToken={selectedItem} />
    </>
  );
}
