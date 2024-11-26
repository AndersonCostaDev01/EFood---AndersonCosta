import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import { HomeItens } from "../components/HomeItens";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <h1>Erro na pagina</h1>,
    },
    {
        path: '/teste',
        element: <HomeItens />
    }
]);
export default router;