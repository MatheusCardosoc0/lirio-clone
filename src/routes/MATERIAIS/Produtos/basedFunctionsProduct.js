import { useState } from 'react'
import useSubmitDataPostOrPut from '../../../functions/Api/useSubmitDataPostOrPut'
import useDeleteData from '../../../functions/Api/useDeleteData'
import toast from 'react-hot-toast'
import useGetDataSpecific from '../../../functions/Api/useGetDataSpecific'
import { useDispatch, useSelector } from 'react-redux'
import { clearProductData, updateProductData, updateProductField } from '../../../redux/actions/MATERIAIS/productAction'


const useBasedFunctionProduct = (id) => {

    const dispatch = useDispatch();
    const productData = useSelector(state => state.product);

    const [openModalGroup, setOpenModalGroup] = useState(false)

    const urlApi = "/api/product/"
    const urlReturn = "/materiais/produtos"

    const handleChange = (eventOrFieldName, value) => {
        let fieldName, fieldValue;

        if (eventOrFieldName && eventOrFieldName.target) {
            fieldName = eventOrFieldName.target.name;
            fieldValue = eventOrFieldName.target.value;
        } else {
            fieldName = eventOrFieldName;
            fieldValue = value;
        }

        dispatch(updateProductField(fieldName, fieldValue));
    };

    const submitData = useSubmitDataPostOrPut(urlApi, urlReturn, id);
    const DeleteProduct = useDeleteData(`${urlApi}`, id, urlReturn)


    const handleSubmit = (e) => {
        e.preventDefault()

        if (!productData.group) {
            return toast("Informe o grupo do produto")
        }
        submitData(productData)
        dispatch(clearProductData())
    }

    useGetDataSpecific(id, `${urlApi}`, (data) => {
        if (data) {
            dispatch(updateProductData(data));
        }
    })

    return {
        setOpenModalGroup,
        openModalGroup,
        handleSubmit,
        DeleteProduct,
        productData,
        handleChange
    }
}

export default useBasedFunctionProduct