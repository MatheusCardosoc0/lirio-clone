import React from 'react'
import { BasicGridContainerForm, PrimaryForm } from '../../../components/Form';
import { ConsultInput } from '../../../components/Inputs';
import { BasicModal } from '../../../components/Modals';
import useBasedFunctionProduct from './basedFunctionsProduct';
import { TextField } from '@mui/material';

const BasedFormProduct = ({
    id
}) => {
    const {
        openModalProductGroups,
        setOpenModalProductGroups,
        urlReturn,
        DeleteProduct,
        group,
        handleSubmit,
        onSubmit,
        register,
        setValue
    } = useBasedFunctionProduct(id)



    return (
        <>
            <PrimaryForm
                Title={id ? "Alterar produto" : "Cadastro de produtos"}
                urlCancel={urlReturn}
                removeFunction={id ? () => DeleteProduct() : null}
                onSubmit={handleSubmit(onSubmit)}
            >
                <BasicGridContainerForm>
                    <TextField
                        label={"Nome"}
                        {...register("name")}
                        required
                    />



                    <div>
                        <TextField
                            label={"Preço"}
                            {...register("price")}
                            type='number'
                            required
                        />

                        <ConsultInput
                            label={"Grupo de produtos"}
                            onChange={value => setValue("group", value)}
                            openModal={() => setOpenModalProductGroups(true)}
                            title={"Consultar grupos de produtos cadastrados"}
                            value={group ? group.name : ''}
                        />
                    </div>

                    <TextField
                        label={"Descrição"}
                        {...register("description")}
                        required
                    />


                </BasicGridContainerForm>
            </PrimaryForm>
            {openModalProductGroups && (
                <BasicModal
                    Url={'/api/group_product'}
                    closeModal={() => setOpenModalProductGroups(false)}
                    setObject={value => setValue("group", value)}
                />
            )}
        </>
    );
}

export default BasedFormProduct