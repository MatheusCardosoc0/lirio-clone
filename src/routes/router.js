import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import PessoasPage from "./PESSOAL/PessoasPage";
import CentralDeAtendimentosPage from "./ATENDIMENTO/CentralDeAtendimentosPage";
import App from "../App";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            //PESSOAL
            {
                path: '/pessoal/pessoas',
                element: <PessoasPage />
            },
            //ATENDIMENTO
            {
                path: 'atendimento/central de atendimentos',
                element: <CentralDeAtendimentosPage />
            }
        ]
    }
])