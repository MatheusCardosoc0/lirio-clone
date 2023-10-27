import { Outlet, useNavigate } from "react-router-dom";
import { OptionButton, OptionsContainer } from "../../../components/containers";
import { AiOutlinePlus } from "react-icons/ai";

const Container = () => {

    const navigation = useNavigate()

    return (
        <>
            <OptionsContainer>
                <OptionButton $color="green" onClick={() => navigation("/financeiro/metodos de pagamento/new_payment_terms")}
                    title="Cadastrar novo Metodo de pagamento"
                >
                    <AiOutlinePlus />
                </OptionButton>
            </OptionsContainer>
            <Outlet />
        </>
    );
}

export default Container;
