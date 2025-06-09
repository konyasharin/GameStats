import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '../constants';

export const AppRoutes: FC = () => {
  return (
    <Routes>
      {ROUTES.map(route => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  );
};
