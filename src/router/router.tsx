import { createBrowserRouter } from 'react-router';
import { App } from '../App';
import { APP_ROUTES } from './appRoutes';
export const router = createBrowserRouter([
  {
    path: APP_ROUTES.HOME,
    element: <App />,
  },
]);
