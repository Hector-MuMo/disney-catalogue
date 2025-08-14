import { createBrowserRouter } from 'react-router';
import { App } from '../App';
import { APP_ROUTES } from './appRoutes';
import Favorites from '../pages/Favorites';
import Characters from '../pages/Characters';

export const router = createBrowserRouter([
  {
    path: APP_ROUTES.HOME,
    element: <App />,
  },
  {
    path: APP_ROUTES.FAVORITES,
    element: <Favorites />,
  },
  {
    path: APP_ROUTES.CHARACTER_DETAILS,
    element: <Characters />,
  },
]);
