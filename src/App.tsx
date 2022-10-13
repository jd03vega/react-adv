import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
// import { Navigation } from './routes/Navigation';
import { AppRoutes } from './routes/AppRoutes';
import { LazyPage1, LazyPage2, LazyPage3 } from './01-lazyload/pages';
import { lazy } from 'react';
import { Navigation } from './routes/Navigation';

const Lazy1 = lazy(() => import('./01-lazyload/pages/LazyPage1'));
const Lazy2 = lazy(() => import('./01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import('./01-lazyload/pages/LazyPage3'));


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoutes />,
    children: [
      {
        path: "/lazy1",
        element: Lazy1,
      },
      {
        path: "/lazy2",
        element: Lazy2,
      },
      {
        path: "/lazy3",
        element: Lazy3,
      },
      {
        path: "/",
        element: <Navigate to={'/lazy1'} replace />,
      }         
    ],
  }
]);


function App() {
  return (
    <>
      <Navigation/>
      {/* <RouterProvider router={router} /> */}
    </>
  );
}

export default App;
