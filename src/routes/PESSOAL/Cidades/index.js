import { Outlet, useNavigate } from "react-router-dom";
import { OptionButton, OptionsContainer } from "../../../components/containers";
import { AiOutlinePlus } from "react-icons/ai";

const Container = () => {

    const navigation = useNavigate()

    return (
        <>
            <OptionsContainer>
                <OptionButton $color="green" onClick={() => navigation("/pessoal/cidades/new_city")}
                    title="Cadastrar nova cidade"
                >
                    <AiOutlinePlus />
                </OptionButton>
            </OptionsContainer>
            <Outlet />
        </>
    );
}

export default Container;
