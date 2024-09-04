import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import GlobalStyle from './Global-styled.ts'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Inicio from './routes/PaginaPrincipal/index.tsx'
import InicioHelpy from './routes/PaginaHELPY/index.tsx'
import PaginaMembros from './routes/PaginaMembros/index.tsx'


const router = createBrowserRouter([

  {
    path:'/',
    element: <App/>,
    children: [
      {
        path:'/',
        element: <Inicio/>
      },
      {
        path:'/helpy',
        element: <InicioHelpy/>
      },
      {
        path:'/membros',
        element:<PaginaMembros/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <GlobalStyle/>
  </StrictMode>,
)
