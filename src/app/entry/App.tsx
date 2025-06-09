import { FC } from 'react';

import '../styles/index.css';

import { AppRoutes } from '@/app/routing';
import { Background } from '@/shared/ui';

const App: FC = () => {
  return (
    <Background>
      <AppRoutes />
    </Background>
  );
};

export default App;
