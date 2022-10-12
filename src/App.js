import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        { path: "/topics", 
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics> },
        { path: "/statistics", element: <Statistics></Statistics> },
        { path: "/blog", element: <Blog></Blog> },
      ],
    },
    { path: "*", element: <Error></Error> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
