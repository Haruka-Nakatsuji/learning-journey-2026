export const ColorfulMessage = (props) => {
  // propsはオブジェクト型！！
  console.log(props);
  // 分割代入できる！
  const { color, children } = props;

  const styleA = {
    color,
  };
  return <p style={styleA}>{children}</p>;
};
