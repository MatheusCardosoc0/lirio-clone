import { Outlet, useNavigate } from "react-router-dom";
import { OptionButton, OptionsContainer } from "../../../components/containers";
import { AiOutlinePlus } from "react-icons/ai";

const Container = () => {

    const navigation = useNavigate()

    return (
        <>
            <OptionsContainer>
                <OptionButton $color="green" onClick={() => navigation("/pessoal/grupos/new_group")}
                    title="Cadastrar novo grupo"
                >
                    <AiOutlinePlus />
                </OptionButton>
            </OptionsContainer>
            <Outlet />
        </>
    );
}

export default Container;
