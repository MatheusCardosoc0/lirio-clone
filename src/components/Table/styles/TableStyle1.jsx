import styled from 'styled-components';

const TableContainer = styled.div`
  overflow: auto;
  max-height: 60vh;
  max-width: 98%;

  &::-webkit-scrollbar {
    height: 8px;
    width: 8px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #f7901b;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #F5F5F5;
  }

  scrollbar-width: thin;
  scrollbar-color: #000000 #F5F5F5;
`;

const StyledTable = styled.table`
  width: 100%;
  max-width: 100%; // Alterado para adaptar à tela
  border-collapse: collapse;
  margin: 20px 0;
  box-shadow: 0px 0px 2px #00000092;
  border-radius: 4px;
  font-size: 1.6rem;
  overflow: auto; // Adicionado rolagem horizontal

  th, td {
    padding: 10px 15px;
    text-align: left;
    border: 1px solid #ddd;
  }

  th {
    background-color: blue;
    color: white;
  }

  tr {
    background-color: #e6e9f8;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: orange;
    cursor: pointer;
  }

  button{
    width: 100%;
    height: 100%;
    text-align: start;
    background-color: transparent;
  }

  @media (max-width: 500px) {
    font-size: 1.4rem;
  }
`;

export {
  StyledTable,
  TableContainer
}
