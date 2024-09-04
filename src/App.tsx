import Cabecalho from "./components/Cabecalho"
import { Outlet } from "react-router-dom"
import Rodapemain from "./components/Rodape"


function App() {
  return(
    <>
      <Cabecalho/>
      <Outlet/>
      <Rodapemain/>
    </>
    
  )
}

export default App
