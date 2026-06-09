import { useState } from 'react';
import { StateBasic } from './StateBasic';
import { PropsChildren } from './PropsChildren';
import { book } from './book';
import { StatePlanet } from './StatePlanet';
import { EventMouse } from './EventMouse';
import { EventObj } from './EventObj';
import { StateForm } from './StateForm';
import { RefBasic } from './RefBasic';
import { LazyBasic } from './LazyBasic';
import { PortalBasic } from './PortalBasic';
import { ThrowError } from './ThrowError';
import { RetryError } from './RetryError';
import { MaterialBasic } from './MaterialBasic';
import { ErrorBoundary } from 'react-error-boundary';
import { MaterialDrawer } from './MaterialDrawer';
import { GridBasic } from './GridBasic';
import { MyButton } from './MyButton';
import { StateEffect } from './StateEffect';
import { HookTimer } from './HookTimer';
import { HookCallbackRef } from './HookCallbackRef';
import { HookReducer } from './HookReducer';

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
      <br></br>
      <LazyBasic />
      <div>
        <div id='ahra' style={{ padding: '2em', border: '1px solid', margin: '2em' }}>
          ここにぶち込んでみよ！！
        </div>
      </div>
      <PortalBasic />
      <ErrorBoundary fallback='エラーでちゅよ〜fallback'>
        <ThrowError />
      </ErrorBoundary>
      <RetryError />
      <MaterialBasic />
      <MaterialDrawer />
      <GridBasic />
      <MyButton />
      <br />
      <hr />
      <br />
      <StateEffect init={0} />
      <HookTimer init={10} />
      <br />
      <HookCallbackRef />
      <br />
      <HookReducer init={10} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
