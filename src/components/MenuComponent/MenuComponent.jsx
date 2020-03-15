import React from "react";
import { Menu, List, Button, Image, Popup } from "semantic-ui-react";

const CartComponent = ({ title, id, image, removeFromCart }) => {
  return (
    <List selection divided verticalAlign="middle">
      <List.Item>
        <List.Content floated="right">
          <Button onClick={removeFromCart.bind(this, id)} color="red">
            Удалить
          </Button>
        </List.Content>
        <Image avatar src={image} />
        <List.Content floated="right">{title}</List.Content>
      </List.Item>
    </List>
  );
};

const MenuComponent = ({ totalPrice, items, countBookCart }) => {
  return (
    <div>
      <Menu>
        <Menu.Item name="browse" /* onClick={this.handleItemClick} */>
          Магазин книг
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item name="signup">
            Итого: &nbsp;<b>{totalPrice}</b>&nbsp; руб.
          </Menu.Item>
          <Popup
            trigger={
              <Menu.Item name="help">
                Корзина (&nbsp;
                <b>{countBookCart}</b>
                &nbsp;)
              </Menu.Item>
            }
            content={items.map(book => (
              <CartComponent {...book} />
            ))}
            on="click"
            hideOnScroll
          />
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default MenuComponent;
