import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Dashboard from "./Dashboard";
import Pessoas from "./PESSOAL/Pessoas";
import CentralDeAtendimentosPage from "./ATENDIMENTO/CentralDeAtendimentosPage";
import App from "../App";
import NewPerson from "./PESSOAL/Pessoas/NewPerson";

const GuardedRoute = ({ children, redirectTo }) => {
    if (window.location.pathname === "/") {
        return <Navigate to={redirectTo} replace />;
    }

    return children;
};

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                path: '/',
                element: (
                    <GuardedRoute redirectTo="/Dashboard">
                        {/* Seu componente base, caso haja algum */}
                    </GuardedRoute>
                )
            },
            {
                path: "/Dashboard",
                element: <Dashboard />
            },
            //PESSOAL
            {
                path: '/pessoal/pessoas',
                element: <Pessoas />
            },
            {
                path: '/pessoal/pessoas/new_person',
                element: <NewPerson />
            },
            //ATENDIMENTO
            {
                path: 'atendimento/central de atendimentos',
                element: <CentralDeAtendimentosPage />
            }
        ]
    }
])