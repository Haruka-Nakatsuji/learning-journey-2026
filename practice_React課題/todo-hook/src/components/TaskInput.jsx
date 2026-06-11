import { useEffect, useRef } from 'react';

export const TaskInput = ({ value, setValue, handleAdd, inputRef }) => {
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const changeValue = (v) => setValue(v);

  return (
    <div className=''>
      <input type='text' value={value} onChange={(e) => changeValue(e.target.value)} ref={inputRef} />
      <button onClick={handleAdd}>追加</button>
    </div>
  );
};
