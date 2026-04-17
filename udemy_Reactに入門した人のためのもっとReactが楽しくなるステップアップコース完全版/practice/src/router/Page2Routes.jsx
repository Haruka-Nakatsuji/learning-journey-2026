import { UrlParameter } from '../UrlParameter';
import { Page2 } from '../components/Page2';

export const page2Routes = [
  { path: '/', children: <Page2 /> },
  { path: ':id', children: <UrlParameter /> },
];
