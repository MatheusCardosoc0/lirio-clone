import { Outlet, useNavigate } from "react-router-dom";
import { OptionButton, OptionsContainer } from "../../../components/containers";
import { AiOutlinePlus } from "react-icons/ai";

const Container = () => {

    const navigation = useNavigate()

    return (
        <>
            <OptionsContainer>
                <OptionButton
                    $color="green"
                    onClick={() => navigation("/pessoal/pessoas/new_person")}
                    title="Cadastrar nova pessoa"
                >
                    <AiOutlinePlus />
                </OptionButton>
            </OptionsContainer>

            <Outlet />
        </>
    );
}

export default Container;
