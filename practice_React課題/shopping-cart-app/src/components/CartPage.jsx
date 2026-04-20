export const CartPage = ({ cartItems }) => {
  const total = cartItems.reduce((acc, cur) => acc + cur.price, 0);
  return (
    <>
      <h1>カート商品一覧</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} 値段:{item.price}
          </li>
        ))}
      </ul>
      合計金額:{total}円
    </>
  );
};
