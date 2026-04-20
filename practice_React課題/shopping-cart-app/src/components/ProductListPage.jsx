import { useState } from 'react';

export const ProductListPage = ({ cartItems, setCartItems }) => {
  const [items, setItems] = useState([
    { id: 1, name: 'うんちょっちょ', price: 150 },
    { id: 2, name: 'てっちゃん', price: 1200 },
    { id: 3, name: 'ディベイニー', price: 24 },
    { id: 4, name: '糸原健斗', price: 33 },
    { id: 5, name: 'れいおとんきょうじ', price: 10000 },
    { id: 6, name: '浜地真澄', price: 36 },
    { id: 7, name: 'matt', price: 2394 },
    { id: 8, name: '西園寺輝彦', price: 101000 },
  ]);

  const onClickBuy = (id) => {
    const buyItem = items.find((item) => item.id === id);
    const newCartItems = [...cartItems, buyItem];
    setCartItems(newCartItems);
  };

  return (
    <>
      <h1>商品一覧</h1>
      <ul>
        {items.map(({ id, name, price }) => (
          <li key={id}>
            {name} 値段:{price} <button onClick={() => onClickBuy(id)}>購入</button>
          </li>
        ))}
      </ul>
    </>
  );
};
