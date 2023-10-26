import React from 'react';
import { StyledTable, TableContainer } from './styles/TableStyle1';
import { Link } from 'react-router-dom';

const TablePrimary = ({
    columns = [],
    data = [],
    navigateTo,
    setValueFunction,
    setValueObject
}) => {

    const formatCellValue = (value) => {
        if (typeof value === 'boolean') {
            return value ? 'Sim' : 'Não';
        } else if (typeof value === 'object' && value !== null) {
            return value.name;
        } else {
            return value;
        }
    };

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
                                            {formatCellValue(row[column.filed])}
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
