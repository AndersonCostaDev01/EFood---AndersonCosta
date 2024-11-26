// Importação de Bibliotecas externas
import {  RouterProvider } from "react-router-dom"

// Importação dos estilos globais da pagina 
import { GlobalStyles } from "./globalStyles"

// Importação das rotas do sistema 
import router from "./pages/routes"

function App() {

  return (
    <>
    <GlobalStyles />
    <RouterProvider router={router} />
    </>
  )
}

export default App
