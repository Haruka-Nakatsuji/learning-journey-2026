import { useState } from 'react';
import { StateBasic } from './StateBasic';
import { PropsChildren } from './PropsChildren';
import { book } from './book';
import { StatePlanet } from './StatePlanet';
import { EventMouse } from './EventMouse';
import { EventObj } from './EventObj';
import { StateForm } from './StateForm';
import { RefBasic } from './RefBasic';

function App() {
  console.log('App');

  return (
    <>
      <StateBasic init={0} />
      <StatePlanet />
      <PropsChildren src={book}>
        {(elem) => (
          <dl>
            <dt>{elem.title}</dt>
            <dd>{elem.price}円</dd>
          </dl>
        )}
      </PropsChildren>
      <EventMouse />
      <EventObj />
      <StateForm />
      <RefBasic />
    </>
  );
}

export default App;
