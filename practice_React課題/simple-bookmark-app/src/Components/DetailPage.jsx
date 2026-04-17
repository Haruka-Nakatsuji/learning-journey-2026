import { useParams } from 'react-router';

export const DetailPage = ({ data }) => {
  const params = useParams();

  // filterの最初だけ版
  const site = data.find((item) => item.id === Number(params.id));

  if (!site) {
    return <p>なし</p>;
  }

  const { title, url, description } = site;

  return (
    <>
      <h1>{title}</h1>
      <p>{url}</p>
      <p>{description}</p>
    </>
  );
};
