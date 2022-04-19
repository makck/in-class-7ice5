import React, { useState } from 'react';
import axios from 'axios';

import Cart from './components/Cart.jsx';
import Items from './components/Items.jsx';
import ItemDetail from './components/ItemDetail.jsx';

export default function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState();

  const addToCart = (item, quantity) => {
    const cartItem = { quantity, ...item };
    setCart([cartItem, ...cart]);
  };

  const setItemDetail = (itemIndex) => {
    setSelectedItemIndex(itemIndex);
  };

  const getItems = () => {
    axios.get('/items').then((result) => {
      console.log(result);
      setItems(result.data.items);
    });
  };

  const createItem = (event) => {
    event.preventDefault();
    axios.post('/items', {
      name: event.target.name.value,
      description: event.target.description.value,
      price: event.target.price.value,
    });
    // .then((result) => {
    //   console.log(result);
    // });
  };

  const selectedItem = items[selectedItemIndex];

  return (
    <div className="container">
      <div className="row">
        <h1 className="page-title">Wow Shopping!</h1>
        <div className="col-6">
          <form onSubmit={createItem}>
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="description" placeholder="Description" />
            <input type="text" name="price" placeholder="Price" />
            <button type="submit">Create Item</button>
          </form>

        </div>
        <div className="col-6"><Items items={items} setItemDetail={setItemDetail} /></div>
        {items.length === 0 && (
          <button type="button" onClick={getItems}>
            Get Items
          </button>
        )}
        <ItemDetail item={selectedItem} addToCart={addToCart} />
        <Cart items={cart} />
      </div>
    </div>
  );
}
