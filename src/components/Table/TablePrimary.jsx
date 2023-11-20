import React from 'react';
import { StyledTable, TableContainer } from './TablePrimaryStyle';
import { useNavigate } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import { capitalizeFirstLetter } from '../../functions/util/capitalizeFirstLetter';
import { useDispatch } from 'react-redux';
import { AddNewShortcut } from '../../redux/actions/ShortCutsNavActions';
import { extractNameFromUrl } from '../../functions/util/extractNameFromUrl';

const TablePrimary = ({
    columns = [],
    data,
    navigateTo,
    setValueFunction,
    setValueObject,
    loading
}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const formatCellValue = (value) => {
        if (typeof value === 'boolean') {
            return value ? 'Sim' : 'Não';
        } else if (typeof value === 'object' && value !== null) {
            return value.name;
        } else {
            return value;
        }
    };

    if (loading) {
        return (
            <>
                <Skeleton
                    variant='rectangular'
                    height={40}
                    width={"90%"}
                    animation="pulse"
                    style={{
                        marginTop: '40px'
                    }}
                />
                <Skeleton
                    variant='rectangular'
                    height={200}
                    width={"90%"}
                    animation="pulse"
                />
            </>
        )
    }

    function NavigateAndSetShortCutUrl(id) {
        const path = window.location.pathname
        const link = `${path}/${navigateTo}/${id}`
        const name = extractNameFromUrl(path) + ` ${id}`
        dispatch(AddNewShortcut({ name, link }))
        navigate(`${navigateTo}/${id}`)
    }

    return (
        <TableContainer>
            <StyledTable>
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>{column.label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}
                            onClick={() => {
                                !setValueFunction && NavigateAndSetShortCutUrl(row.id)
                            }}
                        >
                            {columns.map((column, colIndex) => (
                                <td key={colIndex} data-label={column.label}>
                                    {!setValueFunction && (
                                        formatCellValue(row[column.filed])
                                    )}
                                    {setValueFunction && (
                                        <button
                                            onClick={() => {
                                                setValueObject ? setValueFunction({ ...row })
                                                    :
                                                    setValueFunction(row.id, row.nome || row.name)
                                            }}
                                        >
                                            {formatCellValue(row[column.filed])}
                                        </button>
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </StyledTable>
        </TableContainer>
    );
}

export default TablePrimary;
