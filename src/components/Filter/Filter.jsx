import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";

const Filter = ({ filterBy, setFilter, searchQuery, setSearchQuery }) => {
  return (
    <Menu secondary>
      <Menu.Item
        active={filterBy === "all"}
        onClick={setFilter.bind(this, "all")}
      >
        Все
      </Menu.Item>

      <Menu.Item
        active={filterBy === "price_hight"}
        onClick={setFilter.bind(this, "price_hight")}
      >
        Цена (дорогие)
      </Menu.Item>

      <Menu.Item
        active={filterBy === "price_low"}
        onClick={setFilter.bind(this, "price_low")}
      >
        Цена (дешовые)
      </Menu.Item>

      <Menu.Item
        active={filterBy === "author"}
        onClick={setFilter.bind(this, "author")}
      >
        Автор
      </Menu.Item>

      <Menu.Item>
        <Input
          icon="search"
          onChange={e => setSearchQuery(e.target.value)}
          value={searchQuery}
          placeholder="Поиск по книгам..."
        />
      </Menu.Item>
    </Menu>
  );
};

export default Filter;
