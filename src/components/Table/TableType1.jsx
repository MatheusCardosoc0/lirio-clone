import React from 'react';
import { StyledTable } from './styles/TableStyle1';

const TablePrimary = ({ columns = [], data = [] }) => {
    return (
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
                            <td key={colIndex} data-label={column.label}>{row[column.filed]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </StyledTable>
    );
}

export default TablePrimary;
