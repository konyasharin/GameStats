import { PATHS } from '../constants';
import { Route } from '../types';

import { IndexPage } from '@/pages';

export const ROUTES: Readonly<Route[]> = [
  {
    path: PATHS.INDEX,
    element: <IndexPage />,
  },
];
