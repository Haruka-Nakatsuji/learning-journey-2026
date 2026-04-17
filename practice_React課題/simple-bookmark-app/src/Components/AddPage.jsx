import { useState } from 'react';
import { useNavigate } from 'react-router';

export const AddPage = ({ data, setData }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  const onClickAdd = () => {
    const id = Date.now();
    setData([...data, { title, url, description, id }]);
    navigate('/');
  };

  return (
    <>
      <input type='text' placeholder='サイト名' value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type='url' placeholder='URL' value={url} onChange={(e) => setUrl(e.target.value)} />
      <input type='text' placeholder='説明' value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={onClickAdd}>追加</button>
    </>
  );
};
