import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import LayOut from './pages/layout/LayOut';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import About from './pages/about/About';
import Skills from './pages/skills/Skills';
import Experience from './pages/experience/Experience';
import Work from './pages/work/Work';

function App() {
  const Routes = createBrowserRouter([
    {
      path: '/',
      element: <LayOut />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'skills',
          element: <Skills />,
        },
        {
          path: 'experience',
          element: <Experience />,
        },
        {
          path: 'work',
          element: <Work />,
        }
      ],
    },
  ]);

  return (
    <>
    <RouterProvider router={Routes}>
    </RouterProvider>
    </>
  );
};

export default App;
