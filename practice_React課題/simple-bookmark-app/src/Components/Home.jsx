import { useState } from 'react';
import { Link, useLocation } from 'react-router';

export const Home = ({ data }) => {
  return (
    <>
      <h1>ブックマークアプリ</h1>
      <Link to='add'>追加はこちら！</Link>
      <ul>
        {data?.map(({ title, url, description, id }) => (
          <li key={id} style={{ marginBottom: '40px' }}>
            <Link to={`/site/${id}`}>
              <dl>
                <dt>サイト名</dt>
                <dd>{title}</dd>
                <dt>URL</dt>
                <dd>{url}</dd>
              </dl>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
