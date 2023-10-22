import { Navigate, createBrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import CentralDeAtendimentosPage from "./ATENDIMENTO/CentralDeAtendimentosPage";
import App from "../App";
import Pessoas from "./PESSOAL/Pessoas";
import NewPerson from "./PESSOAL/Pessoas/NewPerson";
import SearchPersons from "./PESSOAL/Pessoas/SearchPersons";
import ChangePerson from "./PESSOAL/Pessoas/ChangePerson";
import Grupos from "./PESSOAL/Grupos"
import NewGroup from "./PESSOAL/Grupos/NewGroup";
import SearchGroups from "./PESSOAL/Grupos/SearchGroups";
import ChangeGroup from "./PESSOAL/Grupos/ChangeGroup";
import Cidade from "./PESSOAL/Cidades";
import NewCity from "./PESSOAL/Cidades/NewCity";
import SearchCities from "./PESSOAL/Cidades/SearchCities";
import ChangeCity from "./PESSOAL/Cidades/ChangeCity";
import GrupoProdutos from "./MATERIAIS/GrupoProdutos";
import SearchGroupProduct from "./MATERIAIS/GrupoProdutos/SearchGroupProduct";
import NewGroupProduct from "./MATERIAIS/GrupoProdutos/NewGroupProduct";
import ChangeGroupProduct from "./MATERIAIS/GrupoProdutos/ChangeGroupProduct";

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
                element: <Pessoas />,
                children: [
                    {
                        path: '/pessoal/pessoas',
                        element: <SearchPersons />,
                        index: true
                    },
                    {
                        path: '/pessoal/pessoas/new_person',
                        element: <NewPerson />
                    },
                    {
                        path: '/pessoal/pessoas/change/:id',
                        element: <ChangePerson />
                    },
                ]
            },
            {
                path: '/pessoal/grupos',
                element: <Grupos />,
                children: [
                    {
                        path: '/pessoal/grupos',
                        element: <SearchGroups />,
                        index: true
                    },
                    {
                        path: '/pessoal/grupos/new_group',
                        element: <NewGroup />
                    },
                    {
                        path: '/pessoal/grupos/change/:id',
                        element: <ChangeGroup />
                    }
                ]
            },
            {
                path: '/pessoal/cidades',
                element: <Cidade />,
                children: [
                    {
                        path: '/pessoal/cidades',
                        element: <SearchCities />,
                        index: true
                    },
                    {
                        path: '/pessoal/cidades/new_city',
                        element: <NewCity />
                    },
                    {
                        path: '/pessoal/cidades/change/:id',
                        element: <ChangeCity />
                    }
                ]
            },
            //MATERIAIS
            {
                path: '/materiais/grupos de produtos',
                element: <GrupoProdutos />,
                children: [
                    {
                        path: '/materiais/grupos de produtos',
                        element: <SearchGroupProduct />,
                        index: true
                    },
                    {
                        path: '/materiais/grupos de produtos/new_group_product',
                        element: <NewGroupProduct />
                    },
                    {
                        path: '/materiais/grupos de produtos/change/:id',
                        element: <ChangeGroupProduct />
                    }
                ]
            },

            //ATENDIMENTO
            {
                path: 'atendimento/central de atendimentos',
                element: <CentralDeAtendimentosPage />
            }
        ]
    }
])