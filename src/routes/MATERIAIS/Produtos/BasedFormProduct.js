import React from 'react'
import { BasicGridContainerForm, PrimaryForm } from '../../../components/Form';
import { BasicInput, ConsultInput } from '../../../components/Inputs';
import { BasicModal } from '../../../components/Modals';
import useSubmitDataPostOrPut from '../../../functions/useSubmitDataPostOrPut';
import useDeleteData from '../../../functions/useDeleteData';
import useGetDataSpecific from '../../../functions/useGetDataSpecific';
import useBasedFunctionProduct from './basedFunctionsProduct';

const BasedFormProduct = ({
    id
}) => {
    const {
        data,
        openModalProductGroups,
        setData,
        setOpenModalProductGroups,
        urlApi,
        urlReturn
    } = useBasedFunctionProduct()

    const {
        name,
        description,
        group,
        price
    } = data

    console.log(group)

    const handleSubmit = useSubmitDataPostOrPut(urlApi, urlReturn, id);
    const DeleteProduct = useDeleteData(`${urlApi}`, id, urlReturn)

    useGetDataSpecific(id, `${urlApi}`, setData)

    return (
        <>
            <PrimaryForm
                Title={id ? "Alterar produto" : "Cadastro de produtos"}
                urlCancel={urlReturn}
                removeFunction={id ? () => DeleteProduct() : null}
                onSubmit={(e) => handleSubmit(e, data)}
            >
                <BasicGridContainerForm>
                    <BasicInput
                        label={"Nome"}
                        $isLarge
                        onChange={e => setData({ ...data, name: e.target.value })}
                        value={name} />



                    <div>
                        <BasicInput
                            label={"Preço"}
                            $isLarge
                            onChange={e => setData({ ...data, price: e.target.value })}
                            value={price} />

                        <ConsultInput
                            $isLarge
                            label={"Grupo de produtos"}
                            onChange={value => setData({ ...data, group: value })}
                            openModal={() => setOpenModalProductGroups(true)}
                            title={"Consultar grupos de produtos cadastrados"}
                            value={group.name}
                        />
                    </div>

                    <BasicInput
                        label={"Descrição"}
                        $isLarge
                        onChange={e => setData({ ...data, description: e.target.value })}
                        value={description} />


                </BasicGridContainerForm>
            </PrimaryForm>
            {openModalProductGroups && (
                <BasicModal
                    Url={'/api/group_product'}
                    closeModal={() => setOpenModalProductGroups(false)}
                    setObject={value => setData({ ...data, group: value })}
                />
            )}
        </>
    );
}

export default BasedFormProduct