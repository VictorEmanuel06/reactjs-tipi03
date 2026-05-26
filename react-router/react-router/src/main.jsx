import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import Contact from './routes/Contact.jsx';

//Página de erro
import ErrorPage from './routes/ErrorPage.jsx';

//componente base
import Home from './routes/Home.jsx';

//Rota dinâmica
import Product from './routes/Product.jsx';

//Rota aninhada
import Info from './routes/Info.jsx';

//Search Params
import Search from './routes/Search.jsx';


import { createBrowserRouter, RouterProvider, Route, Navigate } from 'react-router-dom';


const router = createBrowserRouter([
{
  path: "/",
  element: <App />,
  errorElement: <ErrorPage />,

  //componente base
  children: [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "contatos",
      element: <Contact />
    },
    {
      path:"products/:id",
      element: <Product />
    },
    {
      path:"products/:id/info",
      element: <Info />
    },
    {
      path:"search",
      element: <Search />
    },

    //redirecionamento
    {
      path: "paginainicial",
      element: <Navigate to="/" />
    }
  ]
},

// {
//   path: "contatos",
//   element: <Contact />
// },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
