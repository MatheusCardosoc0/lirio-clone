import { Outlet } from "react-router-dom";
import BasicOptionsContainer from "../../../components/containers/BasicOptionsContainer";
import { clearPersonData } from "../../../redux/actions/PESSOAL/personActions";

const Container = () => {

    return (
        <>
            <BasicOptionsContainer
                url={"/pessoal/pessoas"}
                reduxClearDataFunction={clearPersonData}
            />
            <Outlet />
        </>
    );
}

export default Container;
