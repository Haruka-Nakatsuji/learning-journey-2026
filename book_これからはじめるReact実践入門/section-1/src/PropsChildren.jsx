import { Fragment } from 'react';

export const PropsChildren = ({ src, children }) => {
  return (
    <>
      {src.map((elem) => (
        <Fragment key={elem.isbn}>{children(elem)}</Fragment>
      ))}
    </>
  );
};
