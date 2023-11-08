import React from 'react';
import { StyledTable, TableContainer } from './TablePrimaryStyle';
import { useNavigate } from 'react-router-dom';
import { Skeleton } from '@mui/material';

const TablePrimary = ({
    columns = [],
    data,
    navigateTo,
    setValueFunction,
    setValueObject
}) => {

    const navigate = useNavigate()

    const formatCellValue = (value) => {
        if (typeof value === 'boolean') {
            return value ? 'Sim' : 'Não';
        } else if (typeof value === 'object' && value !== null) {
            return value.name;
        } else {
            return value;
        }
    };

    if (!data) {
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
                                !setValueFunction && navigate(`${navigateTo}/${row.id}`)
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
                                                setValueObject ? setValueFunction('', '', { ...row })
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
