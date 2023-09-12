import React from 'react';
import { StyledTable, TableContainer } from './styles/TableStyle1';
import { Link } from 'react-router-dom';

const TablePrimary = (
    {
        columns = [],
        data = [],
        navigateTo,
        setValueFunction,
        setValueObject
    }) => {

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
                        <tr key={rowIndex}>
                            {columns.map((column, colIndex) => (
                                <td key={colIndex} data-label={column.label}>
                                    {!setValueFunction && (
                                        <Link
                                            to={`${navigateTo}/${row.id}`}
                                        >
                                            {row[column.filed]}
                                        </Link>
                                    )}
                                    {setValueFunction && (
                                        <button
                                            onClick={() => {
                                                setValueObject ? setValueFunction('', '', { ...row })
                                                    :
                                                    setValueFunction(row.id, row.nome || row.name)
                                            }}
                                        >
                                            {row[column.filed]}
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
