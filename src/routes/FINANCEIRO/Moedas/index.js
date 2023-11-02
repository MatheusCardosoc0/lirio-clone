import { Outlet } from "react-router-dom";
import BasicOptionsContainer from "../../../components/containers/BasicOptionsContainer";

const Container = () => {

    return (
        <>
            <BasicOptionsContainer url={"/financeiro/moedas"} />
            <Outlet />
        </>
    );
}

export default Container;
