import React from 'react'
import { BasicGridContainerForm, PrimaryForm } from '../../../components/Form';
import { ConsultInput } from '../../../components/Inputs';
import { BasicModal } from '../../../components/Modals';
import useBasedFunctionProduct from './basedFunctionsProduct';
import { TextField } from '@mui/material';
import { clearProductData } from '../../../redux/actions/MATERIAIS/productAction';

const BasedFormProduct = ({
    id
}) => {
    const {
        DeleteProduct,
        handleChange,
        handleSubmit,
        openModalGroup,
        productData,
        setOpenModalGroup
    } = useBasedFunctionProduct(id)



    return (
        <>
            <PrimaryForm
                removeFunction={id ? () => DeleteProduct() : null}
                resetFunction={!id ? clearProductData : null}
                onSubmit={e => handleSubmit(e)}
            >
                <BasicGridContainerForm>
                    <TextField
                        label={"Nome"}
                        required
                        value={productData.name}
                        onChange={e => handleChange("name", e.target.value)}
                    />



                    <div>
                        <TextField
                            label={"Preço"}
                            type='number'
                            onChange={e => handleChange("price", e.target.value)}
                            required
                            value={productData.price}
                        />

                        <ConsultInput
                            label={"Grupo de produtos"}
                            onChange={value => handleChange("group", value)}
                            openModal={() => setOpenModalGroup(true)}
                            title={"Consultar grupos de produtos cadastrados"}
                            value={productData.group ? productData.group.name : ''}
                        />
                    </div>

                    <TextField
                        label={"Descrição"}
                        required
                        value={productData.description}
                        onChange={e => handleChange("description", e.target.value)}
                    />


                </BasicGridContainerForm>
            </PrimaryForm>
            {openModalGroup && (
                <BasicModal
                    Url={'/api/group_product'}
                    closeModal={() => setOpenModalGroup(false)}
                    setObject={value => handleChange("group", value)}
                />
            )}
        </>
    );
}

export default BasedFormProduct