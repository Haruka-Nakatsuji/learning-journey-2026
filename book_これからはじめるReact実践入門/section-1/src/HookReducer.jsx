import { useReducer, useState } from 'react';

export const HookReducer = ({ init }) => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'update':
          return { count: state.count + action.step };
          break;
        case 'reset':
          return { count: action.init };
        default:
          return state;
          break;
      }
    },
    {
      count: init,
    },
  );

  const handleUp = () => dispatch({ type: 'update', step: 1 });
  const handleDown = () => dispatch({ type: 'update', step: -1 });
  const handleReset = () => dispatch({ type: 'reset', init: 0 });

  console.log('StateBasic');
  return (
    <>
      <button onClick={handleUp}>カウントあっぷ</button>
      <button onClick={handleDown}>カウントダウン</button>
      <button onClick={handleReset}>リセット</button>
      <p>{state.count}回クリックされたにょ</p>
    </>
  );
};
