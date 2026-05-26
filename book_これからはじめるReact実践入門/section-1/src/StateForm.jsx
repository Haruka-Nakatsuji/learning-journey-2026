import { useId, useRef, useState } from 'react';

export const StateForm = () => {
  const [form, setForm] = useState({ name: '山田たろう', age: 18 });
  const [text, setText] = useState('');

  const id = useId();

  const name = useRef(null);
  const age = useRef(null);

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // const show = (e) => {
  //   setText(`こんちちは、${form.name}です。年齢は${form.age}です`);
  //   e.preventDefault();
  // };
  const show = (e) => {
    setText(`こんちちは、${name.current.value}です。年齢は${age.current.value}です`);
    e.preventDefault();
  };

  return (
    <>
      {/* <form style={{ margin: '40px', border: '1px solid' }}>
        <div>
          <label htmlFor={`name-${id}`}>名前：</label>
          <input type='text' id={`name-${id}`} name='name' value={form.name} onChange={handleForm} />
        </div>
        <div>
          <label htmlFor={`age-${id}`}>年齢：</label>
          <input type='text' id={`age-${id}`} name='age' value={form.age} onChange={handleForm} />
        </div>
        <div>
          <button onClick={show}>みる！</button>
        </div>
        <p>{text}</p>
      </form> */}

      <form style={{ margin: '40px', border: '1px solid' }}>
        <div>
          <label htmlFor={`name-${id}`}>名前：</label>
          <input type='text' id={`name-${id}`} name='name' defaultValue='yamada' ref={name} />
        </div>
        <div>
          <label htmlFor={`age-${id}`}>年齢：</label>
          <input type='text' id={`age-${id}`} name='age' defaultValue='10' ref={age} />
        </div>
        <div>
          <button onClick={show}>みる！</button>
        </div>
        <p>{text}</p>
      </form>
    </>
  );
};
