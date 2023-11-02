import { Outlet } from "react-router-dom";
import BasicOptionsContainer from "../../../components/containers/BasicOptionsContainer";

const Container = () => {

    return (
        <>
            <BasicOptionsContainer url={"/utilitarios/usuarios"} />
            <Outlet />
        </>
    );
}

export default Container;
