import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";

const router = createBrowserRouter([
    {
         path: '/',
         element: <Home />,
         errorElement: <h1>Erro na pagina</h1>,
         children: [
            {
                path: '/',
                element: <h1>Boddy</h1>
            }
         ]
    }
]);
export default router;