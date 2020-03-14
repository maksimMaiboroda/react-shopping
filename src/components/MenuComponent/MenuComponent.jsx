import React from "react";
import { Menu } from "semantic-ui-react";

const MenuComponent = () => {
  return (
    <div>
      <Menu>
        <Menu.Item name="browse" /* onClick={this.handleItemClick} */>
          Магазин книг
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item name="signup">
            Итого: &nbsp;<b>0</b>&nbsp; руб.
          </Menu.Item>

          <Menu.Item name="help" >
            Корзина (&nbsp;<b>0</b>&nbsp;)
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default MenuComponent;
