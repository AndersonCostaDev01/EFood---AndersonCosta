// Importação de Bibliotecas externas
import {  RouterProvider } from "react-router-dom"

// Importação dos estilos globais da pagina 
import { GlobalStyles } from "./globalStyles"

// Importação das rotas do sistema 
import router from "./pages/routes"
import { Provider } from "react-redux"
import store from "./store"

function App() {

  return (
    <Provider store={store}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
