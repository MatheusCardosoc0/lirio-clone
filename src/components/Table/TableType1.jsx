import React from 'react';
import { StyledTable, TableContainer } from './styles/TableStyle1';
import { Link } from 'react-router-dom';

const TablePrimary = (
    {
        columns = [],
        data = [],
        navigateTo
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
                                    <Link
                                        to={`${navigateTo}/${row.id}`}
                                    >
                                        {row[column.filed]}
                                    </Link>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                {/* <thead>
                    <tr>
                        {Array.from({ length: 20 }).map((_, colIndex) => (
                            <th key={colIndex}>{`Header ${colIndex + 1}`}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 200 }).map((_, rowIndex) => (
                        <tr key={rowIndex}>
                            {Array.from({ length: 20 }).map((_, colIndex) => (
                                <td key={colIndex}>{`Row ${rowIndex + 1} Col ${colIndex + 1}`}</td>
                            ))}
                        </tr>
                    ))}
                </tbody> */}
            </StyledTable>
        </TableContainer>
    );
}

export default TablePrimary;
