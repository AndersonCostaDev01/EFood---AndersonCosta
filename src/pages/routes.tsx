import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
         path: '/',
         element: <h1>Home</h1>,
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