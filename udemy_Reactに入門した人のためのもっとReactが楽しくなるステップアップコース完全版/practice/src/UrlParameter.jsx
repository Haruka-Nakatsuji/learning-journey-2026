import { useLocation, useParams } from 'react-router-dom';

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <div>
      <p>パラメーターだにょーん</p>
      <p>{id}</p>
      <p>クエリパラメータは{query.get('name')}です</p>
    </div>
  );
};
