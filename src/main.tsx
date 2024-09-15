import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import GlobalStyle from './Global-styled.ts'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import PaginaCadastro from './routes/PaginaCadastro/index.tsx'
import InicioHelpy from './routes/PaginaHELPY/index.tsx'
import PaginaMembros from './routes/PaginaMembros/index.tsx'
import Inicio from './routes/PaginaPrincipal/index.tsx'
import Error from './routes/Error/index.tsx'
// import ChatBot from './routes/Chat-bot/index.tsx'

const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Inicio />
      },
      {
        path: '/helpy',
        element: <InicioHelpy />
      },
      // {
      //   path:'/bot',
      //   element: <ChatBot/>
      // },
      {
        path: '/membros',
        element: <PaginaMembros />
      },
      {
        path: '/cadastro',
        element: <PaginaCadastro />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle />
  </StrictMode>,
)
