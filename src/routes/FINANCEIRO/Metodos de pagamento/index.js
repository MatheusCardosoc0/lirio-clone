import { Outlet } from "react-router-dom";
import BasicOptionsContainer from "../../../components/containers/BasicOptionsContainer";

const Container = () => {
    return (
        <>
            <BasicOptionsContainer url={"/financeiro/condicoes de pagamento"} />
            <Outlet />
        </>
    );
}

export default Container;
