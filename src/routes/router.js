import { Navigate, createBrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
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
import SearchProducts from "./MATERIAIS/Produtos/SearchProducts";
import Produtos from "./MATERIAIS/Produtos";
import NewProduct from "./MATERIAIS/Produtos/NewProduct";
import ChangeProduct from "./MATERIAIS/Produtos/ChangeProduct/inex";
import Moedas from "./FINANCEIRO/Moedas";
import CondicaoPagamento from "./FINANCEIRO/Metodos de pagamento"
import Usuarios from "./UTILITARIOS/Usuarios"
import SearchUsers from "./UTILITARIOS/Usuarios/SearchUsers"
import ChangeUser from "./UTILITARIOS/Usuarios/ChangeUser"
import NewUser from "./UTILITARIOS/Usuarios/NewUser"
import SearchCoins from "./FINANCEIRO/Moedas/SearchCoins";
import NewCoin from "./FINANCEIRO/Moedas/NewCoin";
import ChangeCoin from "./FINANCEIRO/Moedas/ChangeCoin";
import SearchPaymentTerms from "./FINANCEIRO/Metodos de pagamento/SearchPaymentTerms";
import NewPaymentTerms from "./FINANCEIRO/Metodos de pagamento/NewPaymentTerms";
import ChangePaymentTerms from "./FINANCEIRO/Metodos de pagamento/ChangePaymentTerms";
import Login from "../Login";
import { GuardedRoutes } from "../components/Auth";
import LoginGuardedRoute from "../components/Auth/LoginGuardedRoute";

const GuardedRoute = ({ children, redirectTo }) => {
    if (window.location.pathname === "/") {
        return <Navigate to={redirectTo} replace />;
    }

    return children;
};

export const router = createBrowserRouter([
    {
        path: "/login",
        element: (
            <LoginGuardedRoute redirectTo="/Dashboard">
                <Login />
            </LoginGuardedRoute>
        )
    },
    {
        path: '/',
        element: (
            <GuardedRoutes redirectTo="/login">
                <App />
            </GuardedRoutes>
        ),
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
                        path: '/pessoal/pessoas/new',
                        element: <NewPerson />
                    },
                    {
                        path: '/pessoal/pessoas/change/:id',
                        element: <ChangePerson />
                    },
                ]
            },
            {
                path: '/pessoal/grupos de pessoas',
                element: <Grupos />,
                children: [
                    {
                        path: '/pessoal/grupos de pessoas',
                        element: <SearchGroups />,
                        index: true
                    },
                    {
                        path: '/pessoal/grupos de pessoas/new',
                        element: <NewGroup />
                    },
                    {
                        path: '/pessoal/grupos de pessoas/change/:id',
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
                        path: '/pessoal/cidades/new',
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
                        path: '/materiais/grupos de produtos/new',
                        element: <NewGroupProduct />
                    },
                    {
                        path: '/materiais/grupos de produtos/change/:id',
                        element: <ChangeGroupProduct />
                    }
                ]
            },
            {
                path: '/materiais/produtos',
                element: <Produtos />,
                children: [
                    {
                        path: '/materiais/produtos',
                        element: <SearchProducts />,
                        index: true
                    },
                    {
                        path: '/materiais/produtos/new',
                        element: <NewProduct />
                    },
                    {
                        path: '/materiais/produtos/change/:id',
                        element: <ChangeProduct />
                    }
                ]
            },
            // FINANCEIRO
            {
                path: '/financeiro/moedas',
                element: <Moedas />,
                children: [
                    {
                        path: '/financeiro/moedas',
                        element: <SearchCoins />,
                        index: true
                    },
                    {
                        path: '/financeiro/moedas/new',
                        element: <NewCoin />
                    },
                    {
                        path: '/financeiro/moedas/change/:id',
                        element: <ChangeCoin />
                    }
                ]
            },
            {
                path: '/financeiro/condicoes de pagamento',
                element: <CondicaoPagamento />,
                children: [
                    {
                        path: '/financeiro/condicoes de pagamento',
                        element: <SearchPaymentTerms />,
                        index: true
                    },
                    {
                        path: '/financeiro/condicoes de pagamento/new',
                        element: <NewPaymentTerms />
                    },
                    {
                        path: '/financeiro/condicoes de pagamento/change/:id',
                        element: <ChangePaymentTerms />
                    }
                ]
            },
            //UTILITÀRIOS
            {
                path: '/utilitarios/usuarios',
                element: <Usuarios />,
                children: [
                    {
                        path: '/utilitarios/usuarios',
                        element: <SearchUsers />,
                        index: true
                    },
                    {
                        path: '/utilitarios/usuarios/new',
                        element: <NewUser />
                    },
                    {
                        path: '/utilitarios/usuarios/change/:id',
                        element: <ChangeUser />
                    }
                ]
            },
        ]
    }
])