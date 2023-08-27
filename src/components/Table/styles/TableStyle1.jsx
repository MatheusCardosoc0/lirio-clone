// styles.js
import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;

  th, td {
    padding: 10px 15px;
    text-align: left;
    border: 1px solid #ddd;
  }

  th {
    background-color: blue;
    color: white;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: orange;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    tr {
      display: block;
      margin-bottom: 0.625em;
    }

    th, td {
      display: block;
      text-align: right;

      &::before {
        content: attr(data-label);
        float: left;
        font-weight: bold;
        color: blue;
      }
    }

    th {
      display: none; // esconder o cabeçalho
    }
  }
`;
