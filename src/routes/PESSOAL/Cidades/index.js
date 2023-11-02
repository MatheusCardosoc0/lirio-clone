import { Outlet } from "react-router-dom";
import BasicOptionsContainer from "../../../components/containers/BasicOptionsContainer";

const Container = () => {

    return (
        <>
            <BasicOptionsContainer url={"/pessoal/cidades"} />
            <Outlet />
        </>
    );
}

export default Container;
